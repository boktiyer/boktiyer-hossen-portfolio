import {
  MonitorSmartphone,
  LayoutTemplate,
  Megaphone,
  Presentation,
  FileText,
  Image as ImageIcon,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Modern websites built with React, Next.js and Tailwind CSS — fast, clean and easy to maintain.",
    icon: LayoutTemplate,
  },
  {
    title: "Responsive Web Design",
    description:
      "Layouts that look and work great on mobile phones, tablets and desktop screens.",
    icon: MonitorSmartphone,
  },
  {
    title: "Social Media Graphics",
    description:
      "Eye-catching Canva designs for posts, banners and stories that match your brand.",
    icon: Megaphone,
  },
  {
    title: "Poster Design",
    description:
      "Clear, attractive posters and flyers for events, announcements and promotions.",
    icon: ImageIcon,
  },
  {
    title: "PowerPoint Presentations",
    description:
      "Professional Microsoft PowerPoint (PPTX) and Canva presentations with clean structure, visuals and smooth slide flow.",
    icon: Presentation,
  },
  {
    title: "Microsoft Word Documents",
    description:
      "Well-structured, professionally formatted Word (DOCX) documents — reports, assignments, CVs and more.",
    icon: FileText,
  },
];
