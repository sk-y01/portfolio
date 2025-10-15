import "./Home.scss";
import { FaChevronDown } from "react-icons/fa"
import { BsMouse } from "react-icons/bs"

const Home = () => {
  // about로 스크롤 아이콘 클릭하면 이동 
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="home">
      <div className="inner">
        {/* 한줄씩 나타나기 하면 좋을듯 */}
        <h1>이름처럼, <br/> 더 넓은 <strong>하늘</strong>을 향해 배우며 나아갑니다.</h1>
        <p className="subtitle">
          배움으로 성장하는 프론트엔드 개발자 <strong>이하늘</strong>입니다.
        </p>
        <div className="btn">
          <a href="#" className="blue-btn">github</a>
          {/* <a href="#" className="white-btn">Resume</a> */}
          <a href="#" className="white-btn">이력서</a>
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
