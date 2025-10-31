import "./ProjectModal.scss";
import { CgClose } from "react-icons/cg";
import { formatText } from "../utils/formatText";
import noImage from "../assets/images/no-image.png";

const ProjectModal = ({ project, onClose }) => {
  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("파일 및 링크 준비 중입니다! 🙂");
    }
  };

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <button className="close-btn" onClick={onClose}>
          <CgClose className="closeBtn" />
        </button>

        {/* ✅ 프로젝트 구분 + 제목 */}
        <div className="modal-header">
          <h2 className="project-type">{project.titleMain}</h2>
          <h3 className="modal-title">{project.titleSub}</h3>
        </div>

        {/* 파일 링크 */}
        <div className="modal-icons">
          <a onClick={() => openLink(project.github)}>GitHub</a>
          <a onClick={() => openLink(project.design)}>기능 정의서</a>
          <a onClick={() => openLink(project.plan)}>화면 설계서</a>
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
            src={project.result || noImage}
            alt={`${project.titleSub || "프로젝트"} 이미지`}
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
