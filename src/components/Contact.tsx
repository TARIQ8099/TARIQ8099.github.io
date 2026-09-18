import { useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { contactRows, profile } from '../data/portfolio';
import { SectionHeading } from './ui/SectionHeading';
import { SocialIcon } from './ui/SocialIcon';

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: '', email: '', subject: '', message: '' };

const fieldOrder: { key: keyof Fields; label: string; type: string; textarea?: boolean }[] = [
  { key: 'name', label: 'Full Name', type: 'text' },
  { key: 'email', label: 'Email Address', type: 'email' },
  { key: 'subject', label: 'Subject', type: 'text' },
  { key: 'message', label: 'Message', type: 'text', textarea: true },
];

export function Contact() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  const validate = (v: Fields) => {
    const e: Partial<Fields> = {};
    if (!v.name.trim()) e.name = 'Please enter your name.';
    if (!v.email.trim()) e.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'That email address looks incomplete.';
    if (!v.subject.trim()) e.subject = 'Please add a subject.';
    if (!v.message.trim()) e.message = 'Please write a message.';
    return e;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Opens the visitor's mail client with the message pre-composed.
    // To send server-side instead, swap this for a Formspree/Web3Forms POST — see README.
    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad bg-navy-900">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Open to research collaborations, engineering roles, and interesting problems."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          {/* LEFT — form */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: -50, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduce ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-white p-7 shadow-lift sm:p-9"
          >
            <h3 className="text-xl font-semibold text-navy-900">Send Me a Message</h3>
            <p className="mt-2 text-sm text-navy-700/70">
              Fill this in and it opens in your mail app, addressed to me.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-7">
              {fieldOrder.map((f, i) => {
                const id = `contact-${f.key}`;
                const hasError = Boolean(errors[f.key]);
                const shared = {
                  id,
                  name: f.key,
                  value: values[f.key],
                  placeholder: ' ',
                  'aria-invalid': hasError,
                  'aria-describedby': hasError ? `${id}-error` : undefined,
                  onChange: (
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                  ) => {
                    setValues((v) => ({ ...v, [f.key]: e.target.value }));
                    if (hasError) setErrors((prev) => ({ ...prev, [f.key]: undefined }));
                  },
                  className:
                    'peer w-full border-0 border-b border-ivory-200 bg-transparent px-0 pb-2 pt-6 text-sm text-navy-900 outline-none placeholder-shown:border-ivory-200 focus:ring-0',
                };

                return (
                  <div key={f.key} className="relative">
                    {f.textarea ? (
                      <textarea {...shared} rows={5} className={`${shared.className} resize-y`} />
                    ) : (
                      <input {...shared} type={f.type} />
                    )}

                    <label
                      htmlFor={id}
                      className="pointer-events-none absolute left-0 top-0 text-xs font-medium text-gold-ink transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-navy-700/50 peer-focus:top-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-gold-ink"
                    >
                      {f.label}
                    </label>

                    {/* Base rule draws in sequentially on first view. */}
                    <motion.span
                      aria-hidden="true"
                      initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.45 + i * 0.18 }}
                      style={{ originX: 0 }}
                      className="absolute inset-x-0 bottom-0 h-px bg-ivory-200"
                    />
                    {/* Gold rule draws left-to-right on focus. */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-300 ease-out peer-focus:scale-x-100"
                    />

                    {hasError && (
                      <p id={`${id}-error`} role="alert" className="mt-2 text-xs font-medium text-red-600">
                        {errors[f.key]}
                      </p>
                    )}
                  </div>
                );
              })}

              <motion.button
                type="submit"
                initial={reduce ? { scale: 1 } : { scale: 1 }}
                whileInView={reduce ? {} : { scale: [1, 1.03, 1] }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="group relative w-full cursor-pointer overflow-hidden rounded-full bg-navy-900 px-8 py-4 text-sm font-semibold text-gold-300 transition-colors duration-200 hover:bg-navy-800 sm:w-auto"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      Opening your mail app…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                    </>
                  )}
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shimmer"
                />
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT — contact info */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: 50, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduce ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/10 bg-navy-950 p-7 shadow-lift sm:p-9"
          >
            <h3 className="text-xl font-semibold text-ivory-50">Contact Information</h3>
            <p className="mt-2 text-sm text-ivory-200/65">
              Reach me directly through any of these channels.
            </p>

            <ul className="mt-8 space-y-2">
              {contactRows.map((row) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-navy-800 text-gold-400 transition-colors duration-200 group-hover:border-gold-500/50 group-hover:bg-gold-500 group-hover:text-navy-950">
                      <SocialIcon name={row.icon} className="h-[1.1rem] w-[1.1rem]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-ivory-200/45">
                        {row.label}
                      </span>
                      <span className="block truncate text-sm text-ivory-100">{row.value}</span>
                    </span>
                  </>
                );

                return (
                  <li key={row.label}>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith('http') ? '_blank' : undefined}
                        rel={row.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                        className="group flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-all duration-200 hover:translate-x-1.5 hover:bg-white/5"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 rounded-xl p-3 transition-all duration-200 hover:translate-x-1.5 hover:bg-white/5">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 rounded-xl border border-gold-500/20 bg-gold-500/[0.06] p-5">
              <p className="text-sm leading-relaxed text-ivory-100/85">
                Currently in my 7th semester and open to research collaborations, internships, and
                engineering opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
