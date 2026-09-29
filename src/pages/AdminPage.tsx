import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Mail, Trash2, Check, Clock, Archive, Reply, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Section, Eyebrow } from '@/components/layout/Section';

type Message = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  enquiry_type: string;
  message: string;
  status: string;
  created_at: string;
};

const STATUS_CONFIG: Record<string, { label: string; icon: typeof Clock; color: string }> = {
  new: { label: 'New', icon: Clock, color: 'text-accent' },
  read: { label: 'Read', icon: Check, color: 'text-muted' },
  replied: { label: 'Replied', icon: Reply, color: 'text-accent-2' },
  archived: { label: 'Archived', icon: Archive, color: 'text-muted' },
};

export default function AdminPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message | null>(null);
  const [msgLoading, setMsgLoading] = useState(false);

  const checkSession = useCallback(async () => {
    const { data } = await supabase.auth.getSession();
    setSession(!!data.session);
  }, []);

  useEffect(() => {
    checkSession();
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      (async () => { await checkSession(); })();
    });
    return () => sub.subscription.unsubscribe();
  }, [checkSession]);

  const loadMessages = useCallback(async () => {
    setMsgLoading(true);
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) setMessages(data as Message[]);
    setMsgLoading(false);
  }, []);

  useEffect(() => {
    if (session) loadMessages();
  }, [session, loadMessages]);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
    setLoading(false);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    setSession(false);
    setMessages([]);
    setSelected(null);
  }

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from('contact_messages')
      .update({ status })
      .eq('id', id);
    if (!error) {
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
      setSelected((prev) => (prev && prev.id === id ? { ...prev, status } : prev));
    }
  }

  async function deleteMessage(id: string) {
    const { error } = await supabase
      .from('contact_messages')
      .delete()
      .eq('id', id);
    if (!error) {
      setMessages((prev) => prev.filter((m) => m.id !== id));
      setSelected(null);
    }
  }

  if (session === null) {
    return (
      <Section className="pt-12 flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </Section>
    );
  }

  if (!session) {
    return (
      <Section className="pt-12">
        <div className="mx-auto max-w-sm">
          <Eyebrow>Admin</Eyebrow>
          <h1 className="mb-6 text-2xl">Sign in</h1>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="admin-email" className="mb-1 block text-sm font-medium">Email</label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex h-11 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="mb-1 block text-sm font-medium">Password</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="flex h-11 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            {authError && <p className="text-sm text-destructive">{authError}</p>}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity btn-press disabled:opacity-50"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign in'}
            </button>
          </form>
        </div>
      </Section>
    );
  }

  return (
    <Section className="pt-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Eyebrow>Admin</Eyebrow>
          <h1 className="text-2xl">Messages</h1>
        </div>
        <button
          onClick={handleSignOut}
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-surface transition-colors"
        >
          <LogOut size={16} /> Sign out
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
        <div className="space-y-2">
          {msgLoading && <p className="text-sm text-muted">Loading…</p>}
          {!msgLoading && messages.length === 0 && (
            <p className="text-sm text-muted">No messages yet.</p>
          )}
          {messages.map((msg) => {
            const cfg = STATUS_CONFIG[msg.status] || STATUS_CONFIG.new;
            const StatusIcon = cfg.icon;
            return (
              <button
                key={msg.id}
                onClick={() => {
                  setSelected(msg);
                  if (msg.status === 'new') updateStatus(msg.id, 'read');
                }}
                className={`w-full rounded-xl border p-4 text-left transition-colors ${
                  selected?.id === msg.id
                    ? 'border-accent bg-card'
                    : 'border-border bg-card hover:bg-surface'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium truncate">{msg.name}</p>
                  <span className={`flex items-center gap-1 text-xs ${cfg.color}`}>
                    <StatusIcon size={12} /> {cfg.label}
                  </span>
                </div>
                <p className="text-sm text-muted truncate">{msg.enquiry_type}</p>
                <p className="text-xs text-muted mt-1">
                  {new Date(msg.created_at).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit',
                  })}
                </p>
              </button>
            );
          })}
        </div>

        <div>
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg">{selected.name}</h2>
                    <a href={`mailto:${selected.email}`} className="text-sm text-accent inline-flex items-center gap-1 animated-link">
                      <Mail size={14} /> {selected.email}
                    </a>
                    {selected.company && <p className="text-sm text-muted mt-1">{selected.company}</p>}
                  </div>
                  <span className="text-xs text-muted whitespace-nowrap">
                    {new Date(selected.created_at).toLocaleString('en-US')}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="rounded-full bg-surface border border-border px-3 py-1 font-mono text-xs text-muted">
                    {selected.enquiry_type}
                  </span>
                </div>

                <p className="text-sm text-foreground whitespace-pre-wrap mb-6 max-prose">{selected.message}</p>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updateStatus(selected.id, 'replied')}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm hover:bg-surface transition-colors"
                  >
                    <Reply size={14} /> Mark replied
                  </button>
                  <button
                    onClick={() => updateStatus(selected.id, 'archived')}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm hover:bg-surface transition-colors"
                  >
                    <Archive size={14} /> Archive
                  </button>
                  <button
                    onClick={() => deleteMessage(selected.id)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-destructive/30 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-xl border border-border bg-card">
                <p className="text-sm text-muted">Select a message to read it.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
