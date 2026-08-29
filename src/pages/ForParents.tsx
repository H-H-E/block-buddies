import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Heart,
  Sparkles,
  Gamepad2,
  Shield,
  Video,
  Settings,
  CheckCircle2,
  ArrowRight,
  Eye,
  UserCheck,
  MessageCircle
} from 'lucide-react';

const learningPhases = [
  {
    icon: Heart,
    title: 'Make',
    description: 'Your child builds something small and satisfying in Minecraft right away, with a mentor beside them.',
  },
  {
    icon: Sparkles,
    title: 'Show & Tell',
    description: 'Each session ends with your child showing and explaining what they made - building confidence and language.',
  },
  {
    icon: Gamepad2,
    title: 'Try',
    description: 'Mentors nudge gentle challenges based on what your child loves - never pressure, always choice.',
  },
  {
    icon: Settings,
    title: 'Fix',
    description: 'When something breaks, mentors walk through calm troubleshooting so setbacks become normal and fixable.',
  },
];

const safetyPoints = [
  {
    icon: Video,
    title: 'Planned Video-Call Format',
    description: 'The pilot is designed around approved video-call channels that guardians can observe; exact setup is shared before matching.',
  },
  {
    icon: UserCheck,
    title: 'Application & Training Plan',
    description: 'Applications and safety training are part of the pilot design. We will confirm readiness before a match is made.',
  },
  {
    icon: Eye,
    title: 'Guardian Involvement',
    description: 'Guardians own account setup, consent, platform readiness, and communication around the child\'s participation.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Escalation Path',
    description: 'Safety questions and concerns will follow a documented route shared with families before sessions begin.',
  },
];

const pacingPoints = [
  'Sessions follow pilot modules: Make, Show & Tell, Try, and Fix - with clear choice points for your child.',
  'Mentors adjust pace to your child, never rushing and never boring them.',
  'When something is hard, mentors use a hint ladder and a calm reset path so confidence never crashes.',
  'The planned session close includes a short, plain-language summary so families can understand what happened.',
];

const faqs = [
  {
    question: 'Is there a fee?',
    answer: 'Block Buddies is in pilot stage, so availability and any family costs are confirmed during intake. Minecraft, a compatible device, and internet access are separate requirements.',
  },
  {
    question: 'How safe is this program?',
    answer: 'Safety is a pilot requirement. The planned format uses approved video-call channels with guardian visibility, an application and training process, and clear safety guidance shared before participation. No in-person meeting is required by the pilot format.',
  },
  {
    question: 'Who are the teen mentors?',
    answer: 'The pilot is designed for teens ages 14-18 who are confident Minecraft players and patient communicators. Applications, safety training, and adult-owned coordination are planned parts of the model; readiness is confirmed before matching.',
  },
  {
    question: 'What does my child need to participate?',
    answer: 'The pilot is Bedrock-first and is designed for Windows PCs, tablets, phones, or consoles that run Minecraft Bedrock; Java may be supported through a separate pathway. You also need reliable internet, a webcam and microphone for video calls, and a session window of roughly 30-45 minutes.',
  },
  {
    question: 'What if my child doesn\'t enjoy it?',
    answer: 'That\'s okay. Tell us what is causing friction so the pilot team can discuss a support adjustment, a pause, or whether the match is a fit.',
  },
  {
    question: 'How much supervision do I need to provide?',
    answer: 'Guardians remain responsible for account setup, consent, platform readiness, and communication. The planned format is guardian-visible, and the pilot team will explain the expected involvement before sessions begin.',
  },
  {
    question: 'Is this just playing video games?',
    answer: 'The core of Block Buddies is the relationship with a teen mentor and growing confidence in Minecraft. Reading, planning, and simple math show up naturally inside projects; some modules offer optional coding or logic connections when a child is curious - but that is never the entry point.',
  },
];

const ForParents = () => {
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
              <Shield className="w-4 h-4" />
              For Parents
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Give Your Child a{' '}
              <span className="gradient-text">Head Start</span> in Tech
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Minecraft-first mentorship for children beginning around age 7. Your child makes, shows, tells, tries, and fixes alongside a relatable teen mentor.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: Gamepad2, text: 'Minecraft-first' },
                { icon: Shield, text: 'Guardian-visible plan' },
                { icon: Heart, text: 'Pilot-stage access' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Link to="/apply/mentee">
              <Button variant="hero" size="xl">
                Sign Up Your Child
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 max-w-4xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              How Personalized Pacing Works
            </h2>
            <p className="text-muted-foreground mb-6">
              The pilot session model uses a simple loop: your child makes something, shows it, tries a
              gentle challenge, and fixes anything that breaks - with support tuned to their mood and energy.
            </p>
            <ul className="space-y-3">
              {pacingPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What They'll Learn */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Your Child Will <span className="gradient-text">Learn</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Through our confidence-first approach, kids make projects they enjoy and can show or explain. Coding and math are optional connections, not the entry point.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <phase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              Your Peace of Mind
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Safety & <span className="gradient-text-accent">Trust</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take safety seriously. Here's how we protect your child.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {safetyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 glass-card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold mb-1">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="glass-card border-none">
                    <AccordionTrigger className="px-6 hover:no-underline">
                      <span className="text-left font-display font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
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
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              The intake form helps us understand fit, platform, and availability. If the pilot has space, we'll share the current next steps after review.
            </p>
            <Link to="/apply/mentee">
              <Button variant="hero" size="xl">
                Sign Up Your Child
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ForParents;
