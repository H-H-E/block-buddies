import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Gamepad2, 
  GraduationCap, 
  Clock, 
  Award,
  FileText,
  Heart,
  Users,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Trophy,
  Star
} from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'College App Gold',
    description: 'Stand out with unique volunteer experience that shows leadership and initiative.',
  },
  {
    icon: Clock,
    title: 'Service Hours',
    description: 'Earn community service hours that actually feel rewarding—not boring.',
  },
  {
    icon: Users,
    title: 'Real Teaching Skills',
    description: 'Learn communication, patience, and how to explain complex ideas simply.',
  },
  {
    icon: FileText,
    title: 'Letter of Recommendation',
    description: 'Dedicated mentors can receive a rec letter from our program coordinators.',
  },
];

const expectations = [
  'Weekly 45-minute video call sessions with your mentee',
  '8-week minimum commitment (most mentors stay longer!)',
  '15-20 minutes of prep time using our provided materials',
  'Being patient, encouraging, and a good role model',
  'Following our safety guidelines and code of conduct',
];

const testimonials = [
  {
    quote: "I was nervous about teaching at first, but the lesson plans made it easy. Now I love seeing my mentee's progress!",
    author: "Alex, 16",
    role: "Mentor for 6 months",
  },
  {
    quote: "My interviewer at MIT was super impressed when I talked about Block Buddies. It really set me apart.",
    author: "Jordan, 17",
    role: "Former mentor, now at MIT",
  },
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
              For Teens (14-17)
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Turn Your Minecraft Skills Into{' '}
              <span className="gradient-text">Something More</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              You already know Minecraft inside and out. Now use that expertise to help younger kids—and build your resume at the same time.
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
              This isn't your typical boring volunteer gig. Here's what you get out of it.
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
                Being a Block Buddy mentor is rewarding but does require commitment. Here's what you're signing up for:
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
                  { icon: FileText, text: 'Complete lesson plans and teaching materials' },
                  { icon: MessageCircle, text: 'Access to mentor community & support' },
                  { icon: Sparkles, text: 'Training on teaching and communication' },
                  { icon: Award, text: 'Certificate and potential letter of recommendation' },
                  { icon: Heart, text: 'The satisfaction of making a real difference' },
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

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              From Other <span className="gradient-text">Teen Mentors</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6 md:p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
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
              Applications take about 5 minutes. We review them weekly and get back to you fast.
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
