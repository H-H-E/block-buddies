import { Link } from 'react-router-dom';

const footerLinks = {
  program: [
    { name: 'How It Works', path: '/about#how-it-works' },
    { name: 'Modules', path: '/modules' },
    { name: 'Legacy Curriculum', path: '/curriculum' },
    { name: 'Legacy Lesson Workspace', path: '/lesson' },
    { name: 'Resources', path: '/resources' },
  ],
  getInvolved: [
    { name: 'Become a Mentor', path: '/apply/mentor' },
    { name: 'Sign Up Your Child', path: '/apply/mentee' },
    { name: 'For Parents', path: '/for-parents' },
    { name: 'For Teens', path: '/for-teens' },
  ],
  about: [
    { name: 'Our Mission', path: '/about' },
    { name: 'Contact', path: '/about#contact' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border">
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
              A Minecraft-first mentorship pilot designed to help children build confidence with relatable teen mentors.
            </p>
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
            Built for a Minecraft-first mentorship pilot
          </p>
        </div>
      </div>
    </footer>
  );
};
