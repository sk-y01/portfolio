import "./Navbar.scss";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <nav className="navbar navbar-light">
    <nav className="navbar navbar-dark">
      <div className="inner">
        {/* <div className="logo">lee ha neul</div> */}
        <div className="logo">LEEHANEUL</div>
        <ul>
          {/* <li onClick={() => scrollToSection("about")}>소개</li>
          <li onClick={() => scrollToSection("skills")}>기술</li>
          <li onClick={() => scrollToSection("projects")}>프로젝트</li>
          <li onClick={() => scrollToSection("contact")}>연락처</li> */}
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
