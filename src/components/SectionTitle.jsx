// title, 제목, 자주쓰는 구조// SectionTitle.jsx
// 섹션 공통 제목 컴포넌트 (h3 + 설명문 or 부제목)

import "./SectionTitle.scss";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h3 className="title">{title}</h3>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
