import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ScrollButtons from "./components/ScrollButtons";
import ProjectModal from "./components/ProjectModal"; // 모달 App으로 이동

import Home from "./sections/Home";
import Introduction from "./sections/Introduction";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./App.scss";

function App() {
  const [selectedProject, setSelectedProject] = useState(null); // 모달 상태 관리

  // 섹션 스크롤 애니메이션 (Intersection Observer)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Introduction id="intro" />
        <About />
        <Skills />
        {/* Projects에 onOpenModal 전달 */}
        <Projects onOpenModal={setSelectedProject} />
        <Contact />
      </main>

      {/* 모달은 App 최상단에서 렌더링됨 */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <ScrollButtons />
    </>
  );
}

export default App;
