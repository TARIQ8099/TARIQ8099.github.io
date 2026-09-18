import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays, MapPin, Trophy, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="section-pad bg-navy-900">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Work Experience"
          title="Where the research met real equipment"
          subtitle="Award-winning team research projects at Zhengzhou University, deployed and validated on production hardware."
        />

        <div className="mt-14 space-y-8">
          {experience.map((job, idx) => (
            <motion.article
              key={job.role}
              initial={reduce ? { opacity: 1 } : { opacity: 0, x: idx % 2 === 0 ? -64 : 64 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group grid overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-lift transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/30 hover:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.6)] md:grid-cols-[minmax(0,260px)_minmax(0,1fr)]"
            >
              {/* Dark left panel — opens like a curtain from zero width. */}
              <motion.div
                initial={reduce ? { width: '100%' } : { width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.25, ease: [0.65, 0, 0.35, 1] }}
                className="relative overflow-hidden border-b border-white/10 bg-navy-950 md:border-b-0 md:border-r"
              >
                <div className="min-w-[260px] p-6 sm:p-7">
                  <span className="inline-flex animate-pulseGlow items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-300">
                    {job.badge}
                  </span>
                  <p className="mt-5 flex items-start gap-2 text-sm text-ivory-200/75">
                    <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                    {job.duration}
                  </p>
                  <p className="mt-3 flex items-start gap-2 text-sm text-ivory-200/75">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                    {job.location}
                  </p>
                </div>
              </motion.div>

              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold leading-snug text-ivory-50 sm:text-xl">{job.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gold-300/90">{job.org}</p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory-200/50">
                    Key Responsibilities
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {job.responsibilities.map((r, i) => (
                      <motion.li
                        key={r}
                        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : i * 0.15 }}
                        className="flex gap-3 text-sm leading-relaxed text-ivory-200/80"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500/80" aria-hidden="true" />
                        <span>{r}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-xl border border-gold-500/20 bg-gold-500/[0.06] p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                    <Trophy className="h-4 w-4" aria-hidden="true" />
                    Key Achievements
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {job.achievements.map((a, i) => (
                      <motion.li
                        key={a}
                        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: reduce ? 0 : 0.45,
                          delay: reduce ? 0 : (job.responsibilities.length + i) * 0.15,
                        }}
                        className="flex gap-3 text-sm leading-relaxed text-ivory-100/90"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                        <span>{a}</span>
                      </motion.li>
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
