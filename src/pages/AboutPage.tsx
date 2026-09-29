import { Link } from "react-router-dom";
import {
  Download,
  ArrowRight,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import {
  Section,
  Reveal,
  Eyebrow,
  SectionHeading,
} from "@/components/layout/Section";
import {
  TileStripDivider,
  ArchFrame,
  AzulejoTilePattern,
  MonogramCC,
  CashewAppleIcon,
} from "@/components/decorative";
import { ContactForm } from "@/components/ContactForm";
import {
  SITE,
  EXPERIENCE,
  EDUCATION,
  SKILLS_GROUPS,
  VALUES,
} from "@/lib/content";

export default function AboutPage() {
  return (
    <>
      <Section className="pt-12">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <SectionHeading className="max-w-2xl mb-6 text-balance">
            I'm Chandrakant, a developer from Goa who likes building things that
            feel easy to use.
          </SectionHeading>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <Reveal delay={0.1}>
            <ArchFrame className="w-full h-72 sm:h-80">
              <div className="flex items-center justify-center w-full h-full bg-surface">
                <div
                  className="absolute inset-0 text-accent-2"
                  style={{ opacity: 0.05 }}
                >
                  <AzulejoTilePattern opacity={0.05} />
                </div>
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Portrait of Chandrakant Chodankar"
                  className="object-cover w-full h-full arch-top"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <MonogramCC className="text-6xl text-accent/30" />
              </div>
            </ArchFrame>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4 max-prose text-muted">
              <p>
                I began with a diploma in Electronics &amp; Communication
                Engineering in Bicholim, then studied Computer Engineering at
                Angel Institute of Technology &amp; Design in Mapusa. In 2023 I
                interned at The Grit City, where I turned a client's content and
                requirements into the AGH Advisors website using Wix Studio.
              </p>
              <p>
                Since then I have built React apps that use live APIs, applied
                deep learning to grade cashew apple quality, and started
                building full-stack projects with Node.js, Express, PostgreSQL
                and Prisma. I also explore AI tools and automation (n8n,
                Lovable, Claude Skills) to work faster and learn more.
              </p>
              {/* <p>
                [Add one personal detail: hobby, what you enjoy outside coding,
                or why you chose development.]
              </p> */}
            </div>
          </Reveal>
        </div>
      </Section>

      <TileStripDivider />

      <Section>
        <Reveal>
          <Eyebrow>Values</Eyebrow>
          <SectionHeading className="mb-10">
            Principles I work by
          </SectionHeading>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={0.1 * i}>
              <div className="h-full p-6 border rounded-xl border-border bg-card">
                <CashewAppleIcon className="mb-4 text-accent-2" size={24} />
                <h3 className="mb-2 text-lg">{value.title}</h3>
                <p className="text-sm text-muted">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <TileStripDivider />

      <Section id="experience">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
          <SectionHeading className="mb-10">Where I've worked</SectionHeading>
        </Reveal>
        <div className="relative pl-8">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-border" />
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="relative mb-8">
                <div className="absolute flex items-center justify-center w-4 h-4 -left-8 top-2">
                  <div className="w-3 h-3 border-2 rounded-full border-accent bg-background" />
                </div>
                <div className="p-6 border rounded-xl border-border bg-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg">{exp.role}</h3>
                    <span className="font-mono text-sm text-muted">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-3 font-medium text-accent">{exp.company}</p>
                  <p className="text-sm text-muted max-prose">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <TileStripDivider />

      <Section id="education">
        <Reveal>
          <Eyebrow>Education</Eyebrow>
          <SectionHeading className="mb-10">Credentials</SectionHeading>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {EDUCATION.map((edu, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="h-full p-6 border rounded-xl border-border bg-card">
                <h3 className="mb-1 text-lg">{edu.degree}</h3>
                <p className="mb-2 text-sm font-medium text-accent">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-4 font-mono text-sm text-muted">
                  <span>{edu.period}</span>
                  <span>·</span>
                  <span>{edu.score}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <TileStripDivider />

      <Section id="skills">
        <Reveal>
          <Eyebrow>Skills</Eyebrow>
          <SectionHeading className="mb-10">What I work with</SectionHeading>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={0.05 * i}>
              <div className="h-full p-6 border rounded-xl border-border bg-card">
                <h3 className="mb-4 text-lg">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1 font-mono text-xs transition-colors border rounded-full bg-surface border-border text-muted hover:text-foreground hover:border-accent-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <TileStripDivider />

      <Section>
        <Reveal>
          <div className="p-8 text-center border rounded-2xl border-border bg-surface">
            <h3 className="mb-4 text-xl">Want the full picture?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-opacity rounded-lg bg-accent text-primary-foreground hover:opacity-90 btn-press"
              >
                <Download size={18} /> Download résumé
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors border rounded-lg border-foreground/20 hover:bg-surface btn-press"
              >
                Say hello <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
