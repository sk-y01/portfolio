import "./Navbar.scss";

const Navbar = () => {
  // const scrollToSection = (id) => { // // 타이틀 텍스트 바로 위로 이동하여 페이지가 잘리는 현상
  //   const section = document.getElementById(id);
  //   if (section) section.scrollIntoView({ behavior: "smooth" });
  // };

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -60; // 타이틀 텍스트 바로 위로 이동하여 페이지가 잘리는 현상 해결 padding가 8rem인데....
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};


  const handleClick = (e, id) => {
    e.preventDefault(); // 기본 a 이동 막기
    scrollToSection(id);
  };

  return (
    <nav className="navbar navbar-dark">
      <div className="inner">
        <h1 className="logo">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          > LEEHANEUL
          </a>
        </h1>
        <ul>
          <li>
            <a href="#about" onClick={(e) => handleClick(e, "about")}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleClick(e, "skills")}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleClick(e, "projects")}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleClick(e, "contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
