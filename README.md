# 포트폴리오

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

## 📦 React Icons 사용법(스킬 아이콘)

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
- 반응형!!!
  - 메인 페이지(home) 아래쪽이랑 왼쪽정렬 맞추고 싶은데..
- `스킬` 나누기(세개로 나누고 해시태그는 3~4개 정도) 뭐 배웠지
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
- ~~모달창에서 깃허브버튼 새창으로 열기는 되는데 포트폴리오 사이트도 바뀐다...~~ 해결 블링크 빼먹음;;;

- ~~`프로젝트` 팀플 넣기~~
  - ~~상세보기는 화이트버튼, 그 옆에 데모?블루버튼~~
  - ~~상세 페이지(x아이콘 크게)~~

---
### 고민

- ~~공통적으로 한글로 할지?~~ 이상함
<!-- - 홈 외에 타이틀 소제목 가운데로 놓을지? 안써도 되는거 아닌가, 없으니까 이상하네^ -->
- ~~푸터 Contact 안에 합치기~~

---

## 수정할 내용

### index.scss 
- 빨간줄 두개랑, 
- 반응형, 
- 터미널창 권고 보고 수정

### Navbar.scss
- 상단메뉴 한글? 영어?(한글로 하니까 이상함;;;)
- .logo = 이미지인데 이름을 쓸까, 색상은? 파비콘처럼 ai로 그릴까 고민
- 메뉴 호버시 파란색이라서 안보이는데 이부분 text-shadow로 안되나 안됐음;;; 밑줄 하이라이트로 바꾸자...
---
