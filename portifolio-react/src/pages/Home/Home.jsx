import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Courses from "../../components/Courses/Courses";
import Projects from "../../components/Projects/Projects";
import Technologies from "../../components/Technologies/Technologies";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
