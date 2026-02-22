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
  Shield, 
  GraduationCap, 
  DollarSign, 
  Video,
  FileText,
  Network,
  Code2,
  Settings,
  CheckCircle2,
  ArrowRight,
  Eye,
  UserCheck,
  MessageCircle
} from 'lucide-react';

const learningPhases = [
  {
    icon: FileText,
    title: 'File Systems & Config',
    description: 'Kids learn to navigate folders, edit configuration files, and understand how games store data.',
  },
  {
    icon: Network,
    title: 'Networking Basics',
    description: 'Understanding IP addresses, servers, and how multiplayer games connect people worldwide.',
  },
  {
    icon: Code2,
    title: 'Logic & Programming',
    description: 'Introduction to programming concepts through Redstone circuits and command blocks.',
  },
  {
    icon: Settings,
    title: 'System Administration',
    description: 'Learning backups, user permissions, and responsible digital citizenship.',
  },
];

const safetyPoints = [
  {
    icon: Video,
    title: 'Video Call Sessions',
    description: 'All mentoring happens on video calls. Parents can observe any session.',
  },
  {
    icon: UserCheck,
    title: 'Vetted Teen Mentors',
    description: 'All mentors complete an application and receive training before matching.',
  },
  {
    icon: Eye,
    title: 'Parent Oversight',
    description: 'You\'ll receive session summaries and can communicate with mentors anytime.',
  },
  {
    icon: MessageCircle,
    title: 'Open Communication',
    description: 'Direct contact with program coordinators for any questions or concerns.',
  },
];

const faqs = [
  {
    question: 'Is this program really free?',
    answer: 'Yes! Block Buddies is 100% free for all families. Our teen mentors volunteer their time, and we\'re supported by donations and grants. The only requirement is that your child has access to Minecraft and a computer with internet.',
  },
  {
    question: 'How safe is this program?',
    answer: 'Safety is our top priority. All sessions happen via video call (Zoom or Google Meet) so you can observe anytime. Our teen mentors complete an application process and training. There are no in-person meetings required, and we have clear safety guidelines that everyone must follow.',
  },
  {
    question: 'Who are the teen mentors?',
    answer: 'Our mentors are teenagers ages 14-17 who are passionate about Minecraft and technology. They apply to join our program, complete training on teaching and safety, and are supervised by adult coordinators. Many are advanced students who love sharing their knowledge.',
  },
  {
    question: 'What does my child need to participate?',
    answer: 'Your child needs: 1) A computer (PC or Mac) with Minecraft Java Edition installed, 2) Reliable internet connection, 3) A webcam and microphone for video calls, 4) About 45 minutes per week for sessions.',
  },
  {
    question: 'What if my child doesn\'t enjoy it?',
    answer: 'That\'s okay! We want this to be a positive experience. If your child isn\'t enjoying the program after a few sessions, you can withdraw at any time with no obligations. We\'ll also work with you to try different approaches or mentor matches if needed.',
  },
  {
    question: 'How much supervision do I need to provide?',
    answer: 'We recommend parents be nearby during the first few sessions. After that, you can choose your level of involvement. You\'ll receive session summaries after each meeting and can join any session you\'d like.',
  },
  {
    question: 'Is this just playing video games?',
    answer: 'While we use Minecraft as our teaching tool, the focus is on real computer science skills. Your child will learn about file systems, networking, programming logic, and system administration. We use Minecraft because it makes these complex concepts accessible and fun!',
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
              Free. Safe. Real skills. Your child learns actual computer science while doing what they love—playing Minecraft.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: DollarSign, text: '100% Free' },
                { icon: Shield, text: 'Supervised & Safe' },
                { icon: GraduationCap, text: 'Real CS Skills' },
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
              Through our confidence-first approach, kids build real tech skills through projects they enjoy and can explain.
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
              Sign up takes just 5 minutes. We'll match your child with a great mentor within a week.
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
