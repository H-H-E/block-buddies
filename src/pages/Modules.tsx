import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { pilotModules } from '@/lib/moduleLibrary';
import { Blocks, Clock, Users, Sparkles } from 'lucide-react';

const statusLabel: Record<string, string> = {
  draft: 'Draft',
  'needs-assets': 'Needs assets',
  'needs-review': 'In review',
  published: 'Published',
};

const Modules = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Blocks className="w-4 h-4" />
              Pilot Modules
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              What We <span className="gradient-text">Play & Build</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              These are our first six mentor-guided Minecraft modules. Each one is a
              structured session with an early win, choice points, and a calm reset
              path - designed for Bedrock first.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pilotModules.map((mod, index) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card-hover p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{statusLabel[mod.status] ?? mod.status}</Badge>
                  <span className="text-xs text-muted-foreground capitalize">{mod.editions.join(' / ')}</span>
                </div>
                <h2 className="font-display text-xl font-bold mb-1">{mod.shortChildTitle}</h2>
                <p className="text-sm text-muted-foreground font-medium mb-3">{mod.title}</p>
                <p className="text-sm text-muted-foreground flex-1">{mod.outcome}</p>

                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {mod.durationMinutes.min}-{mod.durationMinutes.max} min
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    Ages ~{mod.ageBand.target}
                  </span>
                  {mod.optionalConnections.length > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Optional extras
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto">
            Modules are reviewed and play-tested before public launch. Status shown here is honest:
            nothing is marked published until it has been through a real session.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Modules;
