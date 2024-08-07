import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <section className={`bg-[#0a192f] text-gray-300  grid gap-16`}>
        <Home />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Contact />
      </section>
    </>
  );
}

export default App;
