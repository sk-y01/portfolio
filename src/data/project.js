export const projectData = [
  {
    id: 1,
    titleMain: "팀 프로젝트",
    titleSub: "대전세잔직업전문학교 홈페이지 리뉴얼",
    period: "2025.08.18 - 2025.08.29",
    introShort: `
      대전세잔직업전문학교 홈페이지 리뉴얼 팀 프로젝트로, 
      사용자 친화적이고 반응형 웹 구조를 중심으로 사이트를 재구성했습니다.
    `,

    intro: `
      대전세잔직업전문학교 홈페이지 리뉴얼은 기존 사이트의 디자인과 복잡한 정보 구조를 개선하기 위해 진행된 팀 프로젝트입니다.|n
      사용자 친화적인 UI와 반응형 웹 구조를 통해 접근성과 <strong>시각적 일관성을 강화</strong>하는 것을 목표로 했습니다.|n
      전체 페이지의 디자인 시스템을 통일하고, 주요 콘텐츠를 직관적으로 재배치하여 웹사이트 완성도를 높였습니다.
    `,

    process: `
      <span>서브 레이아웃 개발</span> — 페이지 공통 구조 및 반응형 레이아웃 구성|n
      <span>소개 페이지 개발</span> — 연혁·비전·시설정보 섹션 통합 구현, Gsap ScrollMagic 인터랙션 적용, Swiper를 활용한 이미지 슬라이드 구현|n
      <span>포트폴리오 페이지</span> — 탭 메뉴 / 리스트 / 검색 / 상세 페이지 구조 설계 및 구현|n
    `,

    stack: `
      <span>Frontend</span> — HTML5, CSS3, SCSS, JavaScript|n
      <span>Library</span> — Swiper.js, Gsap ScrollMagic|n
      <span>Tools</span> — Figma, GitHub, Vercel|n
      🛠 <span>주요 기능</span> — 인터랙션 스크롤 애니메이션, 이미지 슬라이드, 탭/검색/상세 전환 기능 
    `, // ⚙️

    insight: `
      실제 프로젝트를 통해 <strong>UI 구조 설계와 퍼블리싱의 효율성</strong>을 배우고, 
      Gsap과 Swiper를 활용한 <strong>인터랙티브 페이지 구성 능력</strong>을 키웠습니다.|n
      또한 공통 레이아웃을 기반으로 여러 페이지를 재사용하면서 
      <strong>컴포넌트화와 유지보수성</strong>의 중요성을 체감했습니다.
    `,

    github: "https://github.com/JeongJae1203/renewal-cezanne",
    design: "project1_design.pdf",
    plan: "project1_plan.pdf",
    link: "https://renewal-cezanne.vercel.app/",
    images: [
      "project1_main.png",   // 썸네일 대표 이미지
      "project1_detail1.png", // 상세페이지 1
      "project1_detail2.png",
      "project1_detail3.png",
    ],
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
    result: "project2_main.png",
    insight: "<strong>지속적인 개선과 유지보수 경험을 쌓고 있습니다.</strong>",
    
    github: "#",
    design: "#",
    plan: "#",
    images: [
      "project2_main.png",   // 썸네일 대표 이미지
    ],
  },
  {
    id: 3,
    titleMain: "팀 프로젝트",
    titleSub: "대전 빵지도 사이트 제작",
    intro:
      "대전에 있는 카페 및 빵집의 빵 메뉴를 좀 더 편하게 보기 위해 만들게 된 웹사이트 입니다. ",
    period: "2025.07.10 - 2025.07.17",
    process:
      "원하는 빵을 검색하면 그 빵을 판매하는 빵집의 상호가 나오고 사용자가 찜을 해두고, 개인적으로 관리할 수 있는 사이트 입니다. |n 시맨틱 마크업 → SCSS 모듈화 → Intersection Observer로 애니메이션 구현.",
    stack: "HTML, SCSS, JavaScript",
    result: "project3_main.png",
    insight: "<strong>시맨틱 마크업과 CSS 구조화의 중요성을 익혔습니다.</strong>",
    github: "#",
    design: "#",
    plan: "#",
    image: "project3_detail.png",
  },
  {
    id: 4,
    titleMain: "개인 프로젝트",
    titleSub: "날씨앱 리뉴얼 (vue 버전)",
    intro:
      "스터디 때 React로 만들어 본 날씨앱을 vue 버전으로 리뉴얼했습니다.|n추가로 사용자별 즐겨찾기 기능을 구현했습니다.",
    period: "2025.09.01 - 2025.09.14",
    process:
      "컴포넌트 구조 설계 → vue 적용 → API 데이터 관리 개선.|n상태 관리와 props 전달 방식을 효율적으로 구성했습니다.",
    stack: "React, SCSS, Firebase",
    result: "project4_main.png",
    insight: "<strong>SPA 구조와 vue 컴포넌트화의 핵심을 이해했습니다.</strong>",
    github: "#",
    design: "#",
    plan: "#",
    image: "project4_detail.png",
  },
];


