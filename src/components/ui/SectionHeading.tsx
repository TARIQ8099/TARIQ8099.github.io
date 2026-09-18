import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'dark',
  align = 'center',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** 'dark' = placed on navy, 'light' = placed on ivory. */
  tone?: 'dark' | 'light';
  align?: 'center' | 'left';
}) {
  const isDark = tone === 'dark';
  const centered = align === 'center';

  return (
    <Reveal className={centered ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
            isDark ? 'text-gold-400' : 'text-gold-ink'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          isDark ? 'text-ivory-50' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      <div className={`gold-rule mt-5 ${centered ? 'mx-auto' : ''}`} aria-hidden="true" />
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          } ${isDark ? 'text-ivory-200/80' : 'text-navy-700/80'}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
