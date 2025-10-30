/**
 * formatText
 * 
 * @description 텍스트 안의 |n → 줄바꿈(<br/>) 변환하고, <strong> 태그는 그대로 적용되게 HTML 문자열로 반환하는 함수
 * @param {*} text 
 * @returns withBreaks
 */
export const formatText = (text) => {
  if (!text) return "";

  // |n → <br/> 로 변환
  const withBreaks = text.replace(/\|n/g, "<br/>");

  // HTML 태그 그대로 적용되도록 반환
  return withBreaks;
};
