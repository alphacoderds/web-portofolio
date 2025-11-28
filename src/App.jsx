import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skill from "./components/skill";
import Project from "./components/project";
import Experience from "./components/experience";
import Certificate from "./components/certificate";
import Contact from "./components/contact";
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Certificate />
      <Contact />
    </>
  );
}
