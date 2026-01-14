import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Code } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 pixel-pattern opacity-30" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-16 h-16 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 backdrop-blur-sm border border-accent/20"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-12 h-12 rounded-md bg-gradient-to-br from-gold/20 to-primary/20 backdrop-blur-sm border border-gold/20"
        animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="section-container relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Free & Volunteer-Powered
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-tight"
        >
          Teens Teaching Kids to{' '}
          <span className="gradient-text">Code</span> Through{' '}
          <span className="gradient-text-accent">Minecraft</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          Real computer science skills. Real fun. Pre-teens learn file systems, networking, and programming—while teen mentors build leadership experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link to="/apply/mentor">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Become a Mentor
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/apply/mentee">
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              Sign Up Your Child
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Users, value: '100+', label: 'Teen Mentors' },
            { icon: Code, value: '500+', label: 'Kids Learning' },
            { icon: Sparkles, value: '4', label: 'Learning Phases' },
            { icon: ArrowRight, value: '8', label: 'Week Programs' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="glass-card p-4 md:p-6"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
