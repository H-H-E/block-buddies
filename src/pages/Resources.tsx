import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { 
  BookOpen, 
  Wrench, 
  ExternalLink,
  Lightbulb,
  Code2,
  Palette,
  Server,
  FileJson,
  Box,
  Sparkles
} from 'lucide-react';

const tutorials = [
  {
    title: 'Session 1: Diagnostic + First Win',
    description: 'Profile setup, confidence anchor, and baseline skill check.',
    level: 'Beginner',
    category: 'Runbook',
    comingSoon: true,
  },
  {
    title: 'Session 2: Safety + Backups',
    description: 'Create restore points and run controlled recovery drills.',
    level: 'Beginner',
    category: 'Runbook',
    comingSoon: true,
  },
  {
    title: 'Session 3: Track Onboarding',
    description: 'Start A/B/C specialization with a starter artifact.',
    level: 'Intermediate',
    category: 'Runbook',
    comingSoon: true,
  },
  {
    title: 'Session 4: Foundation + Debug',
    description: 'Build core track systems and fix one seeded failure.',
    level: 'Intermediate',
    category: 'Runbook',
    comingSoon: true,
  },
  {
    title: 'Session 5-6: Extension + Troubleshooting',
    description: 'Unlock side quests and run structured diagnosis loops.',
    level: 'Advanced',
    category: 'Runbook',
    comingSoon: true,
  },
  {
    title: 'Session 7-8: Capstone + Demo',
    description: 'Ship a capstone slice and verify mastery through demo.',
    level: 'Advanced',
    category: 'Runbook',
    comingSoon: true,
  },
];

const tools = [
  {
    name: 'Blockbench',
    description: 'Free 3D modeling software for Minecraft. Create custom models and textures.',
    icon: Box,
    link: 'https://www.blockbench.net/',
    category: 'Design',
  },
  {
    name: 'MCStacker',
    description: 'Generate complex Minecraft commands with an easy-to-use interface.',
    icon: Code2,
    link: 'https://mcstacker.net/',
    category: 'Commands',
  },
  {
    name: 'Nova Skin',
    description: 'Create and customize Minecraft skins with a powerful online editor.',
    icon: Palette,
    link: 'https://minecraft.novaskin.me/',
    category: 'Design',
  },
  {
    name: 'Minecraft Wiki',
    description: 'The comprehensive community-driven encyclopedia for all things Minecraft.',
    icon: BookOpen,
    link: 'https://minecraft.wiki/',
    category: 'Reference',
  },
  {
    name: 'JSON Formatter',
    description: 'Validate and format JSON for data packs and resource packs.',
    icon: FileJson,
    link: 'https://jsonformatter.org/',
    category: 'Utilities',
  },
  {
    name: 'PaperMC',
    description: 'High performance Minecraft server software for advanced hosting.',
    icon: Server,
    link: 'https://papermc.io/',
    category: 'Servers',
  },
];

const projectIdeas = [
  {
    title: 'Custom Loot Tables',
    description: 'Make mobs drop custom items or special rewards',
    difficulty: 'Beginner',
  },
  {
    title: 'Teleportation Hub',
    description: 'Build a command block network to teleport around your world',
    difficulty: 'Intermediate',
  },
  {
    title: 'Mini-Game Arena',
    description: 'Create a complete multiplayer mini-game with scoreboards',
    difficulty: 'Advanced',
  },
  {
    title: 'Custom Resource Pack',
    description: 'Replace textures and sounds with your own designs',
    difficulty: 'Intermediate',
  },
];

const Resources = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Learning Hub
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Resources</span> & Tools
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to learn, practice, and create—whether you're a student, mentor, or just curious.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Tutorials</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Step-by-step guides for learners of all levels.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 relative overflow-hidden"
              >
                {tutorial.comingSoon && (
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium">
                    Coming Soon
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className={`px-2 py-0.5 rounded bg-${tutorial.level === 'Beginner' ? 'primary' : tutorial.level === 'Intermediate' ? 'secondary' : 'accent'}/10 text-${tutorial.level === 'Beginner' ? 'primary' : tutorial.level === 'Intermediate' ? 'secondary' : 'accent'}`}>
                    {tutorial.level}
                  </span>
                  <span>{tutorial.category}</span>
                </div>
                <h3 className="font-display font-bold mb-2">{tutorial.title}</h3>
                <p className="text-sm text-muted-foreground">{tutorial.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Recommended <span className="gradient-text-accent">Tools</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Free tools and resources we recommend for Minecraft modding and learning.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card-hover p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                    <tool.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground">{tool.category}</span>
                <h3 className="font-display font-bold mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4 inline mr-2" />
              Get Inspired
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Project <span className="gradient-text">Ideas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fun projects to practice your skills and show off to friends.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {projectIdeas.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <Sparkles className="w-6 h-6 text-gold mb-3" />
                <span className={`text-xs px-2 py-0.5 rounded bg-${project.difficulty === 'Beginner' ? 'primary' : project.difficulty === 'Intermediate' ? 'secondary' : 'accent'}/10 text-${project.difficulty === 'Beginner' ? 'primary' : project.difficulty === 'Intermediate' ? 'secondary' : 'accent'}`}>
                  {project.difficulty}
                </span>
                <h3 className="font-display font-bold mt-2 mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
