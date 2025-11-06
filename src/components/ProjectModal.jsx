// -----------------------------------------------------
// ProjectModal.jsx
// 포함 기능:
// - 모달 오버레이 (App 최상단에서 화면 중앙 기준 표시)
// - 이미지 클릭 시 확대 (zoom-overlay)
// - 키보드 ← → 로 이미지 전환, ESC로 닫기
// - 프로젝트 링크 / 깃허브 / 문서 링크 / 결과물 링크(FaLink)
// - 결과물 이미지 섹션: 좌우 스크롤 안내 + 클릭 확대 안내 포함
// - 가로 스크롤 영역 (마우스 휠 주석 처리 상태 유지)
// - 모달 열릴 때 body 스크롤 완전 잠금
// -----------------------------------------------------

import "./ProjectModal.scss";
import { useEffect, useState, useCallback, useRef } from "react";
import { CgClose } from "react-icons/cg";
import { FaGithub, FaLink } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { formatText } from "../utils/formatText";
import noImage from "../assets/images/no-image.png";
import { MdOutlineSwipe, MdOutlineZoomOutMap } from 'react-icons/md';

const ProjectModal = ({ project, onClose }) => {
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const scrollRef = useRef(null);

  // 모달 열릴 때 스크롤 잠그기
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // 외부 링크 열기
  const openLink = (url) => {
    if (url && url !== "#") {
      const finalUrl = url.startsWith("http") ? url : `/${url}`;
      window.open(finalUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("파일 및 링크 준비 중입니다 🙂");
    }
  };

  // 이미지 로더
  const getImage = (fileName) => {
    if (!fileName || fileName.trim() === "" || fileName === ".png") return null;
    try {
      return new URL(`../assets/images/${fileName}`, import.meta.url).href;
    } catch {
      return null;
    }
  };

  // 상세 이미지 (썸네일 제외 + 유효 파일만)
  const detailImages = (project.images || [])
    .slice(1)
    .filter((img) => img && img.trim() !== "" && img !== ".png");

  const imageCount = detailImages.length;

  // 키보드 제어 (← →, ESC)
  const handleKeyDown = useCallback(
    (e) => {
      if (zoomedIndex === null) return;
      if (e.key === "Escape") setZoomedIndex(null);
      if (e.key === "ArrowRight") setZoomedIndex((i) => (i + 1) % imageCount);
      if (e.key === "ArrowLeft") setZoomedIndex((i) => (i - 1 + imageCount) % imageCount);
    },
    [zoomedIndex, imageCount]
  );

  useEffect(() => {
    if (zoomedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [zoomedIndex, handleKeyDown]);

  // (비활성화) 마우스 휠 → 가로 스크롤
  /*
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);
  */

  if (!project) return null;

  return (
    <>
      {/* === 모달 오버레이 === */}
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="closeBtn" onClick={onClose}>
            <CgClose />
          </button>

          <div className="modal-scroll">
            {/* === 헤더 === */}
            <div className="modal-header">
              <h2 className="project-type">{project.titleMain}</h2>
              <h3 className="modal-title">{project.titleSub}</h3>
            </div>

            {/* === 파일 링크 === */}
            <div className="modal-files">
              {project.github && (
                <a onClick={() => openLink(project.github)} className="file-link">
                  <FaGithub className="file-icon" /> GitHub
                </a>
              )}
              {project.design && (
                <a onClick={() => openLink(project.design)} className="file-link">
                  <HiOutlineDocumentText className="file-icon" /> 기능 정의서
                </a>
              )}
              {project.plan && (
                <a onClick={() => openLink(project.plan)} className="file-link">
                  <HiOutlineDocumentText className="file-icon" /> 화면 설계서
                </a>
              )}
            </div>

            {/* === 본문 === */}
            <div className="modal-body">
              {/* === 프로젝트 기간 === */}
              <div className="period-box">
                <span className="label">📅 프로젝트 기간</span>
                <span className="date">{project.period}</span>
              </div>

              {/* === 상세 정보 === */}
              <dl className="project-info">
                <div>
                  <dt>프로젝트 소개</dt>
                  <dd dangerouslySetInnerHTML={{ __html: formatText(project.intro) }} />
                </div>

                <div>
                  <dt>개발 과정</dt>
                  <dd dangerouslySetInnerHTML={{ __html: formatText(project.process) }} />
                </div>

                <div>
                  <dt>기술 스택</dt>
                  <dd dangerouslySetInnerHTML={{ __html: formatText(project.stack) }} />
                </div>

                {/* === 결과물 섹션 === */}
                <div className="result-section">
                  <div className="result-header">
                    <dt>
                      {project.link && (
                        <a
                          className="result-link"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLink /> 결과물
                        </a>
                      )}
                    </dt>
                  </div>

                  {/* 좌우 스크롤 안내 (이미지 위쪽) */}
                  <span className="scroll-hint">
                    <MdOutlineSwipe /> 좌우로 움직여서 확인하실 수 있습니다.
                  </span>

                  {/* 결과물 이미지 리스트 (가로 스크롤) */}
                  <dd className="result-images" ref={scrollRef}>
                    {detailImages.map((img, idx) => {
                      const imageSrc = getImage(img);
                      return (
                        <img
                          key={idx}
                          src={imageSrc || noImage}
                          alt={
                            imageSrc
                              ? `${project.titleSub} 이미지 ${idx + 1}`
                              : "이미지 준비중입니다"
                          }
                          className={`result-image ${!imageSrc ? "no-image" : ""}`}
                          onClick={() => imageSrc && setZoomedIndex(idx)}
                          onError={(e) => (e.target.src = noImage)}
                        />
                      );
                    })}
                  </dd>

                  {/* 클릭 확대 안내 (이미지 아래쪽) */}
                  <span className="zoom-hint">
                    <MdOutlineZoomOutMap className="zoom-icon" /> 이미지 클릭 시 확대 가능
                  </span>
                </div>

                {/* === 인사이트 === */}
                <div>
                  <dt>인사이트</dt>
                  <dd dangerouslySetInnerHTML={{ __html: formatText(project.insight) }} />
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* === 이미지 확대 모드 === */}
      {zoomedIndex !== null && (
        <div className="zoom-overlay" onClick={() => setZoomedIndex(null)}>
          <img
            src={getImage(detailImages[zoomedIndex])}
            alt="확대 이미지"
            className="zoomed-image"
          />

          {/* 좌우 이동 버튼 */}
          {imageCount > 1 && (
            <>
              <button
                className="nav-btn prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedIndex((zoomedIndex - 1 + imageCount) % imageCount);
                }}
              >
                <HiChevronLeft />
              </button>

              <button
                className="nav-btn next"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedIndex((zoomedIndex + 1) % imageCount);
                }}
              >
                <HiChevronRight />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectModal;
