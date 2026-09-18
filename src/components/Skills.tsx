import { motion, useReducedMotion } from 'framer-motion';
import { Brain, Cloud, Code2, Layers, Sparkles, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { languages, skillCategories, softSkills } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';
import { Counter } from './ui/Counter';
import { popItem, Stagger } from './ui/Reveal';

const icons: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  cloud: Cloud,
  sparkles: Sparkles,
  brain: Brain,
  wrench: Wrench,
};

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="section-pad bg-navy-900">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          subtitle="Proficiency levels are self-assessed estimates based on project depth and hands-on experience."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => {
            const Icon = icons[cat.icon] ?? Code2;
            // Grid wave: cards nearer the top-left resolve first.
            const wave = (idx % 3) * 0.08 + Math.floor(idx / 3) * 0.12;

            return (
              <motion.div
                key={cat.name}
                initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : wave, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-lift"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-500/[0.08] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-950 text-gold-400 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-ivory-50">{cat.name}</h3>
                  </div>
                  <Counter to={cat.overall} suffix="%" className="text-sm font-bold text-gold-400" />
                </div>

                {cat.skills.length > 0 ? (
                  <ul className="relative mt-6 space-y-4">
                    {cat.skills.map((s, i) => (
                      <li key={s.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-ivory-200/85">{s.name}</span>
                          <Counter to={s.level} suffix="%" className="text-xs font-medium text-ivory-200/55" />
                        </div>
                        <div
                          className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10"
                          role="progressbar"
                          aria-valuenow={s.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${s.name} proficiency`}
                        >
                          <motion.div
                            initial={reduce ? { width: `${s.level}%` } : { width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                              duration: reduce ? 0 : 1,
                              delay: reduce ? 0 : 0.1 + i * 0.06,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-300"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Stagger className="relative mt-6 flex flex-wrap gap-2" stagger={0.06}>
                    {cat.tags?.map((t) => (
                      <motion.span
                        key={t}
                        variants={popItem}
                        className="rounded-lg border border-gold-500/25 bg-gold-500/[0.07] px-3 py-1.5 text-xs font-medium text-gold-200"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </Stagger>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Languages</p>
            <Stagger className="mt-4 flex flex-wrap gap-2.5" stagger={0.08}>
              {languages.map((l) => (
                <motion.span
                  key={l.name}
                  variants={popItem}
                  className="rounded-full border border-white/12 bg-navy-800 px-4 py-2 text-sm text-ivory-100"
                >
                  {l.name} <span className="text-ivory-200/50">({l.level})</span>
                </motion.span>
              ))}
            </Stagger>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Soft Skills</p>
            <Stagger className="mt-4 flex flex-wrap gap-2.5" stagger={0.06}>
              {softSkills.map((s) => (
                <motion.span
                  key={s}
                  variants={popItem}
                  className="rounded-full border border-white/12 bg-navy-800 px-4 py-2 text-sm text-ivory-100"
                >
                  {s}
                </motion.span>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
