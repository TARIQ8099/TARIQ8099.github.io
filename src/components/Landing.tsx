import { Fragment } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { profile, socials } from '../data/portfolio';
import { SocialIcon } from './ui/SocialIcon';

export function Landing() {
  const reduce = useReducedMotion();

  // Text resolves first, then the CTAs slide up, then the social icons pop in.
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: reduce ? 0 : 0.15 } },
  };

  const rise: Variants = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const ctaRise: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : 0.95 },
    },
  };

  const iconPop: Variants = {
    hidden: { opacity: 0, scale: 0.4, y: 10 },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { type: 'spring', stiffness: 500, damping: 14, mass: 0.7, delay: 1.35 + i * 0.12 },
    }),
  };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-900">
      {/* Decorative backdrop: soft gold glow over a faint grid. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-navy-500/25 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-shell flex min-h-screen flex-col items-center justify-center py-28 text-center"
      >
        <motion.div variants={rise}>
          <span className="grid h-16 w-16 place-items-center rounded-2xl border border-gold-500/50 bg-navy-800/80 text-lg font-bold tracking-[0.15em] text-gold-400 shadow-goldglow">
            {profile.initials}
          </span>
        </motion.div>

        <motion.h1
          variants={rise}
          className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          variants={rise}
          className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-2"
        >
          {profile.designations.map((d, i) => (
            <Fragment key={d}>
              {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-gold-500/70 sm:block" aria-hidden="true" />}
              <span className="text-sm font-medium text-gold-300 sm:text-base">{d}</span>
            </Fragment>
          ))}
        </motion.div>

        <motion.p
          variants={rise}
          className="mt-8 max-w-3xl text-[0.98rem] leading-[1.85] text-ivory-200/75 sm:text-base"
        >
          {profile.intro}
        </motion.p>

        <motion.div variants={ctaRise} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#about"
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-200 hover:bg-gold-400 hover:shadow-goldglow"
          >
            Learn More About Me
            <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gold-500/50 px-7 py-3.5 text-sm font-semibold text-gold-300 transition-all duration-200 hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </motion.div>

        <div className="mt-12 flex items-center gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              custom={i}
              variants={iconPop}
              initial="hidden"
              animate="show"
              href={s.href}
              target={s.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
              aria-label={s.label}
              title={s.label}
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/15 text-ivory-200/80 transition-all duration-200 hover:-translate-y-1 hover:border-gold-500/60 hover:text-gold-400"
            >
              <SocialIcon name={s.icon} className="h-[1.15rem] w-[1.15rem]" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
