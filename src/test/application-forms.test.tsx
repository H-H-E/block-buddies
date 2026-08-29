import fs from 'node:fs';
import path from 'node:path';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import MenteeApplication from '@/pages/apply/MenteeApplication';
import MentorApplication from '@/pages/apply/MentorApplication';

const formsDirectory = path.resolve(process.cwd(), 'src/pages/apply');
const menteeSource = fs.readFileSync(path.join(formsDirectory, 'MenteeApplication.tsx'), 'utf8');
const mentorSource = fs.readFileSync(path.join(formsDirectory, 'MentorApplication.tsx'), 'utf8');

const renderForm = (form: JSX.Element) => render(<MemoryRouter>{form}</MemoryRouter>);

describe('application forms', () => {
  it('keeps the mentor form on V3 Bedrock-first mentorship interests', () => {
    expect(mentorSource).toContain('Building houses and cozy spaces');
    expect(mentorSource).toContain('Survival basics and gathering resources');
    expect(mentorSource).toContain('Beginner navigation and exploring safely');
    expect(mentorSource).toContain('Make/Show/Tell/Try/Fix');
    expect(mentorSource).not.toMatch(/Track [ABC]|archetype|fluency|network|server/i);
  });

  it('does not log PII or navigate after the preview action', () => {
    expect(menteeSource).not.toMatch(/console\.(log|info|debug|warn|error)/);
    expect(mentorSource).not.toMatch(/console\.(log|info|debug|warn|error)/);
    expect(menteeSource).not.toMatch(/useNavigate|navigate\(/);
    expect(mentorSource).not.toMatch(/useNavigate|navigate\(/);

    renderForm(<MentorApplication />);
    expect(screen.getAllByText(/Preview only/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: /Continue/i })).toBeDisabled();
  });

  it('validates mentor age numerically and checks both email fields', () => {
    renderForm(<MentorApplication />);
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Mentor' } });
    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '13' } });
    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'mentor@example.com' } });
    fireEvent.change(screen.getByLabelText(/Parent\/Guardian Email/i), { target: { value: 'parent@example.com' } });
    const continueButton = screen.getByRole('button', { name: /Continue/i });
    expect(continueButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '14' } });
    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'not-an-email' } });
    expect(continueButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'mentor@example.com' } });
    expect(continueButton).toBeEnabled();
  });

  it('requires a learner age from 6-10 and a plausible parent email', async () => {
    renderForm(<MenteeApplication />);
    fireEvent.change(screen.getByLabelText(/Child's First Name/i), { target: { value: 'Learner' } });
    fireEvent.change(screen.getByLabelText(/Child's Age/i), { target: { value: '11' } });
    const continueButton = screen.getByRole('button', { name: /Continue/i });
    expect(continueButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Child's Age/i), { target: { value: '7' } });
    fireEvent.click(continueButton);
    fireEvent.change(await screen.findByLabelText(/Your Full Name/i), { target: { value: 'Parent' } });
    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'parent-at-example.com' } });
    expect(screen.getByRole('button', { name: /Continue/i })).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'parent@example.com' } });
    expect(screen.getByRole('button', { name: /Continue/i })).toBeEnabled();
  });

  it('uses accessible controls and requires at least one learner platform', async () => {
    renderForm(<MenteeApplication />);
    fireEvent.change(screen.getByLabelText(/Child's First Name/i), { target: { value: 'Learner' } });
    fireEvent.change(screen.getByLabelText(/Child's Age/i), { target: { value: '7' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    fireEvent.change(await screen.findByLabelText(/Your Full Name/i), { target: { value: 'Parent' } });
    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'parent@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    expect(await screen.findByRole('radio', { name: /Brand new to Minecraft/i })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Windows PC' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('radio', { name: /Brand new to Minecraft/i }));
    fireEvent.click(screen.getByRole('radio', { name: /Bedrock/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: 'Touch screen' }));
    fireEvent.click(screen.getByRole('checkbox', { name: /Building houses/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: /Monday afternoons/i }));

    const continueButton = screen.getByRole('button', { name: /Continue/i });
    expect(continueButton).toBeDisabled();
    fireEvent.click(screen.getByRole('checkbox', { name: 'Windows PC' }));
    expect(continueButton).toBeEnabled();
  });

  it('makes accessibility needs optional and shows a non-submitting preview', async () => {
    renderForm(<MenteeApplication />);
    fireEvent.change(screen.getByLabelText(/Child's First Name/i), { target: { value: 'Learner' } });
    fireEvent.change(screen.getByLabelText(/Child's Age/i), { target: { value: '7' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    fireEvent.change(await screen.findByLabelText(/Your Full Name/i), { target: { value: 'Parent' } });
    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'parent@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    fireEvent.click(await screen.findByRole('radio', { name: /Brand new to Minecraft/i }));
    fireEvent.click(screen.getByRole('radio', { name: /Bedrock/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: 'Windows PC' }));
    fireEvent.click(screen.getByRole('checkbox', { name: 'Touch screen' }));
    fireEvent.click(screen.getByRole('checkbox', { name: /Building houses/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: /Monday afternoons/i }));

    expect(screen.getByLabelText(/Accessibility or support needs/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Continue/i })).toBeEnabled();

    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    await screen.findByRole('heading', { name: /Technical Setup & Consent/i }, { timeout: 3000 });
    fireEvent.click(await screen.findByRole('checkbox', { name: /My child has Minecraft/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: /We have a webcam/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: /I give consent for my child/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: /I acknowledge the safety guidelines/i }));

    const previewButton = screen.getByRole('button', { name: /Review application preview/i });
    expect(previewButton).toBeEnabled();
    fireEvent.click(previewButton);
    expect(screen.getByRole('status')).toHaveTextContent(/Nothing was submitted, saved, or sent/i);
  });
});
