import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navSections, profile } from '../data/portfolio';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-navy-950/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[var(--nav-h)] w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          className="group flex items-center gap-2"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-gold-500/50 bg-navy-800 text-sm font-bold tracking-wider text-gold-400 transition-colors duration-200 group-hover:border-gold-400 group-hover:text-gold-300">
            {profile.initials}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? 'true' : undefined}
                className={`relative cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === s.id ? 'text-gold-400' : 'text-ivory-200/75 hover:text-ivory-50'
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gold-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg border border-white/15 text-ivory-50 transition-colors duration-200 hover:border-gold-500/60 hover:text-gold-400 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-md lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {navSections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={`block cursor-pointer rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                      active === s.id
                        ? 'bg-white/5 text-gold-400'
                        : 'text-ivory-200/80 hover:bg-white/5 hover:text-ivory-50'
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
