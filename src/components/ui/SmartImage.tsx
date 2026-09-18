import { useState } from 'react';
import { Award, ImageIcon, User } from 'lucide-react';

type Props = {
  src: string | null;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Slow pan + zoom once the image is actually present. */
  kenBurns?: boolean;
  variant?: 'certificate' | 'portrait';
  /** Shown inside the placeholder so the missing file is obvious and nameable. */
  placeholderLabel?: string;
};

/**
 * Renders an image, falling back to a designed placeholder when the file is
 * absent or fails to load. The real photos can be dropped into /public/images
 * later with no code change — see README.
 */
export function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  kenBurns = false,
  variant = 'certificate',
  placeholderLabel,
}: Props) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    const Icon = variant === 'portrait' ? User : placeholderLabel ? Award : ImageIcon;
    // No src at all is a deliberate "this item has no certificate" case, so it
    // stays decorative. A src that failed to load is worth announcing.
    const decorative = !src;
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-navy-800 via-navy-700 to-navy-800 ${className}`}
        role={decorative ? undefined : 'img'}
        aria-hidden={decorative ? true : undefined}
        aria-label={decorative ? undefined : `${alt} — image not yet added`}
      >
        <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
          <span className="rounded-full border border-gold-500/40 bg-navy-900/60 p-3">
            <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
          </span>
          {placeholderLabel && (
            <span className="text-[11px] font-medium uppercase tracking-wider text-ivory-200/60">
              {placeholderLabel}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${kenBurns ? 'animate-kenburns' : ''} ${imgClassName}`}
      />
    </div>
  );
}
