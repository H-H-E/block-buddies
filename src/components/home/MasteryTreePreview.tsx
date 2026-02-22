import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Compass, Bug, Trophy, ArrowRight } from "lucide-react";
import { curriculumPhases } from "@/lib/curriculumData";

const phaseIcons = [Wrench, Compass, Bug, Trophy];

export const MasteryTreePreview = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background-secondary">
      <div className="absolute inset-0 pixel-pattern opacity-20" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Structured Learning
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="gradient-text">Mastery Tree</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confidence-first progression with controlled challenge and mastery checks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {curriculumPhases.map((phase, index) => {
            const Icon = phaseIcons[index];
            return (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {index < curriculumPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-muted to-transparent" />
                )}

                <div className="glass-card-hover p-6 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-6xl font-display font-bold text-white/5 group-hover:text-primary/10 transition-colors">
                    {phase.phase}
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-${phase.color}/10 border border-${phase.color}/20 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${phase.color}`} />
                  </div>

                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                    Phase {phase.phase}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{phase.subtitle}</p>

                  <ul className="space-y-1">
                    {phase.skills.slice(0, 3).map((skill) => (
                      <li key={skill} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${phase.color}`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/curriculum">
            <Button variant="hero" size="lg">
              Explore Full Curriculum
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
