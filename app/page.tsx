import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Education/>
      <Skills />
      <Experience/>
      <Projects />
      <Research/>
      <Awards/>
      <Contact />
      <Footer/>
    </main>
  );
}