// import "./Contact.scss";

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <div className="inner">
//         {/* <h2>Contact</h2> */}
//         <h2>Contact</h2>
//         {/* 연락 및 링크 */}
//         {/* <p>프로젝트 협업이나 문의는 아래 메일로 부탁드립니다:)</p> */}
//         <p>함께 성장할 수 있는 팀을 만나길 기대합니다. <br/>
//           언제든 아래 메일로 편하게 연락 주세요:)</p>
//         <a href="mailto:youremail@naver.com" className="contact-link">
//           sky0000000@example.com
//         </a>
//         <div className="socials">
//           {/* memo : 메뉴를 제목 아래로 이동 */}
//           {/* a태그만 있어도 되나?? */}
//           <a href="https://github.com/sk-y01" target="_blank">GITHUB</a>
//           <a href="#이메일잘안보는데어떡하지" target="_blank">EMAIL</a>
//           <a href="#블로그하나도안썼는데어떡하지" target="_blank">BLOG</a>
//           <a href="#이력서파일열리게어떻게하는거지" target="_blank">RESUME</a>
//         </div>
      
//       <footer className="footer">
//         <p>© 2025 Hanuel Lee Portfolio. All rights reserved. v. 1.1.0</p>
//       </footer>
//       </div>
//     </section>
//   );
// };

// export default Contact;

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
        <p>
          함께 성장할 수 있는 팀을 만나길 기대합니다. <br />
          프로젝트 협업이나 채용 문의는 언제든 아래 메일로 연락 주세요 :)
        </p>
        <a href="mailto:sky0000000@example.com" className="contact-link">
          sky0000000@example.com
        </a>

        <div className="contact-closing">
          <p>끝까지 읽어주셔서 감사합니다.</p>
          <p>오늘도 즐거운 하루 되세요 ☺️</p>
        </div>


        <div className="socials">
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

        <footer className="footer">
          <p>© {new Date().getFullYear()} Hanuel Lee Portfolio. All rights reserved.</p>
          <p className="version">v1.1.0</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
