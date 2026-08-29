import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Gamepad2, 
  GraduationCap, 
  FileText,
  Heart,
  Users,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Trophy
} from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Mentorship Practice',
    description: 'Practice leadership and initiative by helping a younger learner feel confident in Minecraft.',
  },
  {
    icon: Gamepad2,
    title: 'Minecraft-First Contribution',
    description: 'Use something you already know to help a younger learner make and explain projects they care about.',
  },
  {
    icon: Users,
    title: 'Communication Practice',
    description: 'Practice communication, patience, and how to explain a Minecraft step simply.',
  },
  {
    icon: FileText,
    title: 'Structured Pilot Materials',
    description: 'Use clear session guides and safety expectations as the pilot materials are made ready.',
  },
];

const expectations = [
  'Agree on a regular session rhythm with the pilot team',
  'Discuss the pilot commitment during intake',
  'Prepare with a structured guide when a module is assigned',
  'Being patient, encouraging, and a good role model',
  'Share a short summary with parents after each session',
  'Following our safety guidelines and code of conduct',
];

const trainingTopics = [
  { title: 'Coaching basics', description: 'Pilot training is planned to cover Make / Show / Tell / Try / Fix sessions with patience and warmth.' },
  { title: 'Child safety', description: 'Pilot onboarding is planned to cover guardian-visible communication, boundaries, and how to raise concerns.' },
  { title: 'Session structure', description: 'Pilot-module guides are planned to include an opening, cues, hint ladder, reset path, and exit reflection.' },
];

const ForTeens = () => {
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
              <Gamepad2 className="w-4 h-4" />
              For Teens (14-18)
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Turn Your Minecraft Skills Into{' '}
              <span className="gradient-text">Something More</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              You already know Minecraft. The pilot invites you to use that experience to help a younger learner feel confident, make things, and tell their story.
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

      {/* Why Join */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">Join?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This is a pilot mentorship role. Here's what the current design asks of you and what it is intended to help you practice.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Expected */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
                What to Expect
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                What's <span className="gradient-text-accent">Expected</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Mentoring is a meaningful commitment. Here's what the pilot role is designed to involve:
              </p>
              
              <ul className="space-y-4">
                {expectations.map((expectation, index) => (
                  <motion.li
                    key={expectation}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{expectation}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 bg-gradient-to-br from-secondary/10 to-accent/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-8 h-8 text-gold" />
                <h3 className="font-display text-xl font-bold">You'll Get:</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  { icon: FileText, text: 'Pilot session guides with fallback options' },
                  { icon: MessageCircle, text: 'A clear route for questions and concerns' },
                  { icon: Sparkles, text: 'Planned onboarding on coaching and child safety' },
                  { icon: Heart, text: 'A chance to practice making Minecraft welcoming' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Preview */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Mentor Training <span className="gradient-text">Covers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trainingTopics.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6 md:p-8"
              >
                <h3 className="font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-secondary/10 to-accent/10"
          >
            <Sparkles className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              The application helps us understand your Minecraft experience, availability, and fit. We'll share the current pilot next steps after review.
            </p>
            <Link to="/apply/mentor">
              <Button variant="hero" size="xl">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ForTeens;
