import { Link } from 'react-router-dom';
import { Download, ArrowRight, Check } from 'lucide-react';
import { Section, Reveal, Eyebrow, SectionHeading } from '@/components/layout/Section';
import { TileStripDivider, CashewAppleIcon } from '@/components/decorative';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { HOW_I_WORK_STEPS, FAQ_ITEMS } from '@/lib/content';

const ROLES = [
  'Junior Frontend Developer',
  'Software Development Trainee / Associate',
  'Junior Full-Stack Developer (React / Next.js with Node)',
];

const BRINGS = [
  'Clean React and Next.js interfaces',
  'Live-API experience',
  'Git habits',
  'A growing full-stack toolkit (Node.js, Express, PostgreSQL, Prisma)',
];

export default function OpenToRolesPage() {
  return (
    <>
      <Section className="pt-12">
        <Reveal>
          <Eyebrow>Open to roles</Eyebrow>
          <SectionHeading className="mb-4 max-w-2xl text-balance">
            Here's where I can help a team from day one.
          </SectionHeading>
        </Reveal>
      </Section>

      <TileStripDivider />

      <Section className="!pt-0">
        <Reveal>
          <Eyebrow>Roles I'm looking for</Eyebrow>
          <div className="space-y-3 mb-10">
            {ROLES.map((role) => (
              <div key={role} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-2/10 text-accent-2">
                  <Check size={14} />
                </span>
                <span className="text-lg">{role}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>What I bring</Eyebrow>
          <div className="grid gap-4 sm:grid-cols-2 mb-10">
            {BRINGS.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Eyebrow>How working with me works</Eyebrow>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-10">
            {HOW_I_WORK_STEPS.map((step) => (
              <div key={step.step} className="rounded-xl border border-border bg-card p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-primary-foreground font-mono text-xs font-bold">
                  {step.step}
                </div>
                <h3 className="text-sm font-medium mb-1">{step.title}</h3>
                <p className="text-xs text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Eyebrow>FAQ</Eyebrow>
          <Accordion type="single" collapsible className="max-w-2xl">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      <TileStripDivider />

      <Section className="!pt-0">
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center">
            <CashewAppleIcon className="mx-auto mb-4 text-accent" size={28} />
            <h3 className="text-xl mb-6">Let's talk.</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/resume" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity btn-press">
                <Download size={18} /> Download résumé
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-surface transition-colors btn-press">
                Say hello <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
