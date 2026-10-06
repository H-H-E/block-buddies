"""Compiler tests use synthetic PNGs only; they are NOT Minecraft captures."""
import copy
import hashlib
import json
from pathlib import Path
import struct
import tempfile
import unittest
import zlib

import tutorials as t


class TutorialCompilerTests(unittest.TestCase):
    def setUp(self):
        self.spec = t.load_json(t.ROOT / 'content/tutorials/bedrock/meetup-marker.json')
        self.module = t.validate_recipe(self.spec)

    def test_reference_validates_against_canonical_contract(self):
        self.assertEqual(self.module['id'], 'tiny-tutorial-remix')
        self.assertEqual(sum(int(p['minutes']) for p in self.module['flow']), 35)

    def test_all_six_independent_states_are_explicit(self):
        self.assertEqual([len(s['frame']['blocks']) for s in self.spec['steps']], [0, 1, 2, 2, 3, 3])
        self.assertEqual([s['frame']['selectedSlot'] for s in self.spec['steps']], [0, 0, 0, 1, 1, 1])

    def test_duplicate_steps_rejected(self):
        self.spec['steps'][1]['id'] = self.spec['steps'][0]['id']
        with self.assertRaisesRegex(t.TutorialError, 'Duplicate'):
            t.validate_recipe(self.spec)

    def test_block_outside_studio_rejected(self):
        self.spec['steps'][1]['frame']['blocks'][0]['at'] = [100, 64, 4]
        with self.assertRaisesRegex(t.TutorialError, 'outside studio'):
            t.validate_recipe(self.spec)

    def test_duplicate_blocks_rejected(self):
        step = self.spec['steps'][1]
        step['frame']['blocks'].append(copy.deepcopy(step['frame']['blocks'][0]))
        with self.assertRaisesRegex(t.TutorialError, 'duplicate block'):
            t.validate_recipe(self.spec)

    def test_missing_annotation_target_rejected(self):
        self.spec['steps'][1]['frame']['target']['at'] = [5, 64, 4]
        with self.assertRaisesRegex(t.TutorialError, 'missing block'):
            t.validate_recipe(self.spec)

    def test_slot_annotation_mismatch_rejected(self):
        self.spec['steps'][0]['frame']['target']['slot'] = 1
        with self.assertRaisesRegex(t.TutorialError, 'selected slot'):
            t.validate_recipe(self.spec)

    def test_java_profile_rejected(self):
        self.spec['profile']['edition'] = 'java'
        with self.assertRaises(t.TutorialError):
            t.validate_recipe(self.spec)

    def test_touch_profile_not_mislabeled_as_supported(self):
        self.spec['profile']['input'] = 'touch'
        with self.assertRaises(t.TutorialError):
            t.validate_recipe(self.spec)

    def test_wildcard_version_rejected(self):
        self.spec['profile']['version'] = '1.21.x'
        with self.assertRaises(t.TutorialError):
            t.validate_recipe(self.spec)

    def test_unknown_skills_rejected(self):
        self.spec['skills'].append('invented-skill')
        with self.assertRaisesRegex(t.TutorialError, 'skill'):
            t.validate_recipe(self.spec)

    def test_cue_drift_rejected(self):
        self.spec['steps'][0]['instruction'] = 'Different instructions.'
        with self.assertRaisesRegex(t.TutorialError, 'drifted'):
            t.validate_recipe(self.spec)

    def test_invalid_camera_rejected(self):
        self.spec['steps'][0]['frame']['position'] = [4.5, 63, 4.5]
        with self.assertRaisesRegex(t.TutorialError, 'inside the floor'):
            t.validate_recipe(self.spec)

    def test_draft_readiness_is_honest(self):
        blockers = t.readiness_blockers(self.spec, self.module)
        self.assertEqual(len(blockers), 6)
        self.assertFalse(self.module['review']['playtested'])

    def test_repeated_builds_are_byte_identical(self):
        self.assertEqual(t.render_bundle(self.spec, self.module), t.render_bundle(self.spec, self.module))

    def test_draft_does_not_invent_screenshots(self):
        files = t.render_bundle(self.spec, self.module)
        self.assertFalse(any(k.endswith(('.svg', '.png')) for k in files))
        self.assertIn(b'not captured', files['learner.md'])
        self.assertIn(b'"automaticCaptureImplemented": false', files['capture-plan.json'])

    def test_adult_machinery_does_not_leak_into_learner_steps(self):
        learner = t.render_bundle(self.spec, self.module)['learner.md'].decode()
        for forbidden in ['minecraft:stone', 'stateChecked', '4 64 4', 'gamemode', 'hintsUsed']:
            self.assertNotIn(forbidden, learner)

    def test_every_shot_resets_absolute_studio_state(self):
        for step in self.spec['steps']:
            commands = t.studio_commands(self.spec, step)
            self.assertIn('fill 0 64 0 12 74 12 minecraft:air', commands)
            self.assertIn('replaceitem entity @s slot.hotbar 0 minecraft:stone 64', commands)
            self.assertFalse(any('@a' in c or '@e' in c for c in commands))
            self.assertEqual(sum(c.startswith('setblock ') for c in commands), len(step['frame']['blocks']))

    def test_existing_output_is_not_overwritten(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaisesRegex(t.TutorialError, 'overwrite'):
                t.write_bundle({'sentinel.txt': b'bad'}, Path(d))
            self.assertFalse((Path(d) / 'sentinel.txt').exists())

    def capture_fixture(self, directory):
        # A real PNG encoding of a blank synthetic test image, never game evidence.
        width, height = self.spec['profile']['width'], self.spec['profile']['height']
        def chunk(kind, data):
            return struct.pack('>I', len(data)) + kind + data + struct.pack('>I', zlib.crc32(kind + data) & 0xffffffff)
        png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0))
        png += chunk(b'IDAT', zlib.compress((b'\x00' + b'\x00' * (width * 3)) * height)) + chunk(b'IEND', b'')
        manifest = {'specSha256': t.digest(self.spec), 'moduleSha256': t.digest(self.module), 'frames': {}}
        for step in self.spec['steps']:
            sid = step['id']
            (directory / f'{sid}.png').write_bytes(png)
            manifest['frames'][sid] = {'file': f'{sid}.png', 'sha256': hashlib.sha256(png).hexdigest(), 'reviewer': 'SYNTHETIC UNIT TEST - NOT GAME EVIDENCE', 'verifiedChecks': list(t.CHECKS), 'targetBox': [0.1, 0.1, 0.2, 0.2]}
        path = directory / 'manifest.json'
        path.write_bytes(t.json_bytes(manifest))
        return path, manifest

    def test_capture_integrity_and_svg_rendering(self):
        with tempfile.TemporaryDirectory() as d:
            path, _ = self.capture_fixture(Path(d))
            captures = t.read_captures(self.spec, self.module, path)
            files = t.render_bundle(self.spec, self.module, captures)
            self.assertEqual(len([k for k in files if k.endswith('.svg')]), 6)
            self.assertIn(b'data:image/png;base64,', files['assets/pick-stone.svg'])
            self.assertNotIn(b'Reviewed capture', files['learner.md'])

    def test_changed_profile_invalidates_receipts(self):
        with tempfile.TemporaryDirectory() as d:
            path, _ = self.capture_fixture(Path(d))
            self.spec['profile']['fov'] = 71
            with self.assertRaisesRegex(t.TutorialError, 'different content'):
                t.read_captures(self.spec, self.module, path)

    def test_bad_hash_rejected(self):
        with tempfile.TemporaryDirectory() as d:
            path, manifest = self.capture_fixture(Path(d))
            manifest['frames']['pick-stone']['sha256'] = '0' * 64
            path.write_bytes(t.json_bytes(manifest))
            with self.assertRaisesRegex(t.TutorialError, 'hash mismatch'):
                t.read_captures(self.spec, self.module, path)

    def test_capture_path_traversal_rejected(self):
        with tempfile.TemporaryDirectory() as d:
            path, manifest = self.capture_fixture(Path(d))
            manifest['frames']['pick-stone']['file'] = '../secrets.png'
            path.write_bytes(t.json_bytes(manifest))
            with self.assertRaisesRegex(t.TutorialError, 'unsafe PNG path'):
                t.read_captures(self.spec, self.module, path)

    def test_offscreen_rectangle_rejected(self):
        with tempfile.TemporaryDirectory() as d:
            path, manifest = self.capture_fixture(Path(d))
            manifest['frames']['pick-stone']['targetBox'] = [0.9, 0.9, 0.3, 0.3]
            path.write_bytes(t.json_bytes(manifest))
            with self.assertRaisesRegex(t.TutorialError, 'outside image'):
                t.read_captures(self.spec, self.module, path)

    def test_missing_privacy_check_rejected(self):
        with tempfile.TemporaryDirectory() as d:
            path, manifest = self.capture_fixture(Path(d))
            manifest['frames']['pick-stone']['verifiedChecks'].remove('no-personal-data')
            path.write_bytes(t.json_bytes(manifest))
            with self.assertRaisesRegex(t.TutorialError, 'checks are missing'):
                t.read_captures(self.spec, self.module, path)

    def test_unreviewed_module_cannot_be_packaged(self):
        with tempfile.TemporaryDirectory() as d:
            out = Path(d) / 'must-not-exist'
            self.assertEqual(t.main(['package', '--id', 'meetup-marker', '--out', str(out)]), 1)
            self.assertFalse(out.exists())


if __name__ == '__main__':
    unittest.main()
