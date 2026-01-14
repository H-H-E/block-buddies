import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Youtube, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  program: [
    { name: 'How It Works', path: '/about#how-it-works' },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'Resources', path: '/resources' },
    { name: 'Safety Guidelines', path: '/about#safety' },
  ],
  getInvolved: [
    { name: 'Become a Mentor', path: '/apply/mentor' },
    { name: 'Sign Up Your Child', path: '/apply/mentee' },
    { name: 'For Parents', path: '/for-parents' },
    { name: 'For Teens', path: '/for-teens' },
  ],
  about: [
    { name: 'Our Mission', path: '/about' },
    { name: 'Team', path: '/about#team' },
    { name: 'Partners', path: '/about#partners' },
    { name: 'Contact', path: '/about#contact' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Newsletter Section */}
      <div className="section-container py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Stay in the Loop
          </h3>
          <p className="text-muted-foreground mb-6">
            Get updates on new resources, program announcements, and tips for teaching CS through Minecraft.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-muted border-border focus:border-primary"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Links Section */}
      <div className="section-container py-12 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">BB</span>
              </div>
              <span className="font-display font-bold text-xl gradient-text">
                Block Buddies
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Teens teaching kids to code through Minecraft. Free, safe, and volunteer-powered.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Program</h4>
            <ul className="space-y-2">
              {footerLinks.program.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-container py-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by volunteers who love Minecraft
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
