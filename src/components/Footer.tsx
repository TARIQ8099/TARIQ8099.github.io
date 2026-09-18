import { profile, socials } from '../data/portfolio';
import { SocialIcon } from './ui/SocialIcon';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="section-shell flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-base font-semibold text-ivory-50">{profile.name}</p>
          <p className="mt-1 text-sm text-gold-400/85">{profile.tagline}</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
              aria-label={s.label}
              title={s.label}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/12 text-ivory-200/75 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-500/60 hover:text-gold-400"
            >
              <SocialIcon name={s.icon} className="h-[1.05rem] w-[1.05rem]" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="section-shell py-5">
          <p className="text-center text-xs text-ivory-200/40">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
