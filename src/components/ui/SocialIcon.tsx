import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const map: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  pin: MapPin,
};

export function SocialIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Mail;
  return <Icon className={className} aria-hidden="true" />;
}
