import "./Home.scss";
import { FaChevronDown, FaFileAlt, FaGithub } from "react-icons/fa"
import { BsMouse } from "react-icons/bs"

const Home = () => {
  // intro 스크롤 아이콘 클릭하면 이동 
  const scrollToAbout = () => {
    const introSection = document.querySelector("#intro");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // // about로 스크롤 아이콘 클릭하면 이동 
  // const scrollToAbout = () => {
  //   const aboutSection = document.querySelector("#about");
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section id="home" className="home">
      <div className="inner">
        {/* 한줄씩 나타나기 하면 좋을듯 */}
        <h2>이름처럼, <br/> 더 넓은<br/> <strong>하늘</strong>을 향해<br/> 배우며 나아갑니다.</h2>
        <p className="subtext">
          배움으로 성장하는 프론트엔드 개발자 <strong>이하늘</strong>입니다.
        </p>
        <div className="btn">
          <a href="https://github.com/sk-y01" target="_blank" className="line-btn"><FaGithub /> github</a>
          {/* <a href="#" className="white-btn">Resume</a> */}
          <a 
            href="/haneul_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="color-btn"
          >
            <FaFileAlt /> 이력서</a>
        </div>
        
        {/* 버전 */}
        <div className="version">
          <p>React Portfolio v1.1.0</p>
        </div>
        
      </div>

        {/* 아래로 스크롤 아이콘 */}
        <div className="down" onClick={scrollToAbout} >
          {/* <FaChevronDown /> */}
          <BsMouse />
        </div>

    </section>
  );  
};

export default Home;

