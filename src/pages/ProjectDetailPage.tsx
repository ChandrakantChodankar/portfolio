import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Github,
  Download,
} from "lucide-react";
import { Section, Reveal, Eyebrow } from "@/components/layout/Section";
import { TileStripDivider, CashewAppleIcon } from "@/components/decorative";
import { getProject, PROJECTS } from "@/lib/content";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <>
      <Section className="pt-12">
        <Reveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mb-6 text-sm transition-colors text-muted hover:text-accent"
          >
            <ArrowLeft size={16} /> All projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 font-mono text-xs border rounded-full bg-surface border-border text-muted">
              {project.category}
            </span>
            <span className="font-mono text-xs text-muted">{project.year}</span>
            <span className="font-mono text-xs text-muted">·</span>
            <span className="font-mono text-xs text-muted">{project.role}</span>
          </div>
          <h1 className="mb-4 text-balance">{project.title}</h1>
          <p className="mb-6 text-lg text-muted max-prose">{project.summary}</p>
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-opacity rounded-lg bg-accent text-primary-foreground hover:opacity-90 btn-press"
              >
                <ExternalLink size={18} /> Live demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors border rounded-lg border-foreground/20 hover:bg-surface btn-press"
            >
              <Github size={18} />
              View code on GitHub
            </a>
          </div>
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="flex items-center justify-center h-64 overflow-hidden border rounded-xl bg-surface border-border sm:h-fit">
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
        </Reveal>
      </Section>

      <TileStripDivider />

      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <div className="space-y-6 lg:sticky lg:top-24">
              <div>
                <Eyebrow>Stack</Eyebrow>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 font-mono text-xs border rounded-full bg-surface border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <Eyebrow>Year</Eyebrow>
                <p className="font-mono text-sm">{project.year}</p>
              </div>
              <div>
                <Eyebrow>Role</Eyebrow>
                <p className="font-mono text-sm">{project.role}</p>
              </div>
              <div>
                <Eyebrow>Outcome</Eyebrow>
                <p className="text-sm text-muted">{project.outcome}</p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.1}>
              <div>
                <Eyebrow>Problem</Eyebrow>
                <p className="max-prose text-muted">{project.body.problem}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <Eyebrow>Approach</Eyebrow>
                <p className="max-prose text-muted">{project.body.approach}</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <Eyebrow>Key features</Eyebrow>
                <ul className="space-y-2">
                  {project.body.keyFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 max-prose text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div>
                <Eyebrow>Challenges</Eyebrow>
                <p className="max-prose text-muted">
                  {project.body.challenges}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div>
                <Eyebrow>What I learned</Eyebrow>
                <p className="max-prose text-muted">{project.body.learned}</p>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div>
                <Eyebrow>Links</Eyebrow>
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent animated-link"
                    >
                      <ExternalLink size={16} /> Live demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent animated-link"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <TileStripDivider />

      <Section className="!pt-0">
        <Reveal>
          <Link to={`/projects/${nextProject.slug}`} className="block group">
            <p className="mb-3 eyebrow">Next project</p>
            <div className="flex items-center gap-6 p-6 transition-all border rounded-xl border-border bg-card hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 overflow-hidden border rounded-lg shrink-0 bg-surface border-border">
                <img
                  src={nextProject.coverSlot}
                  alt={`${nextProject.title} cover`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <CashewAppleIcon className="text-accent/30" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg transition-colors group-hover:text-accent">
                  {nextProject.title}
                </h3>
                <p className="text-sm text-muted">{nextProject.summary}</p>
              </div>
              <ArrowRight
                size={24}
                className="transition-colors text-muted group-hover:text-accent"
              />
            </div>
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 text-center">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-opacity rounded-lg bg-accent text-primary-foreground hover:opacity-90 btn-press"
            >
              <Download size={18} /> Download résumé
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
