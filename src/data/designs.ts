/**
 * ============================================================
 *  YOUR DESIGN WORK (posters, social media posts…)
 *  To add a design:
 *   1. Put the image in /public/images/designs/
 *   2. Copy one object below and change the values.
 *      width/height = the image's size in pixels.
 * ============================================================
 */

export type Design = {
  title: string;
  category: "Poster Design" | "Social Media Post" | "Word Document" | "PowerPoint Slides";
  description: string;
  image: string;
  width: number;
  height: number;
  /** Optional full document (PDF) visitors can open */
  file?: string;
  /** Number of pages in the full document */
  pages?: number;
};

export const designs: Design[] = [
  {
    title: "Election Campaign Poster",
    category: "Poster Design",
    description:
      "Campaign poster for the PCIU Computer Club Executive Committee Election — Publicity & Publication Secretary.",
    image: "/images/designs/election-campaign-poster.webp",
    width: 1024,
    height: 1536,
  },
  {
    title: "Election Candidate Post",
    category: "Social Media Post",
    description:
      "Candidate announcement post for the PCIU Computer Club Executive Committee Election 2026-27.",
    image: "/images/designs/election-candidate-post.webp",
    width: 1200,
    height: 1200,
  },
  {
    title: "Milad Mahfil Event Poster",
    category: "Poster Design",
    description: "Bangla event poster with Islamic-themed decoration and full program details.",
    image: "/images/designs/milad-mahfil-poster.webp",
    width: 1131,
    height: 1600,
  },
  {
    title: "Teacher's Day Post",
    category: "Social Media Post",
    description: "Teacher's Day greeting post for the PCIU Computer Club.",
    image: "/images/designs/teachers-day-post.webp",
    width: 1080,
    height: 1080,
  },
  {
    title: "Durga Puja Greeting",
    category: "Social Media Post",
    description: "Sharodiya festival greeting post for the PCIU Computer Club.",
    image: "/images/designs/durga-puja-greeting.webp",
    width: 1200,
    height: 1200,
  },

  // ----- Microsoft Word documents (first page shown, full PDF linked) -----
  {
    title: "Higher Math Concept Book — Chapter 07",
    category: "Word Document",
    description:
      "5-page Bangla concept book on infinite series for Udayan Academic Care (Class 9-10) — headings, tables, math equations and worked examples formatted in Microsoft Word.",
    image: "/images/designs/higher-math-ch07-concept-book.webp",
    file: "/documents/higher-math-ch07-concept-book.pdf",
    pages: 5,
    width: 1100,
    height: 1556,
  },
  {
    title: "Chemistry Concept Book — Chapter 03",
    category: "Word Document",
    description:
      "3-page Bangla chemistry concept book for Udayan Academic Care (Class 9-10) — comparison tables, formulas and practice questions formatted in Microsoft Word.",
    image: "/images/designs/chemistry-ch03-concept-book.webp",
    file: "/documents/chemistry-ch03-concept-book.pdf",
    pages: 3,
    width: 1100,
    height: 1556,
  },
  {
    title: "English MCQ Answer Sheet",
    category: "Word Document",
    description:
      "4-page, 100-question Parts of Speech test with answers and explanations for Shamim's English — two-column exam layout with a branded header, formatted in Microsoft Word.",
    image: "/images/designs/parts-of-speech-mcq-sheet.webp",
    file: "/documents/parts-of-speech-mcq-sheet.pdf",
    pages: 4,
    width: 1100,
    height: 1555,
  },

  // ----- Microsoft PowerPoint presentations (first slide shown, full PDF linked) -----
  {
    title: "DU-B (24-25) English Question Solve",
    category: "PowerPoint Slides",
    description:
      "19-slide PowerPoint presentation solving the Dhaka University B-unit 2024-25 English questions for Shamim's English — answer callouts plus Bangla-English vocabulary and idiom tables.",
    image: "/images/designs/du-b-24-25-english-question-solve.webp",
    file: "/documents/du-b-24-25-english-question-solve.pdf",
    pages: 19,
    width: 1280,
    height: 720,
  },
];
