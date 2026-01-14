import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Network, 
  Code2, 
  Shield,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Zap,
  Palette,
  Server,
  Sparkles,
  BookOpen
} from 'lucide-react';

const phases = [
  {
    phase: 1,
    title: 'The Mechanic',
    subtitle: 'Local Files & Optimization',
    icon: Wrench,
    color: 'primary',
    description: 'Students learn to navigate their computer\'s file system and optimize Minecraft performance.',
    objectives: [
      'Navigate hidden folders and file structures',
      'Edit configuration files (options.txt, servers.dat)',
      'Manage JVM arguments for better performance',
      'Understand how games store and read data',
    ],
    activities: [
      { name: 'The Night Vision Hack', description: 'Edit config files to customize game settings' },
      { name: 'Memory Master', description: 'Optimize RAM allocation for smoother gameplay' },
      { name: 'File Detective', description: 'Navigate hidden folders to find game data' },
    ],
    skills: ['File Systems', 'Text Editing', 'Computer Basics', 'Problem Solving'],
    standards: 'CSTA 1B-AP-09, 1B-AP-10',
  },
  {
    phase: 2,
    title: 'The Network Engineer',
    subtitle: 'Servers & IPs',
    icon: Network,
    color: 'secondary',
    description: 'Understanding how computers communicate over networks through multiplayer gaming.',
    objectives: [
      'Understand the client-server model',
      'Learn TCP/IP basics and port concepts',
      'Set up LAN games and local servers',
      'Diagnose connection issues',
    ],
    activities: [
      { name: 'LAN Party Setup', description: 'Configure a local multiplayer game' },
      { name: 'IP Address Hunt', description: 'Discover and understand network addresses' },
      { name: 'Connection Doctor', description: 'Troubleshoot common network problems' },
    ],
    skills: ['Networking', 'TCP/IP', 'Troubleshooting', 'Server Concepts'],
    standards: 'CSTA 2-NI-04, 2-NI-05',
  },
  {
    phase: 3,
    title: 'The Programmer',
    subtitle: 'Logic & Scripting',
    icon: Code2,
    color: 'accent',
    description: 'Introduction to programming concepts through Minecraft\'s built-in systems.',
    objectives: [
      'Understand Boolean logic through Redstone',
      'Create JSON datapacks',
      'Write and debug command syntax',
      'Build interactive creations',
    ],
    activities: [
      { name: 'The Lightning Sword', description: 'Create a custom command block weapon' },
      { name: 'Logic Gates Lab', description: 'Build Redstone circuits that compute' },
      { name: 'Loot Table Designer', description: 'Write custom JSON loot tables' },
    ],
    skills: ['Boolean Logic', 'JSON', 'Debugging', 'Scripting'],
    standards: 'CSTA 2-AP-13, 2-AP-16, 2-AP-17',
  },
  {
    phase: 4,
    title: 'The Admin',
    subtitle: 'Maintenance & Ethics',
    icon: Shield,
    color: 'gold',
    description: 'Learning responsible system administration and digital citizenship.',
    objectives: [
      'Perform regular backups',
      'Manage user permissions and whitelists',
      'Handle server crashes and recovery',
      'Understand digital ethics and responsibility',
    ],
    activities: [
      { name: 'Backup Drill', description: 'Create and restore world backups' },
      { name: 'Permission Patrol', description: 'Set up user roles and access levels' },
      { name: 'Crash Course', description: 'Diagnose and recover from server failures' },
    ],
    skills: ['Backups', 'User Management', 'Disaster Recovery', 'Ethics'],
    standards: 'CSTA 2-IC-20, 2-IC-21',
  },
];

const tracks = [
  {
    name: 'Track A: Visualist',
    subtitle: 'For Builders',
    icon: Palette,
    description: 'Focus on resource packs, shaders, and visual customization.',
    focus: ['Resource Pack Creation', 'Shader Configuration', 'Texture Design'],
  },
  {
    name: 'Track B: Mechanist',
    subtitle: 'For Engineers',
    icon: Zap,
    description: 'Deep dive into Redstone, automation, and the Create mod.',
    focus: ['Complex Redstone', 'Automation Systems', 'Mod Integration'],
  },
  {
    name: 'Track C: Operator',
    subtitle: 'For Admins',
    icon: Server,
    description: 'Advanced server management, plugins, and infrastructure.',
    focus: ['Server Hosting', 'Plugin Configuration', 'Performance Tuning'],
  },
];

const Curriculum = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 pixel-pattern opacity-20" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Structured Learning
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The <span className="gradient-text">Mastery Tree</span> Curriculum
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A progressive 4-phase curriculum that transforms curious gamers into confident tech enthusiasts—all through Minecraft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              The Four <span className="gradient-text">Phases</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each phase builds on the last, gradually introducing more complex concepts while keeping things fun.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setExpandedPhase(expandedPhase === phase.phase ? null : phase.phase)}
                  className="w-full p-6 flex items-center gap-4 text-left hover:bg-white/5 transition-colors"
                >
                  <div className={`w-14 h-14 rounded-xl bg-${phase.color}/10 border border-${phase.color}/20 flex items-center justify-center flex-shrink-0`}>
                    <phase.icon className={`w-7 h-7 text-${phase.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      Phase {phase.phase}
                    </div>
                    <h3 className="font-display text-xl font-bold">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expandedPhase === phase.phase ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {expandedPhase === phase.phase && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-border"
                    >
                      <div className="p-6 space-y-6">
                        <p className="text-muted-foreground">{phase.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-display font-bold mb-3">Learning Objectives</h4>
                            <ul className="space-y-2">
                              {phase.objectives.map((obj) => (
                                <li key={obj} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className={`w-4 h-4 text-${phase.color} flex-shrink-0 mt-0.5`} />
                                  {obj}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-display font-bold mb-3">Sample Activities</h4>
                            <ul className="space-y-3">
                              {phase.activities.map((activity) => (
                                <li key={activity.name} className="text-sm">
                                  <span className={`text-${phase.color} font-medium`}>{activity.name}:</span>{' '}
                                  <span className="text-muted-foreground">{activity.description}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {phase.skills.map((skill) => (
                            <span key={skill} className={`px-3 py-1 rounded-full bg-${phase.color}/10 text-${phase.color} text-xs font-medium`}>
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="text-xs text-muted-foreground">
                          <Sparkles className="w-3 h-3 inline mr-1" />
                          Aligned with {phase.standards}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Tracks */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              Advanced Paths
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Specialization <span className="gradient-text-accent">Tracks</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              After completing the core curriculum, students can choose a track that matches their interests.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tracks.map((track, index) => (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <track.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-1">{track.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{track.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4">{track.description}</p>
                <ul className="space-y-2">
                  {track.focus.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join Block Buddies and begin your journey through the Mastery Tree today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply/mentee">
                <Button variant="hero" size="lg">
                  Sign Up as a Learner
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/apply/mentor">
                <Button variant="heroOutline" size="lg">
                  Become a Mentor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Curriculum;
