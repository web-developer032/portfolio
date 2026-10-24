import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main>
        <Home />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
