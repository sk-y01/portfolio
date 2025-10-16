// import { useState } from "react";
// import ProjectModal from "../components/ProjectModal";
// import "./Projects.scss";

// const projectData = [
//   {
//     id: 1,
//     title: "팀프로젝트 - 대전세잔직업전문학교 홈페이지 리뉴얼",
//     intro: "홈페이지 리뉴얼 프로젝트 개요",
//     period: "2025.08.18 - 2025.08.29",
//     process: "개발 과정에서 겪은 문제와 해결 방법...",
//     stack: "HTML5, CSS3, Javascript",
//     result: "결과물(스크린샷, 링크)",
//     link: "https://renewal-cezanne.vercel.app/",
//     insight: "얻은 경험과 배운 점",
//     github: "https://github.com/JeongJae1203/renewal-cezanne",
//     design: "#",
//     plan: "#",
//   },
//   /* 
//   프로젝트 명 : 대전세잔직업전문학교 Renewal

//     프로젝트 기간 : 2025.08.18 - 2025.08.29

//     팀 구성원 : 4명

//     배포 링크 : https://renewal-cezanne.vercel.app/

//     기술 스택

//     Javascript
//     HTML5
//     CSS3
//     빌드 : parcel bundler 배포: Vercel
    
//   */
//   {
//     id: 2,
//     title: "팀프로젝트 - 세잔직업전문학교 홈페이지 리뉴얼",
//     intro: "홈페이지 리뉴얼 프로젝트 개요",
//     period: "2025.00.00 ~ 2025.00.00",
//     process: "개발 과정에서 겪은 문제와 해결 방법...",
//     stack: "React, SCSS, Firebase",
//     result: "결과물(스크린샷, 링크)",
//     insight: "얻은 경험과 배운 점",
//     github: "#",
//     design: "#",
//     plan: "#",
//   },
//   {
//     id: 3,
//     title: "팀프로젝트 - 세잔직업전문학교 홈페이지 리뉴얼",
//     intro: "홈페이지 리뉴얼 프로젝트 개요",
//     period: "2025.00.00 ~ 2025.00.00",
//     process: "개발 과정에서 겪은 문제와 해결 방법...",
//     stack: "React, SCSS, Firebase",
//     result: "결과물(스크린샷, 링크)",
//     insight: "얻은 경험과 배운 점",
//     github: "#",
//     design: "#",
//     plan: "#",
//   },
//   {
//     id: 4,
//     title: "팀프로젝트 - 세잔직업전문학교 홈페이지 리뉴얼",
//     intro: "홈페이지 리뉴얼 프로젝트 개요",
//     period: "2025.00.00 ~ 2025.00.00",
//     process: "개발 과정에서 겪은 문제와 해결 방법...",
//     stack: "React, SCSS, Firebase",
//     result: "결과물(스크린샷, 링크)",
//     insight: "얻은 경험과 배운 점",
//     github: "#",
//     design: "#",
//     plan: "#",
//   },
// ];

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   return (
//     <section id="projects" className="projects">
//       <div className="inner">
//         <h2>Projects</h2>
//         <div className="project-list">
//           {projectData.map((proj) => (
//             <div key={proj.id} className="project-card">
//               <h3>{proj.title}</h3>
//               <img src="" alt="프로젝트 이미지 사진 다 다르게 들어가야 되는데..." />
//               <p>{proj.intro}</p>
//               <div className="btn">
//               <button 
//                 className="white-btn" 
//                 onClick={() => setSelectedProject(proj)}
//               >
//                 상세보기
//               </button>
//               <button 
//                 className="blue-btn" 
//                 onClick={() => setSelectedProject(proj)}
//               >
//                 바로가기
//               </button>
//               </div>
//               {/* 모달창 열었을 때 뒷 배경 스크롤 안되게 해아하나? */}
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


// 프로젝트 따로

import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import "./Projects.scss";

const projectData = [
  {
    id: 1,
    title: "팀프로젝트 - 대전세잔직업전문학교 홈페이지 리뉴얼",
    intro: "홈페이지 리뉴얼 프로젝트 소개 빌드는 parcel bundler 배포는 Vercel", //  두 줄 정도
    period: "2025.08.18 - 2025.08.29",
    process: "개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...개발 과정에서 겪은 문제와 해결 방법...",
    stack: "HTML5, CSS3, Javascript",
    result: "/images/project1_.png", // 결과물(스크린샷, 링크) 
    link: "https://renewal-cezanne.vercel.app/",
    insight: "얻은 경험과 배운 점",
    github: "https://github.com/JeongJae1203/renewal-cezanne",
    design: "#",
    plan: "#",
    image: "/images/project1.png",
  },
  {
    id: 2,
    title: "개인 프로젝트 - 날씨앱 리뉴얼(React 버전)",
    intro: "Firebase 기반 React 리뉴얼 프로젝트",
    period: "2025.09.01 - 2025.09.14",
    process: "컴포넌트화, 라우팅 구조 개선",
    stack: "React, SCSS, Firebase",
    result: "결과물(스크린샷, 링크)",
    insight: "React를 이용한 SPA 구조 이해",
    github: "#",
    design: "#",
    plan: "#",
    image: "/images/project2.png",
  },
  {
    id: 3,
    title: "개인 프로젝트 - 랜딩 페이지 제작",
    intro: "디자인을 바탕으로 반응형 웹 페이지 구현",
    period: "2025.07.10 - 2025.07.17",
    process: "미디어쿼리 설계, 스크롤 인터랙션 적용",
    stack: "HTML, SCSS, JavaScript",
    result: "결과물(스크린샷, 링크)",
    insight: "시맨틱 마크업과 CSS 구조화 경험",
    github: "#",
    design: "#",
    plan: "#",
    image: "/images/project3.png",
  },
  {
    id: 4,
    title: "개인 프로젝트 - 포트폴리오 사이트",
    intro: "React 기반 개인 포트폴리오 구축",
    period: "2025.10 ~ 진행 중",
    process: "구성, UI/UX, 반응형 설계",
    stack: "React, SCSS",
    result: "개인 포트폴리오 웹사이트",
    insight: "지속적인 개선 및 관리 경험",
    github: "#",
    design: "#",
    plan: "#",
    image: "/images/project4.png",
  },
];

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

              <div className="btn">
                <button
                  className="white-btn"
                  onClick={() => setSelectedProject(proj)}
                >
                  상세보기
                </button>

                {/* 바로가기 버튼 클릭 시 새 탭으로 이동 */}
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

      {/* ✅ 모달 연결 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
