import { Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { cn } from "@/lib/utils";

const links = [
  { label: "GitHub", href: siteConfig.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedinIcon },
];

/** Round GitHub / LinkedIn (and optional email) buttons. */
export function SocialLinks({
  className,
  showEmail = false,
}: {
  className?: string;
  showEmail?: boolean;
}) {
  const btn =
    "glass text-muted hover:text-white hover:border-accent/50 hover:bg-maroon/40 flex size-11 items-center justify-center rounded-full transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-6px_rgb(128_0_32/0.8)]";

  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={btn}>
            <Icon className="size-5" />
          </a>
        </li>
      ))}
      {showEmail && (
        <li>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className={btn}>
            <Mail className="size-5" aria-hidden />
          </a>
        </li>
      )}
    </ul>
  );
}
