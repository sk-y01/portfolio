import "./Skills.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { SiJavascript, SiVuedotjs, SiSass, SiNotion } from "react-icons/si";

// 가로형이 좋을지도
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="inner">
        <h2>Skills</h2>
        <p className="desc">주요 프론트엔드 기술과 협업 도구를 정리했습니다. or 기술 역량과 사용 스택</p>

        <div className="skill-groups">

          {/* Frontend */}
          <div className="skill-card">
            <h3>Frontend</h3>
            <div className="skill-grid">
              {/* <p> #뭐 설명 #어쩌구 #저쩌구 #글씨 크기 줄이고</p> */}
              <div className="skill-item"><FaHtml5 className="icon html" /><span>HTML5</span><p>#시멘틱 #마크업 #어쩌구</p></div>
              <div className="skill-item"><FaCss3Alt className="icon css" /><span>CSS3</span></div>
              <div className="skill-item"><SiSass className="icon sass" /><span>SCSS</span></div>
              <div className="skill-item"><SiJavascript className="icon js" /><span>JavaScript</span></div>
              <div className="skill-item"><SiVuedotjs className="icon vue" /><span>Vue.js</span></div>
              <div className="skill-item"><FaReact className="icon react" /><span>React.js</span></div>
            </div>
          </div>

          {/* back */}
          <div className="skill-card">
            <h3>분석??</h3>
            <div className="skill-grid">
              <div className="skill-item"><FaGithub className="icon github" /><span>node.js</span></div>
              <div className="skill-item"><FaFigma className="icon figma" /><span>MySQL</span></div>
              <div className="skill-item"><SiNotion className="icon notion" /><span>??</span></div>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-card">
            <h3>Tools</h3>
            <div className="skill-grid">
              <div className="skill-item"><FaGithub className="icon github" /><span>GitHub</span></div>
              <div className="skill-item"><FaFigma className="icon figma" /><span>Figma</span></div>
              <div className="skill-item"><SiNotion className="icon notion" /><span>Notion</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
