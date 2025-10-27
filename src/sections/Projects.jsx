// 프로젝트 따로

import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import "./Projects.scss";
import {projectData} from "../data/project"


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // 새 탭에서 링크 열기 함수
  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer" ); // rel="noopener noreferrer" → 보안상 필수 (탭 간 접근 차단)
    } else {
      alert("링크 준비 중입니다 🙂");
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="inner">
        <h2>Projects</h2>
        <p></p>

        <div className="project-list">
          {projectData.map((proj) => (
            <div key={proj.id} className="project-card">
              <h4>{proj.title}</h4>

              {/* 프로젝트별 이미지 */}
              <img
                src={proj.image}
                alt={`${proj.title} 이미지 준비중입니다.`}
                className="project-image"
              />

              <p>{proj.intro}</p>

              <div className="btn-groups">
                <button
                  className="white-b"
                  onClick={() => setSelectedProject(proj)}
                >
                  상세보기
                </button>

                {/* 바로가기 버튼 클릭 시 새 탭으로 이동 */}
                <button
                  className="blue-b"
                  onClick={() => openLink(proj.link)}
                >
                  바로가기
                </button>
              </div>
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
