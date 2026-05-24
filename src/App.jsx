import About from "./components/About";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";

function WaveDivider() {
  return (
    <div className="wave-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,40 C240,90 480,10 720,40 C960,70 1200,110 1440,60 L1440,120 L0,120 Z"
          fill="rgba(230, 184, 0, 0.15)"
        />
      </svg>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WaveDivider />
        <About />
        <WaveDivider />
        <Skills />
        <WaveDivider />
        <Experience />
        <WaveDivider />
        <Articles />
        <WaveDivider />
        <Education />
        <WaveDivider />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
