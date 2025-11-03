// import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import ScrollButtons from "./components/ScrollButtons";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from './sections/Skills';
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Introduction from './sections/Introduction';
import './App.scss'

function App() {

//   useEffect(() => {
//   const sections = document.querySelectorAll("section"); // 태그로 직접 선택

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         } else {
//           entry.target.classList.remove("visible");
//         }
//       });
//     },
//     { threshold: 0.3 }
//   );

//   sections.forEach((section) => observer.observe(section));

//   return () => observer.disconnect();
// }, []);


  return (
    <>
      <Navbar />
        <Home />
        <Introduction id="intro" />
        <About />
        <Skills />
        <Projects />
        <Contact />
      <ScrollButtons />
    </>
  );
}

export default App;
