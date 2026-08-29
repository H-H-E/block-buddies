import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Gamepad2, 
  GraduationCap, 
  Shield, 
  ArrowRight,
  Sparkles,
  Users
} from 'lucide-react';

const valueProps = [
  {
    title: 'For Kids',
    icon: Gamepad2,
    color: 'primary',
    description: 'Play Minecraft with a relatable teen mentor, make something you care about, and practice confidence one project at a time.',
    benefits: [
      'Make and show something you built',
      'Tell the story of your project',
      'Try bounded, interest-led challenges',
      'Fix problems with calm support',
    ],
    cta: { text: 'Start Learning', link: '/apply/mentee' },
    gradient: 'from-primary/20 to-secondary/10',
  },
  {
    title: 'For Teen Mentors',
    icon: GraduationCap,
    color: 'secondary',
    description: 'Use your Minecraft experience to practice patience, listening, and one-to-one coaching with a younger learner.',
    benefits: [
      'Mentorship and communication practice',
      'Minecraft-first session guides',
      'Training planned around child safety',
      'A defined pilot role and scope',
    ],
    cta: { text: 'Become a Mentor', link: '/apply/mentor' },
    gradient: 'from-secondary/20 to-accent/10',
  },
  {
    title: 'For Parents',
    icon: Shield,
    color: 'accent',
    description: 'A Minecraft-first pilot designed around clear family involvement and honest expectations about what is ready to test.',
    benefits: [
      'Guardian-visible format planned',
      'Interest-led Minecraft projects',
      'Optional coding or math connections',
      'Pilot scope shared up front',
    ],
    cta: { text: 'Learn More', link: '/for-parents' },
    gradient: 'from-accent/20 to-primary/10',
  },
  {
    title: 'For Communities',
    icon: Users,
    color: 'gold',
    description: 'Interested in exploring a future Minecraft mentorship pilot? Start with a conversation; nothing is promised until the scope is clear.',
    benefits: [
      'Pilot conversations',
      'Minecraft-first format',
      'Interest-led projects',
      'Clear scope before launch',
    ],
    cta: { text: 'Start a Conversation', link: '/about#contact' },
    gradient: 'from-amber-500/20 to-orange-500/10',
  },
];

export const ValuePropsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            Everyone Benefits
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Something for <span className="gradient-text-accent">Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a kid wanting to level up, a teen looking to make a difference, or a parent seeking meaningful learning—we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card-hover p-6 md:p-8 bg-gradient-to-br ${prop.gradient}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${prop.color}/10 border border-${prop.color}/20 flex items-center justify-center flex-shrink-0`}>
                  <prop.icon className={`w-6 h-6 text-${prop.color}`} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">{prop.title}</h3>
                  <p className="text-muted-foreground text-sm">{prop.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {prop.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm">
                    <Sparkles className={`w-4 h-4 text-${prop.color}`} />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link to={prop.cta.link}>
                <Button variant="glass" size="sm" className="group">
                  {prop.cta.text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
