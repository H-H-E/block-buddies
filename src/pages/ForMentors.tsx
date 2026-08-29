import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  FileText,
  Heart,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Video,
  Laptop,
  Wifi,
  UserCheck
} from 'lucide-react';

const benefits = [
  {
    icon: FileText,
    title: 'Mentorship Practice',
    description: 'Practice listening, patience, and leadership by helping a younger learner feel at home in Minecraft.',
  },
  {
    icon: Video,
    title: 'Minecraft-First Role',
    description: 'Use a game you know to guide a child through making, showing, telling, trying, and fixing.',
  },
  {
    icon: Users,
    title: 'Teaching Skills',
    description: 'Practice communication and patience while supporting a younger learner.',
  },
  {
    icon: FileText,
    title: 'Pilot Materials',
    description: 'Use structured module run sheets and clear safety guidance as the pilot materials are made ready.',
  },
];

const responsibilities = [
  'Meet regularly with your mentee according to the pilot plan',
  'Prepare with the assigned session guide',
  'Track progress and celebrate your mentee\'s achievements',
  'Share a short summary with parents after each session',
  'Communicate with parents/guardians as needed',
  'Follow our safety guidelines and code of conduct',
  'Raise any safety or fit concerns promptly through the documented route',
];

const requirements = [
  { icon: UserCheck, text: 'Ages 14-18' },
  { icon: Laptop, text: 'Confident Minecraft player' },
  { icon: Video, text: 'Computer with webcam' },
  { icon: Wifi, text: 'Reliable internet' },
  { icon: Users, text: 'Parent/guardian approval' },
  { icon: Users, text: 'Pilot commitment discussed at intake' },
];

const ForMentors = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              For Mentors
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Become a{' '}
              <span className="gradient-text">Block Buddy</span> Mentor
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share your Minecraft knowledge with a younger learner. Practice patient coaching and help make the game feel welcoming.
            </p>

            <Link to="/apply/mentor">
              <Button variant="hero" size="xl">
                Apply to Become a Mentor
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Mentor */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">Mentor?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              It's not just volunteering—it's an investment in yourself while helping others.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                What You'll <span className="gradient-text">Do</span>
              </h2>
              <p className="text-muted-foreground mb-8">
              As a Block Buddy mentor, you'll guide a younger learner starting around age 7 through a Minecraft-first pilot module.
                 Each session is designed around making, showing, telling, trying, fixing, and choosing what comes next.
              </p>
              
              <ul className="space-y-4">
                {responsibilities.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
                <h3 className="font-display text-xl font-bold mb-6">Requirements</h3>
                <div className="grid grid-cols-2 gap-4">
                  {requirements.map((req) => (
                    <div key={req.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <req.icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-sm">{req.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Mentor <span className="gradient-text-accent">Resources</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The pilot resource set is being assembled to support clear, safe, Minecraft-first mentoring.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Module Guides', description: 'Step-by-step guides for pilot sessions', locked: true },
               { title: 'Coaching Tips', description: 'Ways to explain and encourage without taking over', locked: true },
               { title: 'Reset Paths', description: 'Calm alternatives when a Minecraft task gets stuck', locked: true },
               { title: 'Safety Guidance', description: 'Boundaries and routes for raising concerns', locked: true },
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <h4 className="font-display font-bold mb-2">{resource.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                   <span className="text-xs text-primary font-medium">Shared when pilot readiness is confirmed →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 max-w-4xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Mentor Quality Controls
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Session plan: each pilot module has an opening, guided flow, hint ladder, and exit reflection.</li>
              <li>Safety plan: guardian-visible communication and a documented route for concerns are required before sessions begin.</li>
              <li>Readiness plan: mentor onboarding, run sheets, and coordinator roles are confirmed before matching.</li>
              <li>Honesty plan: families are told what a module covers and what the pilot has actually tested.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10"
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Inspire the Next Generation?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Explore a pilot role designed to help you practice real coaching and leadership skills.
            </p>
            <Link to="/apply/mentor">
              <Button variant="hero" size="xl">
                Apply to Become a Mentor
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ForMentors;
