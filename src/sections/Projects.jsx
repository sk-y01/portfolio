// import { useState } from "react";
// import ProjectModal from "../components/ProjectModal";
// import "./Projects.scss";
// import { projectData } from "../data/project";
// import { formatText } from "../utils/formatText";
// import SectionTitle from "../components/SectionTitle";

// // 기본 이미지
// import noImage from "../assets/images/no-image.png";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const openLink = (url) => {
//     if (url && url !== "#") {
//       window.open(url, "_blank", "noopener,noreferrer");
//     } else {
//       alert("링크 준비 중입니다 🙂");
//     }
//   };

//   // ✅ assets/images 안의 파일명만 받는 이미지 처리 함수
//   const getImage = (fileName) => {
//     try {
//       return new URL(`../assets/images/${fileName}`, import.meta.url).href;
//     } catch {
//       return noImage;
//     }
//   };

//   return (
//     <section id="projects" className="projects">
//       <div className="inner">
//         <SectionTitle title="Projects" />

//         <div className="project-list">
//           {projectData.map((proj) => (
//             <div key={proj.id} className="project-card">
//               <div className="project-title">
//                 <h4>{proj.titleMain}</h4>
//                 <h5>{proj.titleSub}</h5>
//               </div>

//               {/* ✅ 대표 이미지 */}
//               <img
//                 src={getImage(proj.result)}
//                 alt={`${proj.titleSub} 썸네일`}
//                 className="project-image"
//                 onError={(e) => (e.target.src = noImage)}
//               />

//               {/* ✅ 소개 */}
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html: formatText(proj.introShort || proj.intro),
//                 }}
//               />

//               <div className="btn-groups">
//                 <button
//                   className="white-btn"
//                   onClick={() => setSelectedProject(proj)}
//                 >
//                   상세보기
//                 </button>
//                 <button
//                   className="blue-btn"
//                   onClick={() => openLink(proj.link)}
//                 >
//                   바로가기
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ 모달 */}
//       {selectedProject && (
//         <ProjectModal
//           project={selectedProject}
//           onClose={() => setSelectedProject(null)}
//           noImage={noImage}
//         />
//       )}
//     </section>
//   );
// };

// export default Projects;



import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import "./Projects.scss";
import { projectData } from "../data/project";
import { formatText } from "../utils/formatText";
import SectionTitle from "../components/SectionTitle";
import noImage from "../assets/images/no-image.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // ✅ 외부 링크 열기
  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("링크 준비 중입니다 🙂");
    }
  };

  // ✅ 이미지 로더 (try/catch 예외 처리)
  const getImage = (fileName) => {
    try {
      return new URL(`../assets/images/${fileName}`, import.meta.url).href;
    } catch {
      return noImage;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="inner">
        <SectionTitle title="Projects" />

        <div className="project-list">
          {projectData.map((proj) => {
            // ✅ 대표 이미지: images 배열이 있으면 첫 번째 이미지 사용
            const thumbnail =
              proj.images && proj.images.length > 0
                ? getImage(proj.images[0])
                : proj.result
                ? getImage(proj.result)
                : noImage;

            return (
              <div key={proj.id} className="project-card">
                {/* 제목 */}
                <div className="project-title">
                  <h4>{proj.titleMain}</h4>
                  <h5>{proj.titleSub}</h5>
                </div>

                {/* ✅ 대표 이미지 (배열 기반) */}
                <img
                  src={thumbnail}
                  alt={`${proj.titleSub} 썸네일`}
                  className="project-image"
                  onError={(e) => (e.target.src = noImage)}
                />

                {/* ✅ 소개 (짧은 요약 우선 표시) */}
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatText(proj.introShort || proj.intro),
                  }}
                />

                {/* 버튼 그룹 */}
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
            );
          })}
        </div>
      </div>

      {/* ✅ 모달 */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          noImage={noImage}
        />
      )}
    </section>
  );
};

export default Projects;
