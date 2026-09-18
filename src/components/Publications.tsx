import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import { publications } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';

export function Publications() {
  const reduce = useReducedMotion();

  return (
    <section id="publications" className="section-pad bg-ivory-100">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Publications"
          title="Publications"
          tone="light"
          subtitle="Peer-reviewed research on AI-driven predictive maintenance and LLM-assisted software development."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {publications.map((pub, i) => (
            <motion.article
              key={pub.title}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-2xl border border-ivory-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-goldglow"
            >
              <motion.span
                initial={reduce ? { scale: 1 } : { scale: 1 }}
                whileInView={reduce ? {} : { scale: [1, 1.08, 1] }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-navy-900/10 bg-navy-900 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold-300"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                {pub.journal}
              </motion.span>

              <h3 className="mt-5 text-base font-semibold leading-snug text-navy-900 sm:text-lg">{pub.title}</h3>

              <p className="mt-3 text-sm text-navy-700/70">
                {pub.author} · {pub.year}
              </p>
              <p className="mt-1 text-sm italic text-gold-ink">{pub.venue}</p>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-navy-700/85">{pub.summary}</p>

              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer noopener"
                className="group/btn relative mt-7 inline-flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-gold-300 transition-colors duration-200 hover:bg-navy-800"
              >
                <span className="relative z-10">Read Paper</span>
                <ExternalLink className="relative z-10 h-4 w-4" aria-hidden="true" />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover/btn:animate-shimmer"
                />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
