import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import BusinessStrengths from "./components/BusinessStrengths";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-surface-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <BusinessStrengths />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
