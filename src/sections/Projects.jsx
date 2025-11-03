import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import "./Projects.scss";
import { projectData } from "../data/project";
import { formatText } from "../utils/formatText";

import SectionTitle from "../components/SectionTitle";

// 이미지 import
import noImage from "../assets/images/no-image.png"; // 👈 기본 이미지 추가
import project1_main from "../assets/images/project1_main.png";
import project2_main from "../assets/images/project2_main.png";
// import project3_main from "../assets/images/project3_main.png";

const imageMap = {
  1: project1_main,
  2: project2_main,
  // 3: project3_main,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("링크 준비 중입니다 🙂");
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="inner">
        <SectionTitle title="Projects" />

        <div className="project-list">
          {projectData.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="project-title">
                <h4>{proj.titleMain}</h4>
                <h5>{proj.titleSub}</h5>
              </div>

              {/* ✅ 이미지 fallback 처리 */}
              <img
                src={imageMap[proj.id] || noImage}
                alt={`${proj.titleSub} 썸네일`}
                className="project-image"
                onError={(e) => (e.target.src = noImage)} // 이미지 깨질 때도 fallback
              />

              <p
                dangerouslySetInnerHTML={{
                  __html: formatText(proj.intro),
                }}
              />

              <div className="btn-groups">
                <button
                  className="white-btn"
                  onClick={() => setSelectedProject(proj)}
                >
                  상세보기
                </button>

                <button
                  className="blue-btn"
                  onClick={() => openLink(proj.link)}
                >
                  바로가기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        noImage={noImage} // 👈 fallback 전달
      />
    </section>
  );
};

export default Projects;



// /* 이미지 다 연결 */
// import { useState } from "react";
// import ProjectModal from "../components/ProjectModal";
// import "./Projects.scss";
// import { projectData } from "../data/project";
// import { formatText } from "../utils/formatText";

// // 이미지 import
// // import no_img from "../assets/images/no-image.png"
// import project1_main from "../assets/images/project1_main.png";
// import project2_main from "../assets/images/project2_main.png";
// import project3_main from "../assets/images/project3_main.png";
// import project4_main from "../assets/images/project4_main.png";
// import SectionTitle from '../components/SectionTitle';

// const imageMap = {
//   1: project1_main,
//   2: project2_main,
//   3: project3_main,
//   4: project4_main,
// };

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const openLink = (url) => {
//     if (url && url !== "#") {
//       window.open(url, "_blank", "noopener,noreferrer");
//     } else {
//       alert("링크 준비 중입니다 🙂");
//     }
//   };

//   return (
//     <section id="projects" className="projects">
//       <div className="inner">
//         <SectionTitle title="Projects" /> 

//         <div className="project-list">
//           {projectData.map((proj) => (
//             <div key={proj.id} className="project-card">
//               {/* 제목 구조 변경 */}
//               <div className="project-title">
//                 <h4>{proj.titleMain}</h4>
//                 <h5>{proj.titleSub}</h5>
//               </div>

//               {/* 썸네일 이미지 */}
//               {imageMap[proj.id] ? (
//                 <img
//                   src={imageMap[proj.id]}
//                   alt={`${proj.titleSub} 썸네일`}
//                   className="project-image"
//                 />
//               ) : (
//                 <div className="no-image"> 이미지 준비 중입니다.</div>
//               )}

//               {/* 설명 */}
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html: formatText(proj.intro),
//                 }}
//               />

//               <div className="btn-groups">
//                 <button
//                   className="white-btn"
//                   onClick={() => setSelectedProject(proj)}
//                 >
//                   상세보기
//                 </button>

//                 <button className="blue-btn" onClick={() => openLink(proj.link)}>
//                   바로가기
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 모달 연결 */}
//       <ProjectModal
//         project={selectedProject}
//         onClose={() => setSelectedProject(null)}
//       />
//     </section>
//   );
// };

// export default Projects;
