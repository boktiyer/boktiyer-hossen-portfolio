import { Heart } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-accent/10 relative border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-12 sm:px-8 md:flex-row md:justify-between">
        <Logo />
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
      <div className="border-accent/10 border-t">
        <p className="text-muted mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-1.5 px-5 py-6 text-center text-sm sm:px-8">
          © {year} {siteConfig.name}. Built with
          <Heart className="text-accent size-4 fill-current" aria-label="love" />
          using Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
