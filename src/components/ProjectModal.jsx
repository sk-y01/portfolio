import "./ProjectModal.scss";
import { CgClose } from "react-icons/cg";

const ProjectModal = ({ project, onClose }) => {

  // 새 탭에서 링크 열기 함수
  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank" , "noopener,noreferrer" ); // rel="noopener noreferrer" → 보안상 필수 (탭 간 접근 차단)
    } else {
      alert("파일 및 링크 준비 중입니다! 🙂");
    }
  };

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}><CgClose className='closeBtn' /></button> {/* 아이콘으로 수정 */}
        <h2 className="modal-title">{project.title}</h2>

        <div className="modal-icons"> {/* 파일s로 수정?? */}
          <a href={project.github} target="_blank" onClick={() => openLink(project.github)}>GitHub</a>
          <a href={project.design} onClick={() => openLink(project.design)}>기능 정의서</a>
          {/* {project.design && (
            <a href={project.design} target="_blank" rel="noopener noreferrer">Design</a>
          )} */}
          {/* 💡 참고
          target="_blank" → 새 탭에서 열기
          rel="noopener noreferrer" → 보안상 필수 (탭 간 접근 차단)
          if (project.github) 처럼 값이 있을 때만 버튼 렌더링 → 빈 링크 방지 */}
          <a href={project.plan} onClick={() => openLink(project.plan)}>화면 설계서</a>
          {/* <p className="period"><span>기간: </span>{project.period}</p> */}
        </div>

        <div className="modal-body">
          <p className="period"><span>기간: </span>{project.period}</p>
          <h3>1. 프로젝트 소개</h3>
          <p>{project.intro}</p>
          <h3>2. 개발 과정</h3>
          <p>{project.process}</p>
          <h3>3. 기술 스택</h3>
          <p>{project.stack}</p>
          <h3>4. 결과물</h3> 
          {/* 프로젝트별 이미지 */}
          <img
            src={project.result}
            alt={`${project.title} 상세 이미지`}
            className="project-image"
          />
          <h3>5. 인사이트</h3>
          <p>{project.insight}</p> {/* 스크롤 어떡하지 */}
        </div> 
      </div>
    </div>
  );
};

export default ProjectModal;


// ProjectModal.jsx 수정 (이미지 배열 + 파일 링크 여러 개 + 줄바꿈 지원)
// import "./ProjectModal.scss";
// import { CgClose } from "react-icons/cg";
// import { formatText } from "../utils/formatText";

// const ProjectModal = ({ project, onClose }) => {
//   if (!project) return null;

//   const openLink = (url) => {
//     if (url && url !== "#") {
//       window.open(url, "_blank", "noopener,noreferrer");
//     } else {
//       alert("파일 또는 링크가 준비 중입니다 🙂");
//     }
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <button className="close-btn" onClick={onClose}>
//           <CgClose className="closeBtn" />
//         </button>

//         <h2
//           className="modal-title"
//           dangerouslySetInnerHTML={{
//             __html: project.title.replace(/\|n/g, "<br/>"),
//           }}
//         />

//         <div className="modal-icons">
//           {project.github && (
//             <button onClick={() => openLink(project.github)}>GitHub</button>
//           )}

//           {project.files?.length > 0 &&
//             project.files.map((file, index) => (
//               <button key={index} onClick={() => openLink(file.url)}>
//                 {file.name}
//               </button>
//             ))}
//         </div>

//         <div className="modal-body">
//           <p className="period">
//             <span>기간: </span>
//             {project.period}
//           </p>

//           <h3>1. 프로젝트 소개</h3>
//           <p dangerouslySetInnerHTML={{ __html: formatText(project.intro) }} />

//           <h3>2. 개발 과정</h3>
//           <p dangerouslySetInnerHTML={{ __html: formatText(project.process) }} />

//           <h3>3. 기술 스택</h3>
//           <p>{project.stack}</p>

//           <h3>4. 결과물</h3>
//           <div className="modal-images">
//             {project.images?.map((img, i) => (
//               <img key={i} src={img} alt={`${project.title} 이미지 ${i + 1}`} />
//             ))}
//           </div>

//           <h3>5. 인사이트</h3>
//           <p dangerouslySetInnerHTML={{ __html: formatText(project.insight) }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;