import { Code2, Palette, FileText, type LucideIcon } from "lucide-react";

export type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive and accessible websites.",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    title: "Creative Design",
    description: "Designing visuals that communicate clearly and look great.",
    icon: Palette,
    skills: [
      "Canva Design",
      "Poster Design",
      "Social Media Graphics",
      "Presentation Design",
    ],
  },
  {
    title: "Microsoft Office",
    description: "Creating polished, professional documents and presentations.",
    icon: FileText,
    skills: [
      "Microsoft Word (DOCX)",
      "Professional Document Formatting",
      "Microsoft PowerPoint (PPTX)",
      "Professional Presentation Creation",
    ],
  },
];

export const totalSkills = skillCategories.reduce(
  (sum, c) => sum + c.skills.length,
  0,
);
