import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { SITE, NAV_LINKS } from '@/lib/content';
import { MonogramCC } from '@/components/decorative';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-px py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary-foreground font-serif text-lg">
                <MonogramCC />
              </span>
            </Link>
            <p className="text-sm text-muted max-w-xs">
              Entry-level frontend &amp; full-stack developer from Goa.
            </p>
          </div>

          <div className="space-y-3">
            <p className="eyebrow">Quick links</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-foreground/80 hover:text-accent animated-link transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/open-to-roles" className="text-sm text-foreground/80 hover:text-accent animated-link transition-colors">
                  Open to roles
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-foreground/80 hover:text-accent animated-link transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="eyebrow">Get in touch</p>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-sm text-foreground/80 hover:text-accent animated-link transition-colors inline-flex items-center gap-2">
                  <Mail size={14} /> {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-accent animated-link transition-colors inline-flex items-center gap-2">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-accent animated-link transition-colors inline-flex items-center gap-2">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-accent animated-link transition-colors inline-flex items-center gap-2">
                  <Github size={14} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted">
            © 2026 Chandrakant Chodankar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
