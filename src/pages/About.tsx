import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Target, 
  Lightbulb,
  Users,
  Mail,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Interest-First Learning',
    description: 'We start from what each child already loves in Minecraft - building, animals, stories - and grow from there.',
  },
  {
    icon: Users,
    title: 'Peer-to-Peer Teaching',
    description: 'Teen mentors are closer in age to their mentees, making learning more relatable and less intimidating than adult instruction.',
  },
  {
    icon: Heart,
    title: 'Careful Pilot Access',
    description: 'Block Buddies is being developed as a pilot. Availability, family costs, and support details are shared plainly during intake.',
  },
  {
    icon: Target,
    title: 'Real Skills, Real Fun',
    description: 'Every lesson combines meaningful progress with hands-on projects learners can demonstrate and explain.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Our Story
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text-accent">Block Buddies</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe every kid deserves a patient mentor who takes their Minecraft world seriously—and that the best mentors are often the ones closest to them in age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Block Buddies was founded on a simple observation: kids learn best from people they can relate to. Teen mentors are close enough in age to understand their mentees' world, yet experienced enough to guide them.
              </p>
              <p className="text-muted-foreground mb-4">
                We use Minecraft as the meeting place. Learners build confidence through guided 1-on-1 sessions with teen mentors who follow structured modules built around making, showing, telling, trying, and fixing.
              </p>
              <p className="text-muted-foreground">
                This is a pilot-stage program. We are testing the mentor experience, module pacing, and family workflow carefully before making broader promises about access or outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 bg-gradient-to-br from-accent/10 to-primary/10"
            >
              <Sparkles className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-2xl font-bold mb-4">Confidence-First Approach</h3>
              <p className="text-muted-foreground mb-6">
                Our pedagogy combines an early success moment, guided practice, and optional challenge branches so learners stay motivated while developing durable technical habits.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Making → early wins in a familiar world
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  Showing & telling → confidence and language
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Trying → gentle, choice-based challenges
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  Fixing → calm troubleshooting habits
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="how-it-works" className="py-20 md:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Have a question about the pilot or want to explore whether it is a fit? Email us and we'll share the current scope.
            </p>
            <a href="mailto:hello@blockbuddies.org">
              <Button variant="hero" size="lg">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
