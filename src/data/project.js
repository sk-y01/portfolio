export const projectData = [
  {
    id: 1,
    title: "팀프로젝트 |n 대전세잔직업전문학교 홈페이지 리뉴얼",
    intro: "대전세잔직업전문학교 홈페이지 리뉴얼을 팀 프로젝트로 진행했습니다. |n 기존의 포인트 색상과 구조를 참고하여 중복되는 내용은 일관성 있게 진행하려 노력했습니다.", //  두 줄 정도
    period: "2025.08.18 - 2025.08.29",
    process: "개발 과정에서 겪은 문제와 해결 방법...|n",
    stack: "HTML5, CSS3, Javascript 를 사용했고, build는 parcel bundler, Vercel로 배포했습니다.",
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


// 이미지 + 파일 + 줄바꿈/강조 적용
// src/data/project.js
// src/assets/images 와 src/assets/files 에 실제 파일을 넣어주세요.
// import project1Thumb from "../assets/images/project1_thumb.png";
// import project1Img1 from "../assets/images/project1_1.png";
// import project1Img2 from "../assets/images/project1_2.png";
// import project2Thumb from "../assets/images/project2_thumb.png";
// import project3Thumb from "../assets/images/project3_thumb.png";
// import project4Thumb from "../assets/images/project4_thumb.png";

// import planFile from "../assets/files/project1_plan.xlsx";
// import designFile from "../assets/files/project1_design.pptx";
// import hwpFile from "../assets/files/project1_doc.hwp";
// import wordFile from "../assets/files/project1_doc.docx";
// import pdfFile from "../assets/files/project1_doc.pdf";

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
//     images: [project1Img1, project1Img2], // 여러 장 가능
//     thumbnail: project1Thumb, // 썸네일
//     link: "https://renewal-cezanne.vercel.app/",
//     insight: "<strong>얻은 경험과 배운 점</strong>",
//     github: "https://github.com/JeongJae1203/renewal-cezanne",
//     files: [
//       { name: "기능정의서 (PPT)", url: designFile },
//       { name: "화면설계서 (Excel)", url: planFile },
//       { name: "보고서 (HWP)", url: hwpFile },
//       { name: "문서 (Word)", url: wordFile },
//       { name: "PDF 결과물", url: pdfFile },
//     ],
//   },
//   {
//     id: 2,
//     title: "개인 프로젝트 - 날씨앱 리뉴얼(React 버전)",
//     intro: "Firebase 기반 React 리뉴얼 프로젝트",
//     period: "2025.09.01 - 2025.09.14",
//     process: "컴포넌트화, 라우팅 구조 개선",
//     stack: "React, SCSS, Firebase",
//     images: [project2Thumb],
//     thumbnail: project2Thumb,
//     insight: "React를 이용한 SPA 구조 이해",
//     github: "#",
//     files: [],
//   },
//   {
//     id: 3,
//     title: "개인 프로젝트 - 랜딩 페이지 제작",
//     intro: "디자인을 바탕으로 반응형 웹 페이지 구현",
//     period: "2025.07.10 - 2025.07.17",
//     process: "미디어쿼리 설계, 스크롤 인터랙션 적용",
//     stack: "HTML, SCSS, JavaScript",
//     images: [project3Thumb],
//     thumbnail: project3Thumb,
//     insight: "시맨틱 마크업과 CSS 구조화 경험",
//     github: "#",
//     files: [],
//   },
//   {
//     id: 4,
//     title: "개인 프로젝트 - 포트폴리오 사이트",
//     intro: "React 기반 개인 포트폴리오 구축",
//     period: "2025.10 ~ 진행 중",
//     process: "구성, UI/UX, 반응형 설계",
//     stack: "React, SCSS",
//     images: [project4Thumb],
//     thumbnail: project4Thumb,
//     insight: "지속적인 개선 및 관리 경험",
//     github: "#",
//     files: [],
//   },
// ];