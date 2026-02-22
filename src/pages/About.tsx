import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Target, 
  Lightbulb,
  Users,
  Mail,
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Interest-First Learning',
    description: 'We start from projects kids care about and turn that motivation into real file, network, and logic skills.',
  },
  {
    icon: Users,
    title: 'Peer-to-Peer Teaching',
    description: 'Teen mentors are closer in age to their mentees, making learning more relatable and less intimidating than adult instruction.',
  },
  {
    icon: Heart,
    title: 'Free & Accessible',
    description: 'Quality CS education shouldn\'t be behind a paywall. Block Buddies is 100% free for all families.',
  },
  {
    icon: Target,
    title: 'Real Skills, Real Fun',
    description: 'Every lesson combines meaningful progress with hands-on projects learners can demonstrate and explain.',
  },
];

const team = [
  { name: 'Founder Name', role: 'Founder & Lead', initials: 'FN' },
  { name: 'Team Member', role: 'Curriculum Director', initials: 'TM' },
  { name: 'Team Member', role: 'Mentor Coordinator', initials: 'TM' },
  { name: 'Team Member', role: 'Community Lead', initials: 'TM' },
];

const partners = [
  { name: 'Partner Org 1', type: 'Education Partner' },
  { name: 'Partner Org 2', type: 'Community Partner' },
  { name: 'Partner Org 3', type: 'Technology Sponsor' },
  { name: 'Partner Org 4', type: 'Nonprofit Ally' },
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
              We believe every kid deserves access to quality computer science education—and that the best teachers are often the ones closest to them in age.
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
                We use Minecraft as an engaging learning platform that makes computer science approachable. Learners build confidence through guided projects that teach file systems, networking, programming logic, and system administration.
              </p>
              <p className="text-muted-foreground">
                Our program is entirely volunteer-powered and free for all families, because we believe socioeconomic status shouldn't determine access to quality CS education.
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
                  Config files → File system navigation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  Multiplayer servers → Networking concepts
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Command blocks → Programming logic
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  Server management → Sysadmin skills
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

      {/* Team */}
      <section id="team" className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="gradient-text-accent">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated group of volunteers passionate about education and gaming.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  {member.initials}
                </div>
                <h3 className="font-display font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 md:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Organizations that help make Block Buddies possible.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-display font-bold">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.type}</p>
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
              Have questions? Want to partner with us? We'd love to hear from you.
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
