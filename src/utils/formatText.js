/**
 * formatText
 *
 * @description
 * - |n → <br/> 로 변환
 * - 텍스트 안의 |n → 줄바꿈(<br/>) 변환하고, <strong> 태그는 그대로 적용되게 HTML 문자열로 반환하는 함수
 * @returns withBreaks
 */
export const formatText = (text) => {
  if (!text) return "";

  // 줄바꿈 처리
  let formatted = text.replace(/\|n/g, "<br/>");

  // script, iframe 같은 위험 태그만 제거
  formatted = formatted.replace(/<(\/?)(script|iframe|style|meta|object|embed)[^>]*>/gi, "");

  // 그 외 <strong>, <span> 등은 그대로 허용
  return formatted;
};
