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
      기존 사이트의 복잡한 구조와 비일관된 디자인을 개선하기 위해 진행된 팀 프로젝트입니다.|n
      사용자 친화적인 UI와 반응형 웹을 기반으로 접근성과 <strong>시각적 일관성</strong>을 강화했습니다.|n
      주요 콘텐츠를 직관적으로 재배치하여 <strong>브랜딩 중심의 웹사이트</strong>로 개선했습니다.
    `,
    process: `
      <span>서브 레이아웃 개발</span> — 페이지 공통 구조 및 반응형 레이아웃 구성|n
      <span>소개 페이지 구현</span> — 연혁·비전·시설정보 통합, Gsap ScrollMagic 인터랙션 적용, Swiper 슬라이드 구현|n
      <span>포트폴리오 페이지</span> — 탭 메뉴 / 리스트 / 검색 / 상세 보기 기능 개발
    `,
    stack: `
      <span>Frontend</span> — HTML5, CSS3, SCSS, JavaScript|n
      <span>Library</span> — Swiper.js, Gsap ScrollMagic|n
      <span>Tools</span> — Figma, GitHub, Vercel|n
      💡 <span>주요 기능</span> — 스크롤 애니메이션, 이미지 슬라이드, 탭·검색·상세 전환
    `,
    insight: `
      <strong>UI 설계와 퍼블리싱 효율화</strong>를 실무 환경에서 경험하며,|n
      인터랙션 중심 페이지 구성과 팀 단위 협업의 프로세스를 익혔습니다.|n
      공통 레이아웃을 통한 재사용성과 유지보수성의 중요성을 체감했습니다.
    `,
    github: "https://github.com/JeongJae1203/renewal-cezanne",
    design: "project1_design.pdf",
    plan: "project1_plan.pdf",
    link: "https://renewal-cezanne.vercel.app/",
    images: [
      "project1_main.png",
      "project1_detail1.png",
      "project1_detail2.png",
      "project1_detail3.png",
    ],
  },
  {
    id: 2,
    titleMain: "개인 프로젝트",
    titleSub: "포트폴리오 사이트 제작",
    period: "2025.10 ~ 진행 중",
    introShort: `
      React와 SCSS 기반의 개인 포트폴리오 웹사이트로, 
      반응형 레이아웃과 부드러운 인터랙션을 구현했습니다.
    `,
    intro: `
      React 컴포넌트 구조를 기반으로 한 <strong>개인 포트폴리오 사이트</strong>입니다.|n
      Intersection Observer를 활용해 스크롤 시 자연스러운 섹션 전환을 구현하고,|n
      모달 상세 보기와 이미지 확대 기능 등 UI 상호작용을 강화했습니다.
    `,
    process: `
      <span>컴포넌트 설계</span> — 재사용성과 유지보수성 고려한 구조 설계|n
      <span>SCSS 구조화</span> — 변수, 믹스인, 반응형 설정 통합 관리|n
      <span>애니메이션</span> — Intersection Observer 기반 등장 모션|n
      <span>배포</span> — Vercel 자동화 파이프라인 구축
    `,
    stack: `
      <span>Frontend</span> — React, SCSS, JavaScript|n
      <span>Deployment</span> — Vercel|n
      💡 <span>주요 기능</span> — 모달, 이미지 확대, 스크롤 전환 애니메이션
    `,
    insight: `
      <strong>개인 작업 환경에서의 전체 개발 프로세스</strong>를 익히며,|n
      구성 요소 분리, 상태 관리, 배포 자동화 등 웹 개발 전 과정을 경험했습니다.|n
      시각적 완성도와 UX를 함께 고려한 설계 방식을 확립했습니다.
    `,
    github: "#",
    design: "#",
    plan: "#",
    link: "https://your-portfolio.vercel.app/",
    images: ["project2_main.png", "project2_detail1.png"],
  },
  {
    id: 3,
    titleMain: "팀 프로젝트",
    titleSub: "대전 빵지도 사이트 제작",
    period: "2025.07.10 - 2025.07.17",
    introShort: `
      대전 지역 빵집 정보를 빵 메뉴 중심으로 탐색할 수 있는 웹사이트입니다.
    `,
    intro: `
      <strong>대전 지역의 빵집 데이터를 기반</strong>으로 제작한 탐색형 웹 서비스입니다.|n
      사용자가 빵 이름으로 검색하면, 해당 빵을 판매하는 매장을 확인할 수 있고,|n
      찜 기능을 통해 개인 맞춤형 즐겨찾기 리스트를 관리할 수 있습니다.
    `,
    process: `
      <span>데이터 설계</span> — JSON 기반 매장 및 빵 데이터 구조화|n
      <span>검색 기능</span> — 실시간 키워드 필터링 구현|n
      <span>찜 기능</span> — LocalStorage를 이용한 사용자 데이터 저장|n
      <span>UI 구현</span> — 반응형 리스트, 상세 페이지 연동
    `,
    stack: `
      <span>Frontend</span> — HTML5, SCSS, JavaScript|n
      <span>Library</span> — None (순수 JS)|n
      💡 <span>주요 기능</span> — 검색, 찜(즐겨찾기), 반응형 리스트
    `,
    insight: `
      짧은 기간 동안의 팀 프로젝트로, <strong>데이터 처리와 UI 구성</strong>을 동시에 경험했습니다.|n
      협업 기반 일정 관리와 분업 구조를 통해 실무형 협업 감각을 키웠습니다.
    `,
    github: "#",
    design: "#",
    plan: "#",
    link: "#",
    images: ["project3_main.png", "project3_detail.png"],
  },
  {
    id: 4,
    titleMain: "개인 프로젝트",
    titleSub: "날씨앱 리뉴얼 (Vue 버전)",
    period: "2025.09.01 - 2025.09.14",
    introShort: `
      React로 제작했던 날씨 앱을 Vue.js 기반으로 리뉴얼하며, 
      사용자별 즐겨찾기 및 UI 개선을 추가했습니다.
    `,
    intro: `
      기존 React 버전의 날씨 앱을 <strong>Vue.js로 리팩토링</strong>한 프로젝트입니다.|n
      OpenWeather API를 통해 실시간 데이터를 받아오고,|n
      즐겨찾기 저장 기능과 카드형 날씨 UI를 구성했습니다.
    `,
    process: `
      <span>리팩토링</span> — React → Vue 마이그레이션|n
      <span>API 관리</span> — Axios 기반 데이터 처리 최적화|n
      <span>기능 확장</span> — 즐겨찾기 저장, 데이터 캐싱|n
      <span>UI 개선</span> — 카드형 디자인, 반응형 구성
    `,
    stack: `
      <span>Frontend</span> — Vue.js, SCSS, JavaScript|n
      <span>API</span> — OpenWeather API|n
      <span>Deployment</span> — Vercel|n
      💡 <span>주요 기능</span> — 실시간 날씨, 즐겨찾기, 반응형 UI
    `,
    insight: `
      React와 Vue의 <strong>컴포넌트 구조 및 반응형 시스템</strong> 차이를 직접 비교하며,|n
      데이터 흐름과 상태 관리의 중요성을 실무적으로 이해했습니다.
    `,
    github: "#",
    design: "#",
    plan: "#",
    link: "#",
    images: ["project4_main.png", "project4_detail.png"],
  },
];
