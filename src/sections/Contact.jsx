// 아이콘 포함 버전
import "./Contact.scss";
import { FaGithub, FaEnvelope, FaBlogger, FaFileAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="inner">
        {/* <h2>Contact</h2> */}
        <h2>Contact</h2>
        {/* 연락 및 링크 */}
          {/* 끝까지 읽어주셔서 감사합니다. 저에 대해 더 궁금하시다면 언제든 편하게 연락 주세요. */}
        <p>함께 성장할 수 있는 팀을 만나길 기대합니다.</p>
        <p>책임감 있게 주어진 일에 최선을 다하며,<br/>
          더 넓은 하늘을 향해 꾸준히 배우고 성장하는 개발자 이하늘입니다.</p>
          <p>프로젝트 협업이나 채용 문의는 언제든 아래 메일로 연락 주세요 :)</p>
        <a href="mailto:sky0000000@example.com" className="contact-link">
          sky0000000@example.com
        </a>
        
        <div className="menu">
          {/* memo : 메뉴를 제목 아래로 이동 */}
          <a href="https://github.com/sk-y01" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:sky0000000@example.com">
            <FaEnvelope /> Email
          </a>
          <a href="https://your-blog-url.com" target="_blank" rel="noopener noreferrer">
            <FaBlogger /> Blog
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FaFileAlt /> Resume
          </a>
        </div>

        <div className="contact-closing">
          <p>끝까지 읽어주셔서 감사합니다.</p>
          <p>오늘도 즐거운 하루 되세요 ☺️</p>
        </div>

        <footer className="footer">
          <small>© {new Date().getFullYear()} Hanuel Lee Portfolio. All rights reserved.</small>
          <p className="version">v1.1.0</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
