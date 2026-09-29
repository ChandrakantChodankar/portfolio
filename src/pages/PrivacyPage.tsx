import { Link } from 'react-router-dom';
import { Section, Reveal, Eyebrow, SectionHeading } from '@/components/layout/Section';
import { SITE } from '@/lib/content';

export default function PrivacyPage() {
  return (
    <Section className="pt-12">
      <Reveal>
        <Eyebrow>Privacy</Eyebrow>
        <SectionHeading className="mb-8">Privacy policy</SectionHeading>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="max-prose space-y-6 text-muted">
          <div>
            <h3 className="text-lg text-foreground mb-2">What I collect</h3>
            <p>
              When you use the contact form on this site, I collect your name, email, optional company, enquiry type, and message. I do not collect any other personal data.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">How I use it</h3>
            <p>
              I use the information you provide only to respond to your enquiry. I will not use your data for marketing or share it with third parties.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">Where it's stored</h3>
            <p>
              Contact messages are stored in a Supabase database hosted in the EU. They are retained only as long as needed to respond to your enquiry, and you may request deletion at any time.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">Cookies</h3>
            <p>
              This site does not use tracking cookies. A local storage entry is used to remember your light/dark theme preference. No analytics or advertising trackers are loaded.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">Your rights</h3>
            <p>
              You can request a copy of your data, ask for it to be corrected, or ask for it to be deleted. Email me at{' '}
              <a href={`mailto:${SITE.email}`} className="text-accent animated-link">{SITE.email}</a>
              {' '}and I'll respond within 30 days.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-foreground mb-2">Changes</h3>
            <p>
              If this policy changes, the updated version will appear on this page with a new date.
            </p>
          </div>

          <p className="text-sm pt-4 border-t border-border">
            Last updated: 26 September 2026
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10">
          <Link to="/" className="text-accent animated-link">Back home</Link>
        </div>
      </Reveal>
    </Section>
  );
}
