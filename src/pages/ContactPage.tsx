import { useState } from 'react';
import { Mail, MessageCircle, Linkedin, Github, Copy, Check } from 'lucide-react';
import { Section, Reveal, Eyebrow, SectionHeading } from '@/components/layout/Section';
import { CashewAppleIcon, AzulejoTilePattern } from '@/components/decorative';
import { ContactForm } from '@/components/ContactForm';
import { SITE } from '@/lib/content';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Section className="relative overflow-hidden pt-12">
      <div className="absolute inset-0 text-accent-2 pointer-events-none" style={{ opacity: 0.03 }}>
        <AzulejoTilePattern opacity={0.03} />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal>
          <div>
            <CashewAppleIcon className="mb-4 text-accent" size={32} />
            <Eyebrow>Contact</Eyebrow>
            <SectionHeading className="mb-4 text-balance">The porch light is on.</SectionHeading>
            <p className="text-muted max-prose mb-8">
              I'm available immediately and open to entry-level frontend or full-stack roles. Send a message below, or reach me directly.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
                >
                  <Mail size={16} className="text-muted group-hover:text-accent transition-colors" />
                  {SITE.email}
                  {copied ? <Check size={14} className="text-accent-2" /> : <Copy size={14} className="text-muted" />}
                </button>
              </div>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                <MessageCircle size={16} className="text-muted" /> WhatsApp
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                <Linkedin size={16} className="text-muted" /> LinkedIn
              </a>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                <Github size={16} className="text-muted" /> GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
