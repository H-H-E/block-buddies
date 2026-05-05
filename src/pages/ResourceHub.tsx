import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenCheck,
  ClipboardCheck,
  FileText,
  Gauge,
  GraduationCap,
  LifeBuoy,
  LockKeyhole,
  NotebookTabs,
  Route,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import {
  resourceHubGroups,
  resourceHubSections,
  type ResourceAudience,
  type ResourceGroup,
  type ResourceItem,
} from "@/lib/resourceHubData";
import { cn } from "@/lib/utils";

const audienceStyles: Record<
  ResourceAudience,
  {
    icon: typeof ShieldCheck;
    accent: string;
    border: string;
    chip: string;
    dot: string;
  }
> = {
  public: {
    icon: ShieldCheck,
    accent: "text-primary",
    border: "border-primary/25",
    chip: "bg-primary/10 text-primary border-primary/20",
    dot: "bg-primary",
  },
  mentor: {
    icon: GraduationCap,
    accent: "text-secondary",
    border: "border-secondary/25",
    chip: "bg-secondary/10 text-secondary border-secondary/20",
    dot: "bg-secondary",
  },
  coordinator: {
    icon: Gauge,
    accent: "text-gold",
    border: "border-gold/25",
    chip: "bg-gold/10 text-gold border-gold/20",
    dot: "bg-gold",
  },
};

const groupIcons: Record<string, typeof BookOpenCheck> = {
  "public-resources": UsersRound,
  "s01-s08-runbooks": BookOpenCheck,
  "post-s08-labs": NotebookTabs,
  "mentor-troubleshooting-and-templates": LifeBuoy,
  "coordinator-operations-materials": ClipboardCheck,
};

const quickStats = [
  {
    label: "Runbooks",
    value: resourceHubGroups.find((group) => group.id === "s01-s08-runbooks")?.resources.length ?? 0,
  },
  {
    label: "Advanced labs",
    value: resourceHubGroups.find((group) => group.id === "post-s08-labs")?.resources.length ?? 0,
  },
  {
    label: "Ops docs",
    value:
      resourceHubGroups.find((group) => group.id === "coordinator-operations-materials")?.resources.length ?? 0,
  },
];

const ResourceCard = ({ resource, index }: { resource: ResourceItem; index: number }) => {
  const isExternal = resource.href.startsWith("http");
  const styles = audienceStyles[resource.audience];

  return (
    <motion.a
      href={resource.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: Math.min(index * 0.025, 0.2), duration: 0.25 }}
      className={cn(
        "group flex min-h-[168px] flex-col justify-between rounded border bg-card/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-card/80",
        styles.border,
      )}
    >
      <div>
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {resource.sessionId && (
              <span className={cn("rounded border px-2 py-1 text-xs font-semibold", styles.chip)}>
                {resource.sessionId}
              </span>
            )}
            {resource.labels.slice(0, 2).map((label) => (
              <span
                key={label}
                className="rounded border border-border/70 bg-background-secondary px-2 py-1 text-xs text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
          <ArrowUpRight className={cn("h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5", styles.accent)} />
        </div>

        <h4 className="font-display text-base font-semibold text-foreground">{resource.title}</h4>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{resource.description}</p>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-border/70 pt-3 text-xs text-muted-foreground">
        <FileText className="h-3.5 w-3.5 shrink-0" />
        <span className="truncate">{resource.path ?? resource.href}</span>
      </div>
    </motion.a>
  );
};

const ResourceGroupBlock = ({ group }: { group: ResourceGroup }) => {
  const Icon = groupIcons[group.id] ?? Route;
  const styles = audienceStyles[group.audience];

  return (
    <div id={group.id} className="py-8">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <div className={cn("mb-3 flex h-10 w-10 items-center justify-center rounded border", styles.chip)}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-2xl font-semibold">{group.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p>
        </div>
        <span className={cn("w-fit rounded border px-3 py-1.5 text-sm font-medium", styles.chip)}>
          {group.resources.length} items
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {group.resources.map((resource, index) => (
          <ResourceCard key={resource.id} resource={resource} index={index} />
        ))}
      </div>
    </div>
  );
};

const ResourceHub = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border bg-background pt-28">
        <div className="absolute inset-0 pixel-pattern opacity-70" />
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary)/0.18),transparent_34%),radial-gradient(circle_at_80%_0%,hsl(var(--gold)/0.14),transparent_30%)]" />

        <div className="section-container relative z-10 pb-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 rounded border border-border bg-card/70 px-3 py-1.5 text-sm text-muted-foreground">
                <LockKeyhole className="h-4 w-4 text-gold" />
                Internal V2 index
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold md:text-5xl">Resource Hub</h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                Runbooks, labs, troubleshooting references, session templates, and coordinator materials organized
                by audience boundary.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="grid grid-cols-3 gap-3"
            >
              {quickStats.map((stat) => (
                <div key={stat.label} className="rounded border border-border bg-card/70 p-4 text-center">
                  <div className="font-display text-2xl font-bold">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {resourceHubSections.map((section) => {
              const styles = audienceStyles[section.audience];
              const Icon = styles.icon;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={cn(
                    "rounded border bg-card/60 p-4 transition-colors hover:bg-card/90",
                    styles.border,
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn("flex h-9 w-9 items-center justify-center rounded", styles.chip)}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-display text-base font-semibold">{section.label}</div>
                      <div className="text-xs text-muted-foreground">{section.eyebrow}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {resourceHubSections.map((section) => {
        const styles = audienceStyles[section.audience];
        const Icon = styles.icon;

        return (
          <section
            key={section.id}
            id={section.id}
            data-testid={`resource-hub-${section.audience}`}
            className={cn(
              "border-b border-border py-14",
              section.audience === "mentor" ? "bg-background-secondary/55" : "bg-background",
            )}
          >
            <div className="section-container">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <span className={cn("mb-4 inline-flex items-center gap-2 rounded border px-3 py-1.5 text-sm", styles.chip)}>
                    <Icon className="h-4 w-4" />
                    {section.eyebrow}
                  </span>
                  <h2 className="font-display text-3xl font-semibold">{section.label}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">{section.summary}</p>
                </div>
                <div className="flex items-center gap-2 rounded border border-border bg-card/60 px-3 py-2 text-sm text-muted-foreground">
                  <span className={cn("h-2.5 w-2.5 rounded-full", styles.dot)} />
                  {section.groups.reduce((sum, group) => sum + group.resources.length, 0)} indexed materials
                </div>
              </div>

              <div className="mt-6 divide-y divide-border/70">
                {section.groups.map((group) => (
                  <ResourceGroupBlock key={group.id} group={group} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </Layout>
  );
};

export default ResourceHub;
