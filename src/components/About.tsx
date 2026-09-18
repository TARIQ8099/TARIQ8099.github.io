import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Briefcase, Code2, Compass, GraduationCap, Target, FileText, Wrench } from 'lucide-react';
import { languages, profile } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';
import { SmartImage } from './ui/SmartImage';
import { Reveal, popItem, Stagger } from './ui/Reveal';

const workLinks = [
  { id: 'experience', label: 'Work Experience', Icon: Briefcase },
  { id: 'education', label: 'Education', Icon: GraduationCap },
  { id: 'projects', label: 'Projects', Icon: Code2 },
  { id: 'publications', label: 'Publications', Icon: FileText },
  { id: 'skills', label: 'Skills', Icon: Wrench },
];

export function About() {
  const reduce = useReducedMotion();

  const flipCard = (delay: number): Variants => ({
    hidden: { opacity: 0, rotateY: reduce ? 0 : -75 },
    show: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: reduce ? 0 : 0.75, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
    },
  });

  return (
    <section id="about" className="section-pad bg-ivory-100">
      <div className="section-shell">
        <SectionHeading eyebrow="About Me" title="Turning research into deployed systems" tone="light" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
          {/* Left column: portrait + section jump buttons */}
          <div className="flex flex-col items-center lg:items-start">
            <Reveal direction="left" duration={0.75} className="w-full max-w-[320px]">
              <div className="group relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-gold-500/25 via-transparent to-navy-600/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <SmartImage
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  variant="portrait"
                  placeholderLabel="Profile photo"
                  className="relative aspect-[4/5] w-full rounded-2xl border border-ivory-200 shadow-card"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 h-20 w-20 rounded-2xl border-b-2 border-r-2 border-gold-500/60"
                />
              </div>
            </Reveal>

            <Stagger className="mt-10 w-full max-w-[320px] space-y-2.5" stagger={0.1} delay={0.15}>
              <motion.p
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink"
              >
                View My Work
              </motion.p>
              {workLinks.map(({ id, label, Icon }) => (
                <motion.a
                  key={id}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  href={`#${id}`}
                  className="group/link relative flex cursor-pointer items-center gap-3 rounded-lg border border-ivory-200 bg-white px-4 py-3 text-sm font-medium text-navy-800 transition-all duration-200 hover:border-gold-500/50 hover:text-navy-900"
                >
                  <Icon
                    className="h-4 w-4 text-gold-ink transition-transform duration-200 group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  />
                  {label}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-4 h-px w-0 bg-gold-500 transition-all duration-300 ease-out group-hover/link:w-[calc(100%-2rem)]"
                  />
                </motion.a>
              ))}
            </Stagger>
          </div>

          {/* Right column: summary + mission/vision + languages */}
          <div>
            <Reveal direction="up">
              <p className="text-[0.98rem] leading-[1.9] text-navy-700/90 sm:text-base">{profile.summary}</p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2" style={{ perspective: 1200 }}>
              <motion.div
                variants={flipCard(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="card-light p-6 transition-shadow duration-300 hover:shadow-lift"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-900 text-gold-400">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/85">{profile.mission}</p>
              </motion.div>

              <motion.div
                variants={flipCard(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="card-light p-6 transition-shadow duration-300 hover:shadow-lift"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-900 text-gold-400">
                  <Compass className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/85">{profile.vision}</p>
              </motion.div>
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">Languages</p>
              <Stagger className="mt-4 flex flex-wrap gap-2.5" stagger={0.08}>
                {languages.map((l) => (
                  <motion.span
                    key={l.name}
                    variants={popItem}
                    className="rounded-full border border-ivory-200 bg-white px-4 py-2 text-sm text-navy-800 shadow-sm"
                  >
                    {l.name} <span className="text-navy-700/55">({l.level})</span>
                  </motion.span>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
