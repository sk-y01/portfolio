// import "./ProjectModal.scss";

// const ProjectModal = ({ project, onClose }) => {
//   if (!project) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <button className="close-btn" onClick={onClose}>×</button> {/* 아이콘으로 수정 */}
//         <h2 className="modal-title">{project.title}</h2>

//         <div className="modal-icons">
//           <a href={project.github}>GitHub</a>
//           <a href={project.design}>화면 정의서</a>
//           {/* {project.design && (
//             <a href={project.design} target="_blank" rel="noopener noreferrer">Design</a>
//           )} */}
//           {/* 💡 참고
//           target="_blank" → 새 탭에서 열기
//           rel="noopener noreferrer" → 보안상 필수 (탭 간 접근 차단)
//           if (project.github) 처럼 값이 있을 때만 버튼 렌더링 → 빈 링크 방지 */}
//           <a href={project.plan}>화면 설계서</a>
//         </div>

//         <div className="modal-body">
//           <p className="period">{project.period}</p>
//           <h3>1. 프로젝트 소개</h3>
//           <p>{project.intro}</p>
//           <h3>2. 개발 과정</h3>
//           <p>{project.process}</p>
//           <h3>3. 기술 스택</h3>
//           <p>{project.stack}</p>
//           <h3>4. 결과물</h3> {/* ?이거 위에 링크 있지 않나 */}
//           <p>{project.result}</p>
//           <h3>5. 인사이트</h3>
//           <p>{project.insight}</p>
//           <h3>5. 인사이트</h3>
//           <p>{project.insight}</p>
//           <h3>5. 인사이트</h3>
//           <p>{project.insight}</p>
//           <h3>5. 인사이트</h3>
//           <p>{project.insight}</p>
//           <h3>5. 인사이트</h3>
//           <p>{project.insight}</p> {/* 스크롤 어떡하지 */}
//         </div> 
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;


// 링크 없을 때
import "./ProjectModal.scss";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* 닫기 버튼 */}
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        {/* 프로젝트 제목 */}
        <h2 className="modal-title">{project.title}</h2>

        {/* 링크 버튼 영역 */}
        <div className="modal-icons">
          {/* GitHub */}
          <a
            href={project.github !== "#" ? project.github : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={project.github === "#" ? "disabled" : ""}
          >
            GitHub
            {project.github === "#" && (
              <span className="tooltip">🔧 준비 중</span>
            )}
          </a>

          {/* Design */}
          <a
            href={project.design !== "#" ? project.design : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={project.design === "#" ? "disabled" : ""}
          >
            Design
            {project.design === "#" && (
              <span className="tooltip">🎨 준비 중</span>
            )}
          </a>

          {/* Plan */}
          <a
            href={project.plan !== "#" ? project.plan : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={project.plan === "#" ? "disabled" : ""}
          >
            Plan
            {project.plan === "#" && (
              <span className="tooltip">📝 준비 중</span>
            )}
          </a>
        </div>

        {/* 모달 본문 내용 */}
        <div className="modal-body">
          <h3>프로젝트 개요</h3>
          <p>{project.intro}</p>

          <h3>기간</h3>
          <p>{project.period}</p>

          <h3>기술 스택</h3>
          <p>{project.stack}</p>

          <h3>진행 과정</h3>
          <p>{project.process}</p>

          <h3>결과물</h3>
          <p>{project.result}</p>

          <h3>배운 점</h3>
          <p>{project.insight}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
