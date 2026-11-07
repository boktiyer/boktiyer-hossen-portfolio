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
};

export const projects: Project[] = [
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
