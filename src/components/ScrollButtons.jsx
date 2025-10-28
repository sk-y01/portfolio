// 기본 버튼이랑 스크롤 버튼 등

import React, { useEffect, useState } from "react";
import { FaArrowUp, FaCommentDots } from "react-icons/fa";
import "./ScrollButtons.scss";

const ScrollButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.querySelector("#intro");

      if (introSection) {
        const introTop = introSection.offsetTop;
        // 🔹 인트로 섹션 아래로 스크롤 시 버튼 표시
        setShowButtons(window.scrollY > introTop - 200);
      }
    };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const aboutSection = document.getElementById("about");
  //     if (aboutSection) {
  //       const aboutTop = aboutSection.offsetTop;
  //       // 🔹 About 섹션 아래로 스크롤 시 버튼 표시
  //       setShowButtons(window.scrollY > aboutTop - 200);
  //     }
  //   };


    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 새로고침 시 사라지는 버튼들 이슈 해결
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 페이지 맨 위로 부드럽게 이동
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 구글 설문지로 이동
  const goToComment = () => {
    window.open("https://forms.gle/HddtoyAzai8csUsA6", "_blank");
  };
  // https://forms.gle/HddtoyAzai8csUsA6

  if (!showButtons) return null; // 스크롤 전엔 버튼 숨김

  return (
    <div className="scroll-buttons">
      {/* 코멘트 버튼 */}
      <button className="comment-btn" onClick={goToComment}>
        <span className="label">코멘트 남기기</span>
        <span className="icon-wrapper">
          <FaCommentDots />
        </span>
      </button>

      {/* 위로가기 버튼 */}
      <button className="top-btn" onClick={scrollToTop}>
        <span className="label">맨 위로 이동</span>
        <span className="icon-wrapper">
          <FaArrowUp />
        </span>
      </button>
    </div>
  );
};

export default ScrollButtons;
