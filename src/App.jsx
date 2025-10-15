import Navbar from "./components/Navbar";
import ScrollButtons from "./components/ScrollButtons";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from './sections/Skills';
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
        <Home />
        <About id="about" />
        <Skills />
        <Projects />
        <Contact />
      <ScrollButtons />
    </>
  );
}

export default App;
