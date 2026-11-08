/**
 * ============================================================
 *  YOUR PERSONAL INFORMATION
 *  Edit the values in this file to update the whole website.
 * ============================================================
 */

export const siteConfig = {
  name: "Boktiyer Hossen",
  initials: "BH",
  title: "Boktiyer Hossen | Frontend Developer & Creative Designer",
  role: "Frontend Web Developer | Canva Designer | Microsoft Office Specialist",
  shortRole: "Frontend Web Developer & Creative Designer",
  description:
    "Portfolio of Boktiyer Hossen — a Frontend Web Developer, Canva Designer and Microsoft Office Specialist studying Computer Science & Engineering at Port City International University.",
  intro:
    "I build clean, responsive and fast websites with React, Next.js and Tailwind CSS — and I design eye-catching posters, social media graphics, Microsoft Word documents and PowerPoint presentations.",
  location: "Chattogram, Bangladesh",

  // The live address of your website (set NEXT_PUBLIC_SITE_URL on Vercel).
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  // Files inside the /public folder
  profileImage: "/images/profile.png",
  cvFile: "/resume/cv.pdf",

  email: "boktiyerhossen43085@gmail.com",
  socials: {
    github: "https://github.com/boktiyer",
    linkedin: "https://www.linkedin.com/in/boktiyer-hossen-b460a6391",
    facebook: "https://www.facebook.com/boktiyer.hossen.2025",
  },
  // This website's code on GitHub
  repoUrl: "https://github.com/boktiyer/boktiyer-hossen-portfolio",

  // Other spellings people may search for (used in SEO structured data)
  alternateNames: ["Boktiyer", "Boktier Hossen", "Boktiar Hossen", "Boktier"],

  keywords: [
    "Boktiyer Hossen",
    "Boktiyer",
    "boktier hossen",
    "Boktiar Hossen",
    "Boktier",
    "Boktiyer Hossen portfolio",
    "Boktiyer Hossen protfolio",
    "portfolio website",
    "protfolio",
    "protfolio website",
    "Frontend Developer",
    "Web Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "Canva Designer",
    "Microsoft Office Specialist",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "PCIU",
    "Portfolio",
  ],
};

/** Opens a new Gmail message addressed to you (works even without a desktop mail app). */
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Designs", href: "#designs" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
