export type Education = {
  degree: string;
  field: string;
  institution: string;
  shortName?: string;
  status: string;
  location: string;
  description?: string;
  focus?: string[];
};

export const education: Education[] = [
  {
    degree: "Bachelor of Science (BSc)",
    field: "Computer Science & Engineering (CSE)",
    institution: "Port City International University",
    shortName: "PCIU",
    status: "Currently studying · 2nd Year",
    location: "Chattogram, Bangladesh",
    description:
      "Studying the foundations of computer science while building real web projects alongside my coursework.",
    focus: ["Programming", "Data Structures", "Algorithms", "Web Technologies"],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science Group",
    institution: "Chattogram Biggan College",
    status: "Passed · 2025",
    location: "Chattogram, Bangladesh",
  },
];
