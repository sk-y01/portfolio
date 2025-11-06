import "./Projects.scss";
import { projectData } from "../data/project";
import { formatText } from "../utils/formatText";
import SectionTitle from "../components/SectionTitle";
import noImage from "../assets/images/no-image.png";

const Projects = ({ onOpenModal }) => {
  // 외부 링크 열기
  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("링크 준비 중입니다 🙂");
    }
  };

  // 이미지 로더
  const getImage = (fileName) => {
    try {
      return new URL(`../assets/images/${fileName}`, import.meta.url).href;
    } catch {
      return noImage;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="inner">
        <SectionTitle title="Projects" />

        <div className="project-list">
          {projectData.map((proj) => {
            const thumbnail =
              proj.images && proj.images.length > 0
                ? getImage(proj.images[0])
                : noImage;

            return (
              <div key={proj.id} className="project-card">
                <div className="project-title">
                  <h4>{proj.titleMain}</h4>
                  <h5>{proj.titleSub}</h5>
                </div>

                <img
                  src={thumbnail}
                  alt={`${proj.titleSub} 썸네일`}
                  className="project-image"
                  onError={(e) => (e.target.src = noImage)}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: formatText(proj.introShort || proj.intro),
                  }}
                />

                <div className="btn-groups">
                  <button
                    className="white-btn"
                    onClick={() => onOpenModal(proj)} // App으로 전달
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
