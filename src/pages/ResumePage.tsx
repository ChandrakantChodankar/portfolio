import { Link } from 'react-router-dom';
import { Download, ArrowRight, Mail, MessageCircle, Linkedin, Github } from 'lucide-react';
import { Section, Reveal, Eyebrow, SectionHeading } from '@/components/layout/Section';
import { TileStripDivider } from '@/components/decorative';
import { SITE, EXPERIENCE, EDUCATION, SKILLS_GROUPS, PROJECTS } from '@/lib/content';

export default function ResumePage() {
  return (
    <Section className="pt-12">
      <Reveal>
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div>
            <Eyebrow>Résumé</Eyebrow>
            <SectionHeading className="mb-2">{SITE.name}</SectionHeading>
            <p className="text-muted">{SITE.role} · {SITE.location}</p>
          </div>
          <a
            href={SITE.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity btn-press"
          >
            <Download size={18} /> Download PDF
          </a>
        </div>
      </Reveal>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
        <Reveal delay={0.1}>
          <div className="mb-8 border-b border-border pb-6">
            <h3 className="text-xl mb-2">{SITE.name}</h3>
            <p className="text-accent font-medium mb-3">{SITE.role}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted">
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                <Mail size={14} /> {SITE.email}
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                <Github size={14} /> GitHub
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mb-8">
            <h4 className="eyebrow mb-4">Experience</h4>
            <div className="space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <div key={i}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-medium">{exp.role}</p>
                    <span className="font-mono text-sm text-muted">{exp.period}</span>
                  </div>
                  <p className="text-accent text-sm mb-2">{exp.company}</p>
                  <p className="text-sm text-muted max-prose">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mb-8">
            <h4 className="eyebrow mb-4">Education</h4>
            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <div key={i}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-medium">{edu.degree}</p>
                    <span className="font-mono text-sm text-muted">{edu.period}</span>
                  </div>
                  <p className="text-accent text-sm">{edu.institution} · {edu.score}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mb-8">
            <h4 className="eyebrow mb-4">Projects</h4>
            <div className="space-y-4">
              {PROJECTS.map((project) => (
                <div key={project.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-medium">{project.title}</p>
                    <span className="font-mono text-xs text-muted">{project.category}</span>
                  </div>
                  <p className="text-sm text-muted">{project.summary}</p>
                  <div className="mt-1 flex flex-wrap gap-3 text-xs">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Live demo
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div>
            <h4 className="eyebrow mb-4">Skills</h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SKILLS_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-medium mb-2">{group.title}</p>
                  <p className="text-sm text-muted">{group.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <TileStripDivider />

      <Reveal>
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-surface transition-colors btn-press">
            Get in touch <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
