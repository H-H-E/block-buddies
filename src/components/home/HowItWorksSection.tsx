import { motion } from 'framer-motion';
import { UserCheck, Video, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    title: 'Match',
    description: 'The pilot is designed to pair teen mentors (14-18) with young learners starting around age 7, using interests, platform, safety, and availability as fit checks.',
    color: 'primary',
  },
  {
    icon: Video,
    title: 'Learn',
    description: 'The planned format is a guardian-visible video call plus Minecraft, with sessions of roughly 30-45 minutes and flexible stopping points.',
    color: 'secondary',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Children can grow confidence in Minecraft while mentors practice real coaching and leadership; the pilot will help us learn what works.',
    color: 'accent',
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps describe the pilot journey. The shared starting point is a love of Minecraft, with scope and readiness confirmed before participation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass-card-hover p-8 text-center h-full">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${step.color}/10 border border-${step.color}/20 flex items-center justify-center relative z-10`}>
                  <step.icon className={`w-8 h-8 text-${step.color}`} />
                </div>
                <div className="text-sm text-muted-foreground font-medium mb-2">Step {index + 1}</div>
                <h3 className="font-display text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
