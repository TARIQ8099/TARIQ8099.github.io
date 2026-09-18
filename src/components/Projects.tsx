import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';
import { popItem, Stagger } from './ui/Reveal';

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="section-pad bg-navy-900">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Nine systems, from lab to deployment"
          subtitle="Predictive maintenance, medical imaging, multimodal AI, MLOps pipelines, and industrial robotics."
        />

        <div className="mt-14 space-y-7">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className="group grid overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-lift transition-all duration-300 hover:border-gold-500/30 md:grid-cols-[minmax(0,210px)_minmax(0,1fr)]"
            >
              {/* Left panel slides in from far left, blur -> sharp. */}
              <motion.div
                initial={reduce ? { opacity: 1 } : { opacity: 0, x: -90, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col justify-between border-b border-white/10 bg-navy-950 p-6 transition-colors duration-500 group-hover:bg-[#0B1330] md:border-b-0 md:border-r"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 opacity-0 transition-opacity duration-500 group-hover:from-gold-500/[0.12] group-hover:to-transparent group-hover:opacity-100"
                />
                <div className="relative">
                  <span className="font-mono text-4xl font-bold text-gold-500/35">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300/85">{p.type}</p>
                </div>
                {p.duration && <p className="relative mt-5 text-xs text-ivory-200/55">{p.duration}</p>}
              </motion.div>

              <motion.div
                initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.3 }}
                className="p-6 sm:p-8"
              >
                <h3 className="text-lg font-semibold leading-snug text-ivory-50 transition-[letter-spacing] duration-300 group-hover:tracking-wide sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-200/75">{p.description}</p>

                <Stagger className="mt-6 grid gap-3 sm:grid-cols-2" stagger={0.12}>
                  {p.outcomes.map((o, i) => (
                    <motion.div
                      key={o}
                      variants={{
                        hidden: { opacity: 0, scale: 0.85, y: 14 },
                        show: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: { type: 'spring', stiffness: 380, damping: 22 },
                        },
                      }}
                      className="flex gap-3 rounded-xl border border-white/10 bg-navy-900/70 p-4 transition-colors duration-200 hover:border-gold-500/25"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gold-500/15 text-[11px] font-bold text-gold-400">
                        {i + 1}
                      </span>
                      <p className="text-[0.82rem] leading-relaxed text-ivory-200/80">{o}</p>
                    </motion.div>
                  ))}
                </Stagger>

                <Stagger className="mt-6 flex flex-wrap gap-2" stagger={0.07}>
                  {p.tech.map((t) => (
                    <motion.span
                      key={t}
                      variants={popItem}
                      className="relative overflow-hidden rounded-full border border-gold-500/25 bg-gold-500/[0.07] px-3 py-1.5 text-xs font-medium text-gold-200"
                    >
                      {t}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shimmer"
                      />
                    </motion.span>
                  ))}
                </Stagger>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
