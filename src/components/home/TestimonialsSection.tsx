import { motion } from 'framer-motion';
import { Heart, Users, Shield } from 'lucide-react';

const programPillars = [
  {
    icon: Users,
    title: 'One mentor, one child',
    description: 'The pilot model centers on one relatable teen mentor and one young learner playing and building together in Minecraft.',
  },
  {
    icon: Heart,
    title: 'Relationship first',
    description: 'The pilot starts from what each child already loves - building, animals, stories - and is designed to grow confidence through making, showing, telling, trying, and fixing.',
  },
  {
    icon: Shield,
    title: 'Safety designed in',
    description: 'The pilot plan includes guardian-visible communication, an application and training process, and clear escalation guidance shared before sessions begin.',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How Block Buddies <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We do not publish testimonials yet because we have not completed a pilot cohort. Here is exactly what the program is.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {programPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-hover p-6 md:p-8 relative"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
