import HeroSection from "@/components/HeroSection";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Certificates from "@/components/Certificates";
import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#f5f5f5] px-5 pb-20 text-[#171717] md:px-12 lg:px-20">
      <HeroSection />
      <Services />
      <About />
      <Stack />
      <Projects />
      <WorkExperience />
      <Certificates />
      <ContactForm />
    </main>
  );
}
