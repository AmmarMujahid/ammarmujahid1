import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="bg-primary-dark dark:bg-primary w-full h-[1px]"></div>
      <Aboutme />
      <div className="bg-primary-dark dark:bg-primary w-full h-[1px]"></div>
      <Projects />
      <div className="bg-primary-dark dark:bg-primary w-full h-[1px]"></div>
      <Contact />
      <Footer />
    </main>
  );
}
