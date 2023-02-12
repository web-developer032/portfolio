import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
    return (
        <>
            <Navbar />
            <section className="bg-[#0a192f] text-gray-300  grid gap-16">
                <Home />
                <About />
                <Skills />
                <Work />
                <Contact />
            </section>
        </>
    );
}

export default App;
