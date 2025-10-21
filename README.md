# 포트폴리오

## 목차
1. [React 설치](#React-설치)
1. [scss 설치](#scss-설치)
1. [React Icons 사용법](#React-Icons-사용법)
1. [해야할 일](#해야할-일)
1. [해결한 일](#해결한-일)
1. [고민](#고민)
1. [수정할 내용](#수정할-내용)
1. [버전관리](#버전관리)


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
급한순서대로
반응형 max min 똑바로, 스킬 넣고, 프젝 넣고(이미지 똑바로) 어바웃 정리, 컨텐트정리, 홈 어바웃이랑 정렬맞추고 싶은데..
- **반응형!!!**
```
// 모바일 (768px 미만)
// 테블릿 (1100px)
// 노트북 (1400px)
// 데스크탑 (1920px)
```
  - 메인 페이지(home) 아래쪽이랑 왼쪽정렬 맞추고 싶은데..
  - Contact 이거 모양 어떡하지
  - about 부분 반응형 어캄
- ~~`스킬` 나누기(세개로 나누고 해시태그는 3~4개 정도) 뭐 배웠지(Vercel, vite, 제이쿼리 등 추가)~~
  - 스킬 태그 걸기...내 능력만...
  -  word-break: keep-all; // 단어 기준으로 줄바꿈 이거 때문에 #만 첫줄에 두고 다 내려가는 듯
    - import { DiNodejs } from "react-icons/di";<DiNodejs />
- Contact 모양.,...
- `nav바` ~~그림자말고~~ 밑줄 생기게 하는걸로... 푸터도 통일(호버효과)
호버효과 참고
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

- 모달창 내용 채우기
  - 버튼들 깃허브, 엑셀, 파워포인트 아이콘으로 수정?>>

## 해결한 일
- ~~소개페이지 완성~~ ~~`어바웃` 영어 빼고~~, ~~탭메뉴 작게 줄이기~~
- ~~모달창에서 깃허브버튼 새창으로 열기는 되는데 포트폴리오 사이트도 바뀐다...~~ 해결 블링크 빼먹음;;; 다른 방법있나

- ~~`프로젝트` 팀플 넣기~~
  - ~~상세보기는 화이트버튼, 그 옆에 데모?블루버튼~~
  - ~~상세 페이지(x아이콘 크게)~~

---
### 고민

- ~~공통적으로 한글로 할지?~~ 이상함
<!-- - 홈 외에 타이틀 소제목 가운데로 놓을지? 안써도 되는거 아닌가, 없으니까 이상하네^ -->
- ~~푸터 Contact 안에 합치기~~

- 이미지 넣는 방법이 따로 있음ㅜ 깃허브 스터디 노트s 1016_오후 참고..

---

## 수정할 내용

### index.scss 
- 빨간줄 두개랑, 
- 반응형, 
- 터미널창 권고 보고 수정

### Navbar.scss
- ~~상단메뉴 한글? 영어?(한글로 하니까 이상함;;;)~~
- ~~.logo = 이미지인데 이름을 쓸까, 색상은? 파비콘처럼 ai로 그릴까 고민~~ 이름을 로고인척 썼음
- 메뉴 호버시 파란색이라서 안보이는데 이부분 text-shadow로 안되나? 안됐음;;; 밑줄 하이라이트로 바꾸자... 아직 안바꿈 하지말까
---

## 버전관리

1) 마지막 숫자 : v. 1.1.0
- 기획서의 큰 틀은 유지한채 자잘한 오류, 누락 사항, 단순 오타를 수정할 때 숫자가 올라간다. 예를들어 기존 기획서에 얼럿이 누락되어서 추가했다면 v. 1.1.1 로 업그레이드 된다.

2) 두번째 숫자 : v. 1.1.0
- 기존 내용과 기능은 유지한 채 새로운 기능이 추가되었을 때 수정된다. 예를들어 메모 애플리케이션에 메모 폴더링 기능을 추가한다면 v. 1.2.0 로 업그레이드 된다.

3) 첫번째 숫자 : v. 1.1.0
- 이전 버전과 호환되지 않는 새로운 큰 변화를 말한다. 가령 Windows 7에서 10로 업그레이드된 정도의 변화이다.


```scss
// @import "../styles/index.scss";

// .about {
//   padding: 8rem 0;
//   background: $color-light; // 밝은 회색 배경
//   height: 100vh;
//   color: $color-dark;
//   position: relative;
//   // text-align: center; /* 가운데 정렬할건지 */
//   display: flex; // 소제목타이틀 가운데로 할건지
//   // align-items: center;

//   h2 {
//     margin-bottom: 3rem;
//     color: $color-dark;
//   }

//   p {
//     // max-width: 700px;
//     // margin: 0 auto;
//     // line-height: 1.8;
//     font-size: 1.6rem;
//     color: $color-dark-sub;

//   }
// }


@import "../styles/index.scss";

.about {
  // padding: 8rem 0;
  background: $color-light;

  h2 {
    // text-align: center;
    // margin-bottom: 3rem;
    // color: $color-dark;
  }

  // 탭 메뉴 영역
  .tab-area {
    display: flex;
    justify-content: start;
    align-items: start;
    margin: 0 auto 3rem;
  }

  // 탭 메뉴 스타일
  .tab-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    border: 1px solid $color-blue;
    border-radius: 50px;
    padding: .6rem 1rem;
    background: $color-white;

    .tab {
      background: transparent;
      border: none;
      font-size: 1.6rem;
      color: $color-dark;
      cursor: pointer;
      padding: 1rem 1.8rem;
      border-radius: 50px;
      transition: all 0.3s ease;

      &:hover {
        color: $color-blue;
      }

      &.active {
        background: $color-blue;
        color: $color-white;
        // font-weight: 600;
        // padding: 1rem 2rem;
      }
    }
  }

  // 탭 전환 콘텐츠 영역
  .tab-content {
    // max-width: 900px;
    // margin: 0 auto;
    font-size: 1.6rem;
    // text-align: left;
    color: $color-dark-sub;
    line-height: 1.7;
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;

    p {
      margin-bottom: 1.6rem;
    }

    h3 {
      color: $color-dark;
    }

    .subtext {
      font-size: $fs-16;
      // margin-bottom: 2rem;
      color: $color-dark-sub;
    }

    .summary {
      font-size: 1.6rem;
      margin-top: 2rem;
      color: $color-dark;

      &.highlight {
        color: $color-blue;
        font-weight: 600;
      }
    }
  }

  // 표 기본 스타일 (활동 / 교육 / 자격증)
  .activity-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 3rem;

    th,
    td {
      border-bottom: 1px solid $color-gray;
      padding: 1.5rem 1.2rem;
      text-align: left;
      font-size: $fs-16; // ? 16px
      vertical-align: top;
    }

    th {
      color: $color-blue;
      font-weight: 700;
      & {
        padding-left: 0;
      }
    }

    td {
      color: $color-dark-sub;
    & {
        padding-left: 0;
      }
    }
    
  }

  // 자격증 리스트
  .license {
    margin-top: 2rem;

    h4 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      // color: $color-blue;
      color: $color-dark;
    }

    ul {
      list-style: disc;
      // margin-left: 2rem;

      li {
        margin-bottom: 0.6rem;
        font-size: 1.5rem;
        color: $color-dark-sub;
      }
    }
  }

  // 반응형
  @media (max-width: $breakpoint-tablet) {
    .tab-area {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto 3rem;
    }

      .tab-menu {
      gap: 1rem;
      padding: 0.8rem 1.2rem;
      border-radius: 40px;

      .tab {
        font-size: 1.4rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .tab-content {
      padding: 0 1.6rem;
    }

    .activity-table {
      font-size: 1.3rem;

      th,
      td {
        display: block;
        padding: 0.6rem 0;
        text-align: center;
        border: none; // 작은 화면 일 때, 표 경계선 사라짐
      }

      thead {
        display: none;
      }

      tbody tr {
        margin-bottom: 1.6rem;
        display: block;
        // border-bottom: 1px solid $color-gray;
        padding-bottom: 1rem;
      }

      td::before { // ???
        content: attr(data-label);
        font-weight: 600;
        color: $color-blue;
        display: block;
        margin-bottom: 0.4rem;
      }
    }
  }

  @media (min-width: $breakpoint-mobile) {

    // 탭 메뉴 영역
    .tab-area {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto 3rem;
    }
  }
  
  // 애니메이션
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```