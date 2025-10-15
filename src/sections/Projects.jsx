import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import "./Projects.scss";

const projectData = [
  {
    id: 1,
    title: "팀프로젝트 - 세잔직업전문학교 홈페이지 리뉴얼",
    image : "이미지 자리",
    intro: "홈페이지 리뉴얼 프로젝트 개요",
    period: "2025.00.00 ~ 2025.00.00",
    process: "개발 과정에서 겪은 문제와 해결 방법...",
    stack: "React, SCSS, Firebase",
    result: "결과물(스크린샷, 링크)",
    insight: "얻은 경험과 배운 점",
    github: "#",
    design: "#",
    plan: "#",
  },
  {
    id: 2,
    title: "팀프로젝트 - 세잔직업전문학교 홈페이지 리뉴얼",
    intro: "홈페이지 리뉴얼 프로젝트 개요",
    period: "2025.00.00 ~ 2025.00.00",
    process: "개발 과정에서 겪은 문제와 해결 방법...",
    stack: "React, SCSS, Firebase",
    result: "결과물(스크린샷, 링크)",
    insight: "얻은 경험과 배운 점",
    github: "#",
    design: "#",
    plan: "#",
  },
  {
    id: 3,
    title: "팀프로젝트 - 세잔직업전문학교 홈페이지 리뉴얼",
    intro: "홈페이지 리뉴얼 프로젝트 개요",
    period: "2025.00.00 ~ 2025.00.00",
    process: "개발 과정에서 겪은 문제와 해결 방법...",
    stack: "React, SCSS, Firebase",
    result: "결과물(스크린샷, 링크)",
    insight: "얻은 경험과 배운 점",
    github: "#",
    design: "#",
    plan: "#",
  },
  {
    id: 4,
    title: "팀프로젝트 - 세잔직업전문학교 홈페이지 리뉴얼",
    intro: "홈페이지 리뉴얼 프로젝트 개요",
    period: "2025.00.00 ~ 2025.00.00",
    process: "개발 과정에서 겪은 문제와 해결 방법...",
    stack: "React, SCSS, Firebase",
    result: "결과물(스크린샷, 링크)",
    insight: "얻은 경험과 배운 점",
    github: "#",
    design: "#",
    plan: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="inner">
        <h2>Projects</h2>
        <div className="project-list">
          {projectData.map((proj) => (
            <div key={proj.id} className="project-card">
              <h3>{proj.title}</h3>
              <img src="" alt="프로젝트 이미지 사진 다 다르게 들어가야 되는데..." />
              <p>{proj.intro}</p>
              <button 
                className="white-btn" 
                onClick={() => setSelectedProject(proj)}
              >
                상세보기
              </button>
              {/* 모달창 열었을 때 뒷 배경 스크롤 안되게 해아하나? */}
            </div>
          ))}
        </div>
      </div>

      {/* 모달 연결 */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
