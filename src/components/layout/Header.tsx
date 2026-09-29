import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Download, Github, Linkedin, Mail } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/content';
import { useTheme } from '@/lib/theme';
import { MonogramCC } from '@/components/decorative';
import { AzulejoTilePattern } from '@/components/decorative';
import { cn } from '@/lib/utils';

export function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border' : 'bg-transparent'
        )}
      >
        <div className="container-px flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary-foreground font-serif text-lg">
              <MonogramCC />
            </span>
            <span className="font-mono text-sm hidden sm:inline text-muted">{`~/chandrakant`}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors animated-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:text-accent transition-colors btn-press"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <Link
              to="/resume"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity btn-press"
            >
              <Download size={16} />
              Download résumé
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 tile-bg text-accent-2" style={{ opacity: 0.04 }}>
            <AzulejoTilePattern opacity={0.04} />
          </div>
          <div className="relative flex h-full flex-col p-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary-foreground font-serif text-lg">
                  <MonogramCC />
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-2" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="flex min-h-[44px] items-center px-4 py-3 text-lg font-medium text-foreground hover:text-accent hover:bg-surface rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent transition-colors">
                  <Github size={22} />
                </a>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href={`mailto:${SITE.email}`} aria-label="Email" className="text-muted hover:text-accent transition-colors">
                  <Mail size={22} />
                </a>
              </div>
              <Link
                to="/resume"
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                <Download size={16} />
                Download résumé
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
