import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Designs } from "@/sections/Designs";
import { EducationSection } from "@/sections/Education";
import { Contact } from "@/sections/Contact";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  // Structured data helps Google understand who this site is about.
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.shortRole,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.profileImage}`,
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Port City International University",
    },
  };

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Designs />
        <EducationSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
