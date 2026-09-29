import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { SITE } from '@/lib/content';

const ENQUIRY_TYPES = ['Job opportunity', 'Internship', 'Freelance project', 'Just saying hello'] as const;

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const honeypot = formData.get('website') as string;
    if (honeypot) {
      setStatus('success');
      form.reset();
      return;
    }

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = (formData.get('company') as string) || null;
    const enquiryType = formData.get('enquiryType') as string;
    const message = formData.get('message') as string;
    const consent = formData.get('consent') as string;

    if (!consent) {
      setStatus('error');
      setErrorMsg('Please accept the privacy policy to continue.');
      return;
    }

    if (message.length > 2000) {
      setStatus('error');
      setErrorMsg('Message is too long. Please keep it under 2000 characters.');
      return;
    }

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name,
        email,
        company,
        enquiry_type: enquiryType,
        message,
        status: 'new',
      });

      if (error) throw error;

      try {
        await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ name, email, company, enquiry_type: enquiryType, message }),
        });
      } catch {
        // Email notification is best-effort; the message is already saved in the database
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try emailing me directly at ' + SITE.email);
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-border bg-card p-8 text-center"
      >
        <svg width="120" height="40" viewBox="0 0 120 40" className="mx-auto mb-4 text-accent" aria-hidden="true">
          <motion.path
            d="M5 20 L30 20 L35 10 L50 10 L55 20 L80 20 L85 10 L115 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.circle
            cx="115" cy="10" r="3" fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </svg>
        <div className="mb-2 flex justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-2/10 text-accent-2">
            <Check size={24} />
          </span>
        </div>
        <h3 className="text-lg mb-2">Thanks, I'll be in touch soon.</h3>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-accent animated-link"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
          <input
            id="name"
            name="name"
            required
            maxLength={100}
            className="flex h-11 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            className="flex h-11 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium">Company (optional)</label>
          <input
            id="company"
            name="company"
            maxLength={200}
            className="flex h-11 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      )}

      <div>
        <label htmlFor="enquiryType" className="mb-1 block text-sm font-medium">Enquiry type</label>
        <select
          id="enquiryType"
          name="enquiryType"
          required
          defaultValue=""
          className="flex h-11 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="" disabled>Select one…</option>
          {ENQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={2000}
          rows={compact ? 4 : 6}
          className="flex w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-border accent-accent"
        />
        <label htmlFor="consent" className="text-sm text-muted">
          I agree to the <a href="/privacy" className="text-accent animated-link">privacy policy</a>.
        </label>
      </div>

      {status === 'error' && (
        <p className="text-sm text-destructive" role="alert">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity btn-press disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
        ) : (
          <>
            <Send size={18} />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
