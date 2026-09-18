import { motion, useReducedMotion } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';
import { achievements, leadership, stats } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';
import { SmartImage } from './ui/SmartImage';
import { Counter } from './ui/Counter';

export function Achievements() {
  const reduce = useReducedMotion();

  return (
    <section id="achievements" className="section-pad bg-ivory-100">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Achievements & Honors"
          title="Achievements & Recognition"
          tone="light"
          subtitle="Recognized for innovation, teamwork, and research excellence across national competitions."
        />

        {/* Stat counters */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : i * 0.1 }}
              className="rounded-2xl border border-ivory-200 bg-white p-6 text-center shadow-card"
            >
              <Counter
                to={s.value}
                suffix={s.suffix}
                duration={1.2}
                className="block text-3xl font-bold text-navy-900 sm:text-4xl"
              />
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-navy-700/60">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Award cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.article
              key={a.title}
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 260, damping: 18, mass: 0.8, delay: i * 0.08 }
              }
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ivory-200 bg-white shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              {/* Gold border traces on hover. */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-20 h-full w-full"
                fill="none"
                preserveAspectRatio="none"
              >
                <rect
                  x="1"
                  y="1"
                  width="calc(100% - 2px)"
                  height="calc(100% - 2px)"
                  rx="15"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  pathLength={1}
                  className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-[1100ms] ease-out group-hover:[stroke-dashoffset:0]"
                />
              </svg>

              {a.image ? (
                <SmartImage
                  src={a.image}
                  alt={a.imageAlt ?? a.title}
                  kenBurns
                  placeholderLabel="Certificate"
                  className="aspect-[4/3] w-full border-b border-ivory-200 bg-ivory-200"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center border-b border-ivory-200 bg-gradient-to-br from-navy-900 to-navy-700">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-gold-500/40 bg-navy-950/60">
                    <Medal className="h-7 w-7 text-gold-400" aria-hidden="true" />
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <motion.span
                    initial={reduce ? { scale: 1 } : { scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={
                      reduce ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 14, delay: 0.3 + i * 0.08 }
                    }
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-300 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:shadow-goldglow"
                  >
                    {a.category === 'Academic' ? (
                      <Trophy className="h-3 w-3" aria-hidden="true" />
                    ) : (
                      <Award className="h-3 w-3" aria-hidden="true" />
                    )}
                    {a.category}
                  </motion.span>
                  {a.year && (
                    <span className="rounded-full border border-ivory-200 px-3 py-1 text-[11px] font-medium text-navy-700/65">
                      {a.year}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-[0.95rem] font-semibold leading-snug text-navy-900">{a.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gold-ink">{a.institution}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-700/80">{a.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Leadership & volunteering */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold text-navy-900">Leadership &amp; Volunteering</h3>
          <div className="gold-rule mt-4" aria-hidden="true" />

          <ul className="mt-6 space-y-3">
            {leadership.map((l, i) => (
              <motion.li
                key={l.title}
                initial={reduce ? { opacity: 1 } : { opacity: 0, x: -44 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-4 rounded-xl border border-ivory-200 bg-white p-4 transition-all duration-200 hover:border-gold-500/40 hover:shadow-card"
              >
                <SmartImage
                  src={l.image}
                  alt={`${l.title} certificate`}
                  className="h-14 w-14 shrink-0 rounded-lg border border-ivory-200 bg-ivory-200"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-navy-900">{l.title}</p>
                  <p className="mt-0.5 text-xs text-gold-ink">{l.org}</p>
                  <p className="mt-0.5 text-xs text-navy-700/60">{l.meta}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
