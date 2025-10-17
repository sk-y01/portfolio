import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="inner">
        {/* <h2>Contact</h2> */}
        <h2>Contact</h2>
        {/* 연락 및 링크 */}
        {/* <p>프로젝트 협업이나 문의는 아래 메일로 부탁드립니다:)</p> */}
        <p>함께 성장할 수 있는 팀을 만나길 기대합니다. <br/>
          언제든 아래 메일로 편하게 연락 주세요:)</p>
        <a href="mailto:youremail@naver.com" className="contact-link">
          sky0000000@example.com
        </a>
        <div className="socials">
          {/* memo : 메뉴를 제목 아래로 이동 */}
          {/* a태그만 있어도 되나?? */}
          <a href="https://github.com/sk-y01" target="_blank">GITHUB</a>
          <a href="#이메일잘안보는데어떡하지" target="_blank">Email</a>
          <a href="#블로그하나도안썼는데어떡하지" target="_blank">Blog</a>
          <a href="#이력서파일열리게어떻게하는거지" target="_blank">Resume</a>
        </div>
      
      <footer className="footer">
        <p>© 2025 Hanuel Lee Portfolio. All rights reserved. v. 1.1.0</p>
      </footer>
      </div>
    </section>
  );
};

export default Contact;

