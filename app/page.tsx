import Nav from "./components/Nav";
import Marquee from "./components/Marquee";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Exp from "./sections/Exp";
import Roles from "./sections/Roles";
import Projects from "./sections/Projects";
import Motto from "./sections/Motto";
import CV from "./sections/CV";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Exp />
        <div className="border-y border-line py-6">
          <Marquee
            items={[
              "Web",
              "Mobile",
              "Backend",
              "DevOps",
              "Design",
              "Performance",
            ]}
          />
        </div>
        <Roles />
        <Projects />
        <Motto />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
