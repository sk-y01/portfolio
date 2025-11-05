# 포트폴리오

## 목차
1. [React 설치](#React-설치)
1. [scss 설치](#scss-설치)
1. [React Icons 사용법](#React-Icons-사용법)
1. [해야할 일](#해야할-일)
1. [호버효과 참고](#호버효과-참고)
1. [해결한 일](#해결한-일)
1. [고민](#고민)
1. [수정할 내용](#수정할-내용)
1. [버전관리](#버전관리)

git status 필수 

## React 설치
```shell
haneul_portfolio>npm create vite@latest .

Select a framework:
|  React
|
o  Select a variant:
|  JavaScript
|
o  Use rolldown-vite (Experimental)?:
|  No
|
o  Install with npm and start now?
|  No
|
o  Scaffolding project in C:\haneul_portfolio...
|
—  Done. Now run:

  npm install
  npm run dev


C:\haneul_portfolio>npm i
```

## scss 설치
terminal 창에서 npm i sass sass-loader

## React Icons 사용법
(스킬 아이콘)

### 설치
```bash
npm install react-icons

사용: import { FaReact } from "react-icons/fa";

삭제: npm uninstall react-icons
```
- 설치하면 package.json에 자동으로 "react-icons" 항목이 추가되고,
삭제하면 항목 제거

---

## 해야할 일
- ~~모달창 화면 정의서 등 파일 배포하니까 안나옴~~
- 인터섹션 옵저버? 하니까 모달창이 섹센 가운데로 나와서 첫 번째 프로젝트 누르면 스크롤 내려야 모달창이 나옴

- ~~프로젝트 1번 거의 완성~~
  - ~~모달에서 이미지 자세히보기 할 때 화살표 가운데로 맞추기~~
  - ~~반응형~~
  - 가독성...
- 나머지 프로젝트들도...

~~html 9px, 8px로 폰트 사이즈 수정 - 너무 작아져서 하나씩 직접 수정 모바일 기준으로 잡아둠~~
// 폰트(pc)
h1 { font-size: 5.4rem; font-weight: 600; line-height: 1.4; margin-bottom: 2.4rem; }
h2 { font-size: 4.4rem; font-weight: 500; line-height: 1.4; }
h3 { font-size: 3.6rem; font-weight: 500; line-height: 1.5; /* margin-bottom: 3rem; */ }
h4 { font-size: 2.8rem; font-weight: 500; line-height: 1.5; /* margin-bottom: 1.2rem; */ }
h5 { font-size: 2.4rem; font-weight: 500; line-height: 1.5; /* margin-bottom: 1rem; */ }
h6 { font-size: 2rem;  font-weight: 500; line-height: 1.4; /* margin-bottom: 0.8rem; */ }

- ~~폰트 적용~~
1. **모달창 수정/ 프로젝트 수정**
- `프로젝트 수정`
  - ~~팀플/갠플(언더라인)이랑 프로젝트명 분류 + 색상 바꾸기~~
    - ~~줄바꿈 |n json 파일에 넣어두고 프로젝트 jsx에서 split로 수정(강조도 가능)~~ ~~utils에 빼둠~~
    - ~~이미지 넣기 public에서 하지말고...~~ ~~src 로 수정~~
- ~~모달 열면 배경 스크롤 x~~
- ~~모달창 내용 채우기~~
  - 버튼들 깃허브, 엑셀, 파워포인트 아이콘으로 수정?>> 고민
  - ~~결과물(이미지)~~
- `이미지 크기 고정`
- ~~이미지 준비중입니다라고 써있는 이미지를 들어갈 이미지가 없을 때 대체하기~~

- ~~스크롤 버튼 사이즈 키우기~~
-~~ skills 디자인 수정(태그...)~~
- ~~데스크탑 사이즈 고려(폰트 등)~~
- ~~about 모바일 세로로 표 정렬, 데스트탑 등 h2 폰트 사이즈~~

2. 모바일에서 `어바웃 페이지` 표-내용부분 data영역 침범(맨 아랫줄만 따로 태그로 묶어서 처리해야함)

3. ~~`Contact`정리~~
- ~~모바일 상태일 때 메뉴 위치 수정~~
- ~~모바일 이상일 때 text랑 메뉴 같은 라인으로 수정~~
- ~~푸터 맨 아래로 내리기~~
- ~~메뉴들 아이콘 기준 정리(왼쪽 정렬)~~

4. ~~`공통 버튼` - index.scss안에 있음~~

5. ~~home 에서 마우스 클릭하면 인트로로 가야하는데 어바웃으로 감~~

6. ~~인트로 채우기 -> 카톡에 있음~~

7. ~~Home 화면 bg에 곡선 고민~~

8. 링크들 다 연결
- ~~이메일 연결함~~
- ~~코멘트~~
- ~~블로그~~
- ~~pdf 등~~
- 이력서 다운받아지게 할까

~~1. 인터섹션 옵저버 스크롤하면 아래 섹션이 위로 올리오면서 위에 있던 섹션이 사라지는 형태~~

1. 블로그 작성
- width: 100%;  !!!!!✅ 로고랑 맞춤 flex-direction: column :: 하면 마진 오토가 된다..?

1. ~~코멘트 설문지 수정(지금은 퀴즈처럼 점수 나오는데 설문지로 변경)~~

~~반응형 max min, 스킬 넣고~~, ~~프젝 넣고(이미지 똑바로) ~~~~어바웃 정리,~~ ~~홈 어바웃이랑 정렬맞추고 싶은데..~~


- **반응형!!!**
```
// 더 작은 모바일 (500px 미만)
// 모바일 (768px 미만)
// 테블릿 (1100px)
// 노트북 (1400px) 1440px 으로 수정
// 데스크탑 (1920px)
```
  - ~~메인 페이지(home) 아래쪽이랑 왼쪽정렬 맞추고 싶은데..~~ ~~w100%~~
  - ~~Contact 이거 모양 어떡하지~~
  - ~~about 부분 반응형~~
- ~~`스킬` 나누기(세개로 나누고 해시태그는 3~4개 정도) 뭐 배웠지(Vercel, vite, 제이쿼리 등 추가)~~
  - 스킬 태그 걸기...내 능력만...
  -  word-~~break: keep-all; // 단어 기준으로 줄바꿈 이거 때문에 #만 첫줄에 두고 다 내려가는 듯~~
    - ~~import { DiNodejs } from "react-icons/di";<DiNodejs />~~
- ~~탑버튼 사이즈 키우기~~
- `버튼` ~~그림자말고~~ 밑줄 생기게 하는걸로... `가로세로중에 고민` ~~푸터도 통일(호버효과) 푸터는 해결~~
- ~~`메뉴` 그대로~~
### 호버효과 참고
```html
 <!-- start -->
  <div class="back color-6">
    <div class="row columns">
      <h3>Effect 46</h3>
      <ul class="menu align-center expanded text-center SMN_effect-46">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Gallery</a></li>
        <li><a href="">Notes</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  </div>
  <!-- // end -->
```
```css
/*
---------------------------------------
hover effect 46
---------------------------------------
*/

.SMN_effect-46 a {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.SMN_effect-46 a:before {
  content: "";
  position: absolute;
  z-index: -1;
  height: 3px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.SMN_effect-46 a:hover:before, .SMN_effect-46 a:focus:before, .SMN_effect-46 a:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
```

## 해결한 일
- ~~소개페이지 완성~~ ~~`어바웃` 영어 빼고~~, ~~탭메뉴 작게 줄이기~~
- ~~모달창에서 깃허브버튼 새창으로 열기는 되는데 포트폴리오 사이트도 바뀐다...~~ ~~해결 블링크 빼먹음;;; 다른 방법있나~~

- ~~`프로젝트` 팀플 넣기~~
  - ~~상세보기는 화이트버튼, 그 옆에 데모?블루버튼~~
  - ~~상세 페이지(x아이콘 크게)~~

---
### 고민

- ~~공통적으로 한글로 할지?~~ 이상함
~~<!-- - 홈 외에 타이틀 소제목 가운데로 놓을지? 안써도 되는거 아닌가, 없으니까 이상하네^ -->~~
- ~~푸터 Contact 안에 합치기~~

- ~~`이미지 넣는 방법이 따로 있음ㅜ 깃허브 스터디 노트s 1016_오후 참고..`~~

---

## 수정할 내용

### index.scss 
- ~~빨간줄 두개랑,~~
- 반응형, 
- 터미널창 권고 보고 수정

### Navbar.scss
- ~~상단메뉴 한글? 영어?(한글로 하니까 이상함;;;)~~
- ~~.logo = 이미지인데 이름을 쓸까, 색상은? 파비콘처럼 ai로 그릴까 고민~~ 이름을 로고인척 썼음
- ~~메뉴 호버시 파란색이라서 안보이는데 이부분 text-shadow로 안되나? 안됐음~~ ~~밑줄 하이라이트로 바꾸자... 아직 안바꿈 안하는게 깔끔한가 피드백에서 안나옴 색상 바꿔서 잘보임~~
---

## 버전관리

1) 마지막 숫자 : v. 1.1.0
- 기획서의 큰 틀은 유지한채 자잘한 오류, 누락 사항, 단순 오타를 수정할 때 숫자가 올라간다. 예를들어 기존 기획서에 얼럿이 누락되어서 추가했다면 v. 1.1.1 로 업그레이드 된다.

2) 두번째 숫자 : v. 1.1.0
- 기존 내용과 기능은 유지한 채 새로운 기능이 추가되었을 때 수정된다. 예를들어 메모 애플리케이션에 메모 폴더링 기능을 추가한다면 v. 1.2.0 로 업그레이드 된다.

3) 첫번째 숫자 : v. 1.1.0
- 이전 버전과 호환되지 않는 새로운 큰 변화를 말한다. 가령 Windows 7에서 10로 업그레이드된 정도의 변화이다.

이미지 파일 저장 구조
``` 
src/
├── assets/
│   └── images/
│       ├── no_image.png
│       ├── project1_thumb.png
│       ├── project1_1.png
│       ├── project1_2.png
│       ├── project2_thumb.png
│       ├── project3_thumb.png
│       ├── project4_thumb.png
│       └── ...
├── components/
│   └── ProjectModal.jsx
├── sections/
│   └── Projects.jsx
├── data/
│   └── project.js
└── utils/
    ├── formatText.js
    ├── openLink.js
    ├── scrollTo.js
    └── index.js

public/
├── project1_plan.xlsx
├── project1_design.pptx
├── project1_doc.hwp
├── project1_doc.docx
└── project1_doc.pdf

```

### 코드 수정 전 (프로젝트)
```jsx
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
```
### 모달 수정전 (아이콘 없음)

```jsx
import "./ProjectModal.scss";
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { formatText } from "../utils/formatText";
import noImage from "../assets/images/no-image.png";

const ProjectModal = ({ project, onClose }) => {
  // ✅ 모달 열릴 때 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // ✅ 파일/링크 열기 (Vite 기준 수정)
  const openLink = (url) => {
    if (url && url !== "#") {
      // 절대 URL이면 그대로 열고, 아니면 public 파일로 처리
      const finalUrl = url.startsWith("http") ? url : `/${url}`;
      window.open(finalUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("파일 및 링크 준비 중입니다! 🙂");
    }
  };

  // ✅ assets/images 폴더에서 파일명만으로 이미지 불러오기
  const getImage = (fileName) => {
    try {
      return new URL(`../assets/images/${fileName}`, import.meta.url).href;
    } catch {
      return noImage;
    }
  };

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <button className="closeBtn" onClick={onClose}>
          <CgClose />
        </button>

        {/* 헤더 */}
        <div className="modal-header">
          <h2 className="project-type">{project.titleMain}</h2>
          <h3 className="modal-title">{project.titleSub}</h3>
        </div>

        {/* 파일 링크 */}
        <div className="modal-files">
          {project.github && (
            <a onClick={() => openLink(project.github)}>GitHub</a>
          )}
          {project.design && (
            <a onClick={() => openLink(project.design)}>기능 정의서</a>
          )}
          {project.plan && (
            <a onClick={() => openLink(project.plan)}>화면 설계서</a>
          )}
        </div>

        {/* 본문 */}
        <div className="modal-body">
          <p className="period">
            <span>기간: </span>
            {project.period}
          </p>

          <h4>1. 프로젝트 소개</h4>
          <p dangerouslySetInnerHTML={{ __html: formatText(project.intro) }} />

          <h4>2. 개발 과정</h4>
          <p dangerouslySetInnerHTML={{ __html: formatText(project.process) }} />

          <h4>3. 기술 스택</h4>
          <p dangerouslySetInnerHTML={{ __html: formatText(project.stack) }} />

          <h4>4. 결과물</h4>
          <img
            src={getImage(project.image)}
            alt={`${project.titleSub || "프로젝트"} 상세 이미지`}
            className="project-image"
            onError={(e) => (e.target.src = noImage)}
          />

          <h4>5. 인사이트</h4>
          <p dangerouslySetInnerHTML={{ __html: formatText(project.insight) }} />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

```
### 모달 수정전 (아이콘 있음)
```jsx
import "./ProjectModal.scss";
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { formatText } from "../utils/formatText";
import noImage from "../assets/images/no-image.png";

const ProjectModal = ({ project, onClose }) => {
  // ✅ 모달 열릴 때 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // ✅ 파일/링크 열기
  const openLink = (url) => {
    if (url && url !== "#") {
      const finalUrl = url.startsWith("http") ? url : `/${url}`;
      window.open(finalUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("파일 및 링크 준비 중입니다! 🙂");
    }
  };

  // ✅ assets/images 폴더에서 파일명만으로 이미지 불러오기
  const getImage = (fileName) => {
    try {
      return new URL(`../assets/images/${fileName}`, import.meta.url).href;
    } catch {
      return noImage;
    }
  };

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <button className="closeBtn" onClick={onClose}>
          <CgClose />
        </button>

        {/* 헤더 */}
        <div className="modal-header">
          <h2 className="project-type">{project.titleMain}</h2>
          <h3 className="modal-title">{project.titleSub}</h3>
        </div>

        {/* 파일 링크 */}
        <div className="modal-files">
          {project.github && (
            <a
              onClick={() => openLink(project.github)}
              className="file-link"
            >
              <FaGithub className="file-icon" /> GitHub
            </a>
          )}
          {project.design && (
            <a
              onClick={() => openLink(project.design)}
              className="file-link"
            >
              <HiOutlineDocumentText className="file-icon" /> 기능 정의서
            </a>
          )}
          {project.plan && (
            <a
              onClick={() => openLink(project.plan)}
              className="file-link"
            >
              <HiOutlineDocumentText className="file-icon" /> 화면 설계서
            </a>
          )}
        </div>

        {/* 본문 */}
        <div className="modal-body">
          <p className="period">
            <span>기간: </span>
            {project.period}
          </p>

          <h4>1. 프로젝트 소개</h4>
          <p dangerouslySetInnerHTML={{ __html: formatText(project.intro) }} />

          <h4>2. 개발 과정</h4>
          <p dangerouslySetInnerHTML={{ __html: formatText(project.process) }} />

          <h4>3. 기술 스택</h4>
          <p dangerouslySetInnerHTML={{ __html: formatText(project.stack) }} />

          <h4>4. 결과물</h4>
          <img
            src={getImage(project.result)}
            alt={`${project.titleSub || "프로젝트"} 상세 이미지`}
            className="project-image"
            onError={(e) => (e.target.src = noImage)}
          />

          <h4>5. 인사이트</h4>
          <p dangerouslySetInnerHTML={{ __html: formatText(project.insight) }} />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

```

### 모달 scss 수정전
```scss
@use '../styles/colors' as *;
@use '../styles/variables' as *;

.project-type {
  color: $color-blue;
}
h3 {
  margin-bottom: 2rem;
}
h4 {
  margin: 2rem 0 1.5rem;
}


.modal-overlay {
  position: fixed;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: $color-white;
  width: 70%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 2rem 4rem 2rem 3rem;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease;

  @media (max-width: $breakpoint-tablet) {
    width: 90%;
    padding: 1.5rem;
  }
}

.closeBtn {
  position: absolute;
  top: 3rem;
  right: 2rem;
  background: none;
  border: none;
  font-size: 2.4rem;
  color: $color-dark-sub;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: $color-blue;
    transform: scale(1.1);
  }
}

// .modal-title {
// }

.modal-files {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;

  a {
    background: $color-blue;
    color: $color-white;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    font-size: $fs-14;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem; // 아이콘과 텍스트 간격
    cursor: pointer; // ✅ 마우스 커서 변경
    transition: all 0.3s ease;

    &:hover {
      background: darken($color-blue, 10%);
      transform: translateY(-2px);
    }

    .file-icon {
      font-size: 1.6rem;
    }
  }
}

.modal-body {
  .period { /* 기간 */
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0rem;
    margin-top: 2rem;
    color: $color-dark;
  }

  p {
    margin-top: 0.8rem;
    color: $color-dark-sub;
  }
}

/* 모달 등장 애니메이션 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
