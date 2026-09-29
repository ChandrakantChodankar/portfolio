import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import {
  Section,
  Reveal,
  Eyebrow,
  SectionHeading,
} from "@/components/layout/Section";
import { PROJECTS } from "@/lib/content";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Frontend", "AI & ML"] as const;

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter") || "All";

  const filtered = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    if (activeFilter === "AI & ML")
      return PROJECTS.filter((p) => p.category === "AI & ML");
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  function setFilter(filter: string) {
    if (filter === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ filter });
    }
  }

  return (
    <Section className="pt-12">
      <Reveal>
        <Eyebrow>Projects</Eyebrow>
        <SectionHeading className="mb-3">
          Three projects, all with code you can read.
        </SectionHeading>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors min-h-[44px]",
                activeFilter === filter
                  ? "border-accent bg-accent text-primary-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-accent-2 hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const isLarge = i === 0 && filtered.length > 1;
            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={cn(isLarge && "md:col-span-2 lg:row-span-2")}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="flex flex-col h-full p-6 transition-all border group rounded-xl border-border bg-card hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={cn(
                      "mb-4 flex items-center justify-center rounded-lg bg-surface border border-border overflow-hidden",
                      isLarge ? "h-48" : "h-32",
                    )}
                  >
                    <img
                      src={project.coverSlot}
                      alt={`${project.title} cover`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-surface border border-border px-2.5 py-0.5 font-mono text-xs text-muted">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {project.year}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "mb-2 group-hover:text-accent transition-colors",
                      isLarge ? "text-2xl" : "text-lg",
                    )}
                  >
                    {project.title}
                  </h3>
                  <p className="flex-1 mb-4 text-sm text-muted">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 font-mono text-xs border rounded-full bg-surface border-border text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-sm transition-colors text-muted hover:text-accent"
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-sm transition-colors text-muted hover:text-accent"
                    >
                      <Github size={14} /> Code
                    </a>
                  </div>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium transition-opacity opacity-0 text-accent group-hover:opacity-100">
                    View project <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </Section>
  );
}
