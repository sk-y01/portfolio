import { useState } from "react";
import "./About.scss";
import { FaZ } from 'react-icons/fa6';

const About = () => {
  const [activeTab, setActiveTab] = useState("소개");

  const tabs = ["소개", "활동", "교육", "경력&자격증"];

  const renderContent = () => {
    switch (activeTab) {
      case "소개":
        return (
          <div className="aboutMe">
            <p>프론트엔드 개발자 <strong>이하늘</strong>입니다.</p>
            <p>새로운 것을 배우고 적용하는 과정을 즐깁니다.  
            작은 시도라도 꾸준히 쌓이는 경험이 저를 성장시킨다고 믿습니다.</p>
            <p>배움과 성장, 그리고 꾸준한 개선을 중심으로 개발 역량을 쌓고 있습니다.  
            경영학 전공에서 배운 기획력과 분석력을 바탕으로,  
            프론트엔드 개발 과정에서 UI/UX에 대한 이해와 구현 능력을 함께 키워가고 있습니다.</p>
            <p>다양한 교육과 활동을 통해 실무와 협업을 경험하며,  
            사용자의 입장에서 더 나은 결과를 만들어가기 위해 노력하고 있습니다.</p>
          </div>
        );

      case "활동":
        return (
          <div className="activity-content">
            <h3>활동</h3>
            <p className="subtext">프론트엔드 관련 교내, 교외 활동 경험</p>

            <table className="activity-table">
              <thead>
                <tr>
                  <th>기간</th>
                  <th>기관</th>
                  <th>역할</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="기간">2023.02 ~ 2024.02</td>
                  <td data-label="기관">한남대학교 시스템운영팀</td>
                  <td data-label="역할">웹사이트 관리 / 사용자 문의 응대</td>
                  <td data-label="내용">콘텐츠 업데이트, 사용자 중심의 디자인 및 기능 피드백, 데이터 백업, 전화 문의 응대</td>
                </tr>
                <tr>
                  <td data-label="기간">2023.04 ~ 2024.02</td>
                  <td data-label="기관">한남대학교 경영학과</td>
                  <td data-label="역할">홈페이지 운영 / 홍보</td>
                  <td data-label="내용">학과 홈페이지 관리(Wordpress), 콘텐츠 제작 및 홍보, 공모전 진행</td>
                </tr>
                <tr>
                  <td data-label="기간">2023.09 ~ 2023.12</td>
                  <td data-label="기관">㈜모노플랫폼</td>
                  <td data-label="역할">앱 모니터링단</td>
                  <td data-label="내용">휘슬 서포터즈 1기 활동, 커뮤니티 버그 제보, 신규 기능 UX 피드백</td>
                </tr>
              </tbody>
            </table>

            <p className="summary">
              💬 세 활동 모두 웹과 관련되어 콘텐츠 구조와 UI 개선 과정의 실무를 경험할 수 있었던 활동입니다.
            </p>
          </div>
        );

      case "교육":
        return (
          <div className="education-content">
            <h3>교육 / 연수 경력</h3>
            <p className="subtext">프론트엔드 관련 교육 및 경험</p>

            <table className="activity-table">
              <thead>
                <tr>
                  <th>기간</th>
                  <th>기관</th>
                  <th>과정</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="기간">2025.04.21 ~ 2025.11.07</td>
                  <td data-label="기관">대전세잔직업전문학교</td>
                  <td data-label="과정">프론트엔드 개발자 양성과정</td>
                  <td data-label="내용">HTML, CSS, JS, React, Node 등 실무 중심 프로젝트</td>
                </tr>
                <tr>
                  <td data-label="기간">2025.08.25 ~ 2025.08.28</td>
                  <td data-label="기관">한남대학교</td>
                  <td data-label="과정">졸업생 특강: 구글 애널리틱스 실무</td>
                  <td data-label="내용">데이터 기반 UX 분석 실습(GA4)</td>
                </tr>
                <tr>
                  <td data-label="기간">2024.03 ~ (학습 중)</td>
                  <td data-label="기관">인프런 외</td>
                  <td data-label="과정">웹 프론트엔드를 위한 자바스크립트 첫 걸음</td>
                  <td data-label="내용">JS 심화, 반응형, UI 인터랙션 학습</td>
                </tr>
              </tbody>
            </table>
            
            <p className="summary">💬 멈추지 않고 꾸준히 배우며 성장하고 있습니다.</p>
          </div>
        );

      case "경력&자격증":
        return (
          <div className="career-content">
            <h3><i></i>경력</h3>

            <p className="subtext">
              민간자격증 등록 실무를 담당하며, 기획과 실행을 모두 경험
            </p>

            <table className="activity-table">
              <thead>
                <tr>
                  <th>기간</th>
                  <th>기관</th>
                  <th>역할</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="기간">2023.09 ~ 2023.12</td>
                  <td data-label="기관">㈜이든교육원</td>
                  <td data-label="역할">기획 / 콘텐츠 제작</td>
                  <td data-label="내용">민간자격증 등록 및 인증 프로세스 구축, 기업교육 보조 운영</td>
                </tr>
                <tr>
                  <td data-label="기간">2024.07</td>
                  <td data-label="기관">신용보증재단</td>
                  <td data-label="역할">사무보조</td>
                  <td data-label="내용">건축물대장 서류관리, 협업 프로세스 경험</td>
                </tr>
              </tbody>
            </table>

            <div className="license">
              <h3>자격증</h3>
              <ul>
                <li>Google Analytics <span>— UX 데이터 분석 역량</span></li>
                <li>개인정보관리사 1급, 네트워크전문가 1급 <span>— 시스템 이해</span></li>
                <li>전산회계운용사, 생활스포츠지도사 자격증 등 <span>— 꾸준한 자기개발 활동</span></li>
              </ul>
            </div>

            <p className="summary">
              💬 행정·기획 경험과 기술적 이해를 함께 쌓으며, 체계적이고 책임감 있는 개발자로 성장 중입니다. <br/> 또한 다양한 분야의 자격증 취득을 통해 새로운 개념을 빠르게 습득하고 적용하는 학습력을 키워왔습니다.  
              이는 변화에 유연하게 대응하는 개발자로 성장하는 기반이 되고 있습니다.
            </p>

          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="about">
      <div className="inner">
        <h2>introduction</h2>
        <div className="tab-area">
          <div className="tab-menu">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "tab active" : "tab"}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="tab-content">{renderContent()}</div>
      </div>
    </section>
  );
};

export default About;
