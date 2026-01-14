import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "My son thought he was just learning to mod Minecraft, but he's actually learning real programming concepts. He's more excited about tech than ever!",
    author: "Sarah M.",
    role: "Parent",
    avatar: "SM",
  },
  {
    quote: "Being a Block Buddy mentor helped me get into my dream college. I mentioned it in every interview and essay!",
    author: "Jake T.",
    role: "Teen Mentor, Age 17",
    avatar: "JT",
  },
  {
    quote: "I can now set up my own Minecraft server and I understand what all the files do. My friends think I'm a hacker!",
    author: "Emma L.",
    role: "Mentee, Age 11",
    avatar: "EL",
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
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What People Are <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from families, mentors, and kids who've experienced the Block Buddies difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-hover p-6 md:p-8 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
