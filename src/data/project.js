export const projectData = [
  {
    id: 1,
    titleMain: "팀프로젝트",
    titleSub: "대전세잔직업전문학교 홈페이지 리뉴얼",
    intro:
      "대전세잔직업전문학교 홈페이지 리뉴얼을 팀 프로젝트로 진행했습니다.|n기존의 포인트 색상과 구조를 참고하여 중복되는 내용은 일관성 있게 진행하려 노력했습니다.",
    period: "2025.08.18 - 2025.08.29",
    process: "개발 과정에서 겪은 문제와 해결 방법을 기록했습니다.|n",
    stack: "HTML5, CSS3, Javascript 를 사용했고, build는 parcel bundler, Vercel로 배포했습니다.",
    result: "/images/project1_main.png",
    link: "https://renewal-cezanne.vercel.app/",
    insight: "<strong>얻은 경험과 배운 점</strong>",
    github: "https://github.com/JeongJae1203/renewal-cezanne",
    design: "/project1_design.pptx",
    plan: "/project1_report.pdf",
    image: "/images/project1_detail.png",
  },
  {
    id: 2,
    titleMain: "개인 프로젝트",
    titleSub: "포트폴리오 사이트 제작",
    intro:
      "React와 SCSS를 기반으로 개인 포트폴리오 사이트를 구축했습니다.|n반응형과 인터랙션 중심의 구조를 설계했습니다.",
    period: "2025.10 ~ 진행 중",
    process:
      "컴포넌트 설계 → 라우팅 구성 → SCSS 컴포넌트 스타일링.|nGitHub Pages와 Vercel을 통한 배포 자동화.",
    stack: "React, SCSS",
    result: "/images/project4_main.png",
    insight: "<strong>지속적인 개선과 유지보수 경험을 쌓고 있습니다.</strong>",
    github: "#",
    design: "/project4_design.pptx",
    plan: "/project4_report.pdf",
    image: "/images/project4_detail.png",
  },
  {
    id: 3,
    titleMain: "개인 프로젝트",
    titleSub: "랜딩 페이지 제작",
    intro:
      "디자인 시안을 기반으로 한 반응형 웹 페이지를 제작했습니다.|n미디어쿼리와 스크롤 인터랙션을 적용했습니다.",
    period: "2025.07.10 - 2025.07.17",
    process:
      "시맨틱 마크업 → SCSS 모듈화 → Intersection Observer로 애니메이션 구현.",
    stack: "HTML, SCSS, JavaScript",
    result: "/images/project3_main.png",
    insight: "<strong>시맨틱 마크업과 CSS 구조화의 중요성을 익혔습니다.</strong>",
    github: "#",
    design: "/project3_design.pptx",
    plan: "/project3_report.pdf",
    image: "/images/project3_detail.png",
  },
  {
    id: 4,
    titleMain: "개인 프로젝트",
    titleSub: "날씨앱 리뉴얼 (React 버전)",
    intro:
      "기존 날씨앱을 React 기반으로 리뉴얼했습니다.|nFirebase를 이용해 데이터 저장 및 사용자별 즐겨찾기 기능을 구현했습니다.",
    period: "2025.09.01 - 2025.09.14",
    process:
      "컴포넌트 구조 설계 → Router 적용 → API 데이터 관리 개선.|n상태 관리와 props 전달 방식을 효율적으로 구성했습니다.",
    stack: "React, SCSS, Firebase",
    result: "/images/project2_main.png",
    insight: "<strong>SPA 구조와 React 컴포넌트화의 핵심을 이해했습니다.</strong>",
    github: "#",
    design: "/project2_design.pptx",
    plan: "/project2_report.pdf",
    image: "/images/project2_detail.png",
  },
];


// 이미지 + 파일 + 줄바꿈/강조 적용
// src/data/project.js
// src/assets/images 와 src/assets/files 에 실제 파일을 넣어주세요.
// import project1Thumb from "../assets/images/project1_thumb.png";
// import project1Img1 from "../assets/images/project1_1.png";
// import project1Img2 from "../assets/images/project1_2.png";
// import project2Thumb from "../assets/images/project2_thumb.png";
// import project3Thumb from "../assets/images/project3_thumb.png";
// import project4Thumb from "../assets/images/project4_thumb.png";

// import project1Thumb from "../assets/images/project1_thumb.png";
// import project1Img1 from "../assets/images/project1_1.png";
// import project1Img2 from "../assets/images/project1_2.png";
// import project2Thumb from "../assets/images/project2_thumb.png";
// import project3Thumb from "../assets/images/project3_thumb.png";
// import project4Thumb from "../assets/images/project4_thumb.png";

// export const projectData = [
//   {
//     id: 1,
//     title: "팀프로젝트 |n 대전세잔직업전문학교 홈페이지 리뉴얼",
//     intro:
//       "대전세잔직업전문학교 홈페이지 리뉴얼을 팀 프로젝트로 진행했습니다.|n기존의 포인트 색상과 구조를 참고하여 중복되는 내용은 일관성 있게 진행하려 노력했습니다.",
//     period: "2025.08.18 - 2025.08.29",
//     process: "개발 과정에서 겪은 문제와 해결 방법을 기록했습니다.|n",
//     stack:
//       "HTML5, CSS3, Javascript 를 사용했고, build는 parcel bundler, Vercel로 배포했습니다.",
//     result: project1Img1, // 대표 이미지
//     link: "https://renewal-cezanne.vercel.app/",
//     insight: "<strong>얻은 경험과 배운 점</strong>",
//     github: "https://github.com/JeongJae1203/renewal-cezanne",
//     design: "/project1_design.pptx", // public 폴더에 있는 파워포인트 파일
//     plan: "/project1_report.pdf", // public 폴더에 있는 PDF 파일
//     image: project1Img2, // 상세 이미지
//   },
//   {
//     id: 2,
//     title: "개인 프로젝트 - 날씨앱 리뉴얼(React 버전)",
//     intro: "Firebase 기반 React 리뉴얼 프로젝트",
//     period: "2025.09.01 - 2025.09.14",
//     process: "컴포넌트화, 라우팅 구조 개선",
//     stack: "React, SCSS, Firebase",
//     result: project2Thumb,
//     insight: "React를 이용한 SPA 구조 이해",
//     github: "#",
//     design: "/project2_design.pptx",
//     plan: "/project2_report.pdf",
//     image: project2Thumb,
//   },
//   {
//     id: 3,
//     title: "개인 프로젝트 - 랜딩 페이지 제작",
//     intro: "디자인을 바탕으로 반응형 웹 페이지 구현",
//     period: "2025.07.10 - 2025.07.17",
//     process: "미디어쿼리 설계, 스크롤 인터랙션 적용",
//     stack: "HTML, SCSS, JavaScript",
//     result: project3Thumb,
//     insight: "시맨틱 마크업과 CSS 구조화 경험",
//     github: "#",
//     design: "/project3_design.pptx",
//     plan: "/project3_report.pdf",
//     image: project3Thumb,
//   },
//   {
//     id: 4,
//     title: "개인 프로젝트 - 포트폴리오 사이트",
//     intro: "React 기반 개인 포트폴리오 구축",
//     period: "2025.10 ~ 진행 중",
//     process: "구성, UI/UX, 반응형 설계",
//     stack: "React, SCSS",
//     result: project4Thumb,
//     insight: "지속적인 개선 및 관리 경험",
//     github: "#",
//     design: "/project4_design.pptx",
//     plan: "/project4_report.pdf",
//     image: project4Thumb,
//   },
// ];
