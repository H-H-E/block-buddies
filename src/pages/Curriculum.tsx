import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Compass,
  Bug,
  Trophy,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Palette,
  Zap,
  Server,
} from "lucide-react";
import { curriculumPhases, trackOverviews, sessionRunbooks } from "@/lib/curriculumData";

const phaseIcons = [Wrench, Compass, Bug, Trophy];

const trackIcons = {
  visualist: Palette,
  mechanist: Zap,
  operator: Server,
} as const;

const Curriculum = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 pixel-pattern opacity-20" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Pedagogy V2
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mastery Tree <span className="gradient-text">Curriculum</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A confidence-first 8-session model with controlled challenge, mastery gates, and personalized pacing.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 text-sm max-w-3xl mx-auto">
              {[
                "Early win by minute 10",
                "Do/Explain/Debug mastery gates",
                "Tiered side quests with fallback paths",
              ].map((item) => (
                <div key={item} className="px-3 py-2 rounded-md bg-muted text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Four Pedagogy <span className="gradient-text">Phases</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every learner progresses through the same session spine while support depth adapts to their profile code.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {curriculumPhases.map((phase, index) => {
              const Icon = phaseIcons[index];
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="glass-card overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedPhase(expandedPhase === phase.phase ? null : phase.phase)}
                    className="w-full p-6 flex items-center gap-4 text-left hover:bg-white/5 transition-colors"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-${phase.color}/10 border border-${phase.color}/20 flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-7 h-7 text-${phase.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        Phase {phase.phase}
                      </div>
                      <h3 className="font-display text-xl font-bold">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${expandedPhase === phase.phase ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedPhase === phase.phase && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-border"
                      >
                        <div className="p-6 space-y-6">
                          <p className="text-muted-foreground">{phase.description}</p>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-display font-bold mb-3">Objectives</h4>
                              <ul className="space-y-2">
                                {phase.objectives.map((obj) => (
                                  <li key={obj} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className={`w-4 h-4 text-${phase.color} flex-shrink-0 mt-0.5`} />
                                    {obj}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-display font-bold mb-3">Session Activities</h4>
                              <ul className="space-y-3">
                                {phase.activities.map((activity) => (
                                  <li key={activity.name} className="text-sm">
                                    <span className={`text-${phase.color} font-medium`}>{activity.name}:</span>{" "}
                                    <span className="text-muted-foreground">{activity.description}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {phase.skills.map((skill) => (
                              <span key={skill} className={`px-3 py-1 rounded-full bg-${phase.color}/10 text-${phase.color} text-xs font-medium`}>
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="text-xs text-muted-foreground">
                            <Sparkles className="w-3 h-3 inline mr-1" />
                            Aligned with {phase.standards}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              Specialization
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Track <span className="gradient-text-accent">Pathways</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              After Core sessions, learners continue in track-specific quests with the same mastery and fallback rules.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trackOverviews.map((track, index) => {
              const Icon = trackIcons[track.id];
              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1">{track.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{track.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4">{track.description}</p>
                  <ul className="space-y-2">
                    {track.focus.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">8-Session Program Spine</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Personalized pacing, fixed quality rules, and shared runbooks keep mentor delivery consistent and learner-centered.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm mb-8">
              {sessionRunbooks.map((runbook) => (
                <div key={runbook.sessionId} className="px-3 py-2 rounded-md bg-muted text-muted-foreground">
                  {runbook.sessionId}: {runbook.objective}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply/mentee">
                <Button variant="hero" size="lg">
                  Sign Up as a Learner
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/apply/mentor">
                <Button variant="heroOutline" size="lg">
                  Become a Mentor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Curriculum;
