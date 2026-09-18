import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays, GraduationCap, Clock } from 'lucide-react';
import { education } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';

export function Education() {
  const reduce = useReducedMotion();

  return (
    <section id="education" className="section-pad bg-ivory-100">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          tone="light"
          subtitle="Software Engineering at Zhengzhou University's School of Computer Science and Artificial Intelligence."
        />

        <div className="mt-14 space-y-8">
          {education.map((ed) => (
            <motion.article
              key={ed.qualification}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: -48, rotate: -2.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduce ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="group relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-ivory-200 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-9"
            >
              {/* Gold stroke traces the card border on hover. */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
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
                  className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-[1200ms] ease-out group-hover:[stroke-dashoffset:0]"
                />
              </svg>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-8deg]">
                  <GraduationCap className="h-7 w-7" aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-navy-900">{ed.qualification}</h3>
                  <p className="mt-1.5 text-sm text-gold-ink">{ed.institution}</p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy-700/75">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-gold-600" aria-hidden="true" />
                      {ed.duration}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gold-600" aria-hidden="true" />
                      {ed.mode}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700/45">
                    Key Highlights
                  </p>
                  <ul className="mt-3 space-y-3">
                    {ed.highlights.map((h, i) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-navy-700/90">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                        {/* Transform-only wipe: a cover collapses to the right, revealing
                            the line left-to-right for a typewriter feel. */}
                        <span className="relative">
                          {h}
                          <motion.span
                            aria-hidden="true"
                            initial={reduce ? { scaleX: 0 } : { scaleX: 1 }}
                            whileInView={{ scaleX: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                              duration: reduce ? 0 : 0.75,
                              delay: reduce ? 0 : 0.35 + i * 0.25,
                              ease: [0.33, 1, 0.68, 1],
                            }}
                            style={{ originX: 1 }}
                            className="absolute inset-0 bg-white"
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
