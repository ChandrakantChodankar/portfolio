import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import {
  Section,
  Reveal,
  Eyebrow,
  SectionHeading,
} from "@/components/layout/Section";
import {
  TileStripDivider,
  CashewAppleIcon,
  MonogramCC,
  AzulejoTilePattern,
  ArchFrame,
} from "@/components/decorative";
import { ContactForm } from "@/components/ContactForm";
import {
  SITE,
  STACK_MARQUEE,
  AT_A_GLANCE,
  SKILLS_GROUPS,
  HOW_I_WORK_STEPS,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
} from "@/lib/content";

function GoaTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: SITE.timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(fmt.format(now));
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="font-mono text-sm text-muted">{`Now in Goa: ${time}`}</span>
  );
}

function Hero() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <Section id="home" className="relative overflow-hidden pt-24 lg:pt-28">
      <div
        className="absolute inset-0 text-accent-2 pointer-events-none"
        style={{ opacity: 0.03 }}
      >
        <AzulejoTilePattern opacity={0.03} />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to work · Available immediately
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance"
          >
            Pull up a chair. I build web apps that feel welcoming.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-prose text-muted"
          >
            I'm Chandrakant, an entry-level frontend and full-stack developer
            from Goa. I turn ideas into clean React and Next.js interfaces, and
            I'm ready to start right away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity btn-press"
            >
              <Download size={18} />
              Download résumé
            </Link>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-surface transition-colors btn-press"
            >
              View projects
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-accent transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="text-muted hover:text-accent transition-colors"
            >
              <Mail size={22} />
            </a>
            <span className="h-4 w-px bg-border" />
            <GoaTime />
          </motion.div>
        </div>

        {/* Arched portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {!reduced && (
              <>
                <motion.div
                  className="absolute left-0 top-0 z-20 origin-left"
                  style={{ width: "50%", height: "100%" }}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -110 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="h-full w-full rounded-l-lg rounded-tl-[999px] border-2 border-border bg-surface shadow-lg" />
                </motion.div>
                <motion.div
                  className="absolute right-0 top-0 z-20 origin-right"
                  style={{ width: "50%", height: "100%" }}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 110 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="h-full w-full rounded-r-lg rounded-tr-[999px] border-2 border-border bg-surface shadow-lg" />
                </motion.div>
              </>
            )}
            <ArchFrame className="w-64 h-80 sm:w-72 sm:h-96">
              <div className="flex h-full w-full items-center justify-center bg-surface">
                <div
                  className="absolute inset-0 text-accent-2"
                  style={{ opacity: 0.05 }}
                >
                  <AzulejoTilePattern opacity={0.05} />
                </div>
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Portrait of Chandrakant Chodankar"
                  className="h-full w-full object-cover arch-top"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-7xl text-accent/30">
                    <MonogramCC className="text-7xl" />
                  </span>
                </div>
              </div>
            </ArchFrame>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function StackMarquee() {
  const items = [...STACK_MARQUEE, ...STACK_MARQUEE];
  return (
    <div className="border-y border-border bg-surface py-6 overflow-hidden">
      <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm text-muted flex items-center gap-8"
          >
            {item}
            <span className="text-accent-2">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function AtAGlance() {
  return (
    <Section className="!py-8">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
        {AT_A_GLANCE.map((item, i) => (
          <div key={i} className="flex items-center gap-6">
            {i > 0 && <span className="hidden sm:inline text-border">|</span>}
            <span className="text-sm font-medium text-foreground/80">
              {item}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function AboutTeaser() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
        <Reveal>
          <ArchFrame className="w-full h-64 sm:h-72">
            <div className="flex h-full w-full items-center justify-center bg-surface">
              <div
                className="absolute inset-0 text-accent-2"
                style={{ opacity: 0.05 }}
              >
                <AzulejoTilePattern opacity={0.05} />
              </div>
              <MonogramCC className="text-6xl text-accent/30" />
            </div>
          </ArchFrame>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>About</Eyebrow>
          <p className="max-prose text-lg text-balance mb-6">
            I started in electronics, moved to computer engineering, and found
            my favourite part was building things people can actually click. I
            like clear structure, small steady commits and interfaces that feel
            friendly.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-accent font-medium animated-link"
          >
            Read my story <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience">
      <Reveal>
        <Eyebrow>Experience</Eyebrow>
        <SectionHeading className="mb-10">Where I've worked</SectionHeading>
      </Reveal>
      <div className="relative pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <div className="relative mb-8">
              <div className="absolute -left-8 top-2 flex h-4 w-4 items-center justify-center">
                <div className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg">{exp.role}</h3>
                  <span className="font-mono text-sm text-muted">
                    {exp.period}
                  </span>
                </div>
                <p className="text-accent font-medium mb-3">{exp.company}</p>
                <p className="text-muted text-sm max-prose">
                  {exp.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function EducationSection() {
  return (
    <Section id="education">
      <Reveal>
        <Eyebrow>Education</Eyebrow>
        <SectionHeading className="mb-10">Credentials</SectionHeading>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {EDUCATION.map((edu, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <div className="rounded-xl border border-border bg-card p-6 h-full">
              <h3 className="text-lg mb-1">{edu.degree}</h3>
              <p className="text-accent font-medium text-sm mb-2">
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
  );
}

function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  return (
    <Section id="projects">
      <Reveal>
        <Eyebrow>Projects</Eyebrow>
        <SectionHeading className="mb-3">Things I've built</SectionHeading>
        <p className="text-muted mb-10 max-prose">
          Three projects, all with code you can read.
        </p>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={0.1 * i}>
            <Link
              to={`/projects/${project.slug}`}
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-surface border border-border overflow-hidden">
                <img
                  src={project.coverSlot}
                  alt={`${project.title} cover`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted mb-4 flex-1">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface border border-border px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                View project <ArrowRight size={14} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-accent font-medium animated-link"
          >
            See all projects <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section id="skills">
      <Reveal>
        <Eyebrow>Skills</Eyebrow>
        <SectionHeading className="mb-10">What I work with</SectionHeading>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={0.05 * i}>
            <div className="rounded-xl border border-border bg-card p-6 h-full">
              <h3 className="text-lg mb-4">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-surface border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:text-foreground hover:border-accent-2"
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
  );
}

function HowIWorkSection() {
  return (
    <Section id="how-i-work">
      <Reveal>
        <Eyebrow>How I work</Eyebrow>
        <SectionHeading className="mb-10">My process</SectionHeading>
      </Reveal>
      <div className="relative">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {HOW_I_WORK_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={0.08 * i}>
              <div className="relative rounded-xl border border-border bg-card p-6 h-full">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary-foreground font-mono text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-base mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="text-center mb-10">
          <CashewAppleIcon className="mx-auto mb-4 text-accent" size={32} />
          <Eyebrow className="text-center">Contact</Eyebrow>
          <SectionHeading className="mb-3">
            The porch light is on.
          </SectionHeading>
          <p className="text-muted max-prose mx-auto">
            Let's talk about your next hire.
          </p>
        </div>
      </Reveal>
      <div className="mx-auto max-w-xl">
        <Reveal delay={0.1}>
          <ContactForm compact />
        </Reveal>
      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <AtAGlance />
      <TileStripDivider />
      <AboutTeaser />
      <TileStripDivider />
      <ExperienceSection />
      <TileStripDivider />
      <EducationSection />
      <TileStripDivider />
      <ProjectsSection />
      <TileStripDivider />
      <SkillsSection />
      <TileStripDivider />
      <HowIWorkSection />
      <TileStripDivider />
      <ContactSection />
    </>
  );
}
