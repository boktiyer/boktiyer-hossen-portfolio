import { siteConfig } from "./site";

/**
 * ============================================================
 *  YOUR PROJECTS
 *  To add a project, copy the example at the bottom, remove the
 *  // at the start of each line and change the values.
 *  Screenshots (optional) go in /public/images/projects/ and
 *  `image` is its path, e.g. "/images/projects/my-project.png".
 * ============================================================
 */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  image?: string;
  /** Small label shown on the screenshot, e.g. "Team Project" */
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "Shamim's English — Coaching Website",
    description:
      "A website for Shamim Sir's English coaching for HSC 1st Year, HSC 2nd Year and university admission students. It has course and book listings, a teacher profile, student login and registration, and a bilingual (English and Bangla) design.",
    tags: ["Responsive Design", "Bilingual UI", "Auth Pages", "Vercel"],
    liveUrl: "https://shamims-english.vercel.app/",
    image: "/images/projects/shamims-english.png",
  },
  {
    title: "Heritage Modern — Restaurant Website",
    description:
      "A multi-page website for a Bangladeshi restaurant with Home, Menu, About, Contact and Book a Table pages, a dish cart with checkout, a signature dishes slider and guest reviews.",
    tags: ["React", "React Router", "Tailwind CSS", "Swiper", "Vite"],
    liveUrl: "https://heritage-modern-seven.vercel.app/",
    image: "/images/projects/heritage-modern.webp",
    badge: "Team Project · Creative IT Institute",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This website! A fully responsive portfolio built with the Next.js App Router, TypeScript, Tailwind CSS and Framer Motion — with smooth animations, SEO metadata and a validated contact form.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "/",
    codeUrl: siteConfig.repoUrl,
  },
  // {
  //   title: "My Next Project",
  //   description: "What it does and what you learned building it.",
  //   tags: ["HTML5", "CSS3", "JavaScript"],
  //   liveUrl: "https://my-project.vercel.app",
  //   codeUrl: "https://github.com/your-username/my-project",
  //   image: "/images/projects/my-project.png",
  // },
];
