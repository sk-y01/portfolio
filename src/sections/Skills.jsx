import "./Skills.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma, FaNpm } from "react-icons/fa";
import { SiJavascript, SiVuedotjs, SiSass, SiNotion, SiVite, SiVercel, SiJquery, SiNodedotjs, SiGooglecolab, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="inner">
        <h2>Skills</h2>
        <p className="desc">
          주요 프론트엔드 기술과 개발 환경, 협업 도구를 정리했습니다.
        </p>

        <div className="skill-groups">

          {/* Frontend */}
          <div className="skill-box">
            <h3 className='skill-title'>Frontend</h3>
            <div className="skill-card">
              {/* <p className="category-desc">UI를 구성하고 사용자 인터랙션을 구현했습니다.</p> */}
              <div className="skill-grid">

                <div className="skill-item">
                  <FaHtml5 className="icon html" />
                  <span>HTML5</span>
                  <p>#시멘틱마크업 #웹표준</p>
                </div>

                <div className="skill-item">
                  <FaCss3Alt className="icon css" />
                  <span>CSS3</span>
                  <p>#Grid #반응형디자인</p>
                </div>

                <div className="skill-item">
                  <SiSass className="icon sass" />
                  <span>SCSS</span>
                  <p>#스타일모듈화 #변수활용</p>
                </div>

                <div className="skill-item">
                  <SiJavascript className="icon js" />
                  <span>JavaScript</span>
                  <p>#이벤트핸들링 #데이터요청</p>
                </div>

                <div className="skill-item">
                  <SiJquery className="icon jquery" />
                  <span>jQuery</span>
                  <p>#이벤트처리 #DOM조작</p>
                </div>

                <div className="skill-item">
                  <SiVuedotjs className="icon vue" />
                  <span>Vue.js</span>
                  <p>#컴포넌트 #데이터바인딩</p>
                </div>

                <div className="skill-item">
                  <FaReact className="icon react" />
                  <span>React.js</span>
                  <p>#Hooks #상태관리 #API연동</p>
                </div>
              </div>
            </div>
          </div>

          {/* Environment */}
          <div className="skill-box">
            <h3 className='skill-title'>Environment</h3>
            <div className="skill-card">
              {/* <p className="category-desc">개발 환경 세팅부터 빌드, 배포까지 직접 경험했습니다.</p> */}
              <div className="skill-grid env">

                <div className="skill-item">
                  <SiNodedotjs className="icon node" />
                  <span>Node.js</span>
                  <p>#npm환경 #로컬서버</p>
                </div>

                <div className="skill-item">
                  <FaNpm className="icon npm" />
                  <span>npm</span>
                  <p>#스크립트실행 #환경설정</p>
                </div>

                {/* <div className="skill-item">
                  <SiVite className="icon vite" />
                  <span>Vite</span>
                  <p>#빌드 #개발환경</p>
                </div> */}

                <div className="skill-item">
                  <SiMysql className="icon mysql" />
                  <span>MySQL</span>
                  <p>#데이터베이스 #CRUD #쿼리기초</p>
                </div>

                <div className="skill-item">
                  <SiVercel className="icon vercel" />
                  <span>Vercel</span>
                  <p>#사이트배포 #포트폴리오배포</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-box">
            <h3 className='skill-title'>Tools</h3>
            <div className="skill-card">
              {/* <p className="category-desc">협업과 작업 관리에 필요한 도구를 적극적으로 활용했습니다.</p> */}
              <div className="skill-grid">

                <div className="skill-item">
                  <FaGithub className="icon github" />
                  <span>GitHub</span>
                  <p>#버전관리 #협업경험</p>
                </div>

                <div className="skill-item">
                  <VscVscode className="icon vscode" />
                  <span>VS Code</span>
                  <p>#디버깅 #익스텐션활용</p>
                </div>

                <div className="skill-item">
                  <FaFigma className="icon figma" />
                  <span>Figma</span>
                  <p>#UI #프로토타입 #협업</p>
                </div>

                <div className="skill-item">
                  <SiNotion className="icon notion" />
                  <span>Notion</span>
                  <p>#작업관리 #문서정리</p>
                </div>

                <div className="skill-item">
                  <SiGooglecolab className="icon colab" />
                  <span>Google Colab</span>
                  <p>#파이썬 #데이터정리</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
