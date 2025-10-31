import { useEffect, useRef, useState } from "react";
import "./Introduction.scss";

const Introduction = () => {
  const [animate, setAnimate] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { // map은 배열 사용
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // 한 번만 실행되도록 감시 중단
          }
        });
      },
      { threshold: 0.3 } // 30% 보일 때 실행
    );

    if (introRef.current) observer.observe(introRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="intro" className="intro" ref={introRef}>
      <div className={`inner ${animate ? "animate" : ""}`}>

        <p>하늘처럼 넓은 시야로</p>
        <p><strong>사용자에게 더 나은 경험</strong>을 전하기 위해 노력합니다.</p>
        <p>익숙함에 머무르지 않고 <strong>새로운 기술</strong>을 배우며,</p>
        <p>작은 시도 속에서도 변화를 만들어가는 "프론트엔드 개발자" <strong>이하늘</strong>입니다.</p>

      </div>
    </section>
  );
};

export default Introduction;


// 🌤 Introduce

/* <p>"익숙함에 머무르기보다 새로운 기술을 배우며 나아가는 개발자"</p>
<p>변화 속에서도 꾸준히 성장하며,</p>
<p>하늘처럼 넓은 시야로 사용자에게 더 나은 경험을 전달하기 위해 노력하는  이하늘입니다.</p> */

// 익숙함에 머무르기보다 배우며 나아가는 개발자, 
// 변화 속에서도 꾸준히 성장하며 
// 하늘처럼 넓은 시야로 더 나은 내일을 만들어갑니다. 

// 익숙함에 머무르기보다 새로운 기술을 배우며 나아가는 개발자,  
// 변화 속에서도 꾸준히 성장하며  
// 사용자에게 더 나은 경험을 전달하기 위해 노력합니다. 

// ☁️ About

// 프론트엔드 개발자 이하늘입니다.
// 경영학 전공을 바탕으로 사용자와 서비스의 흐름을 이해하고,
// 기술로 그 연결을 구체화하는 과정을 즐깁니다.

// 화면을 단순히 ‘보이는 것’으로 끝내지 않고,
// 사용자가 자연스럽게 느끼는 ‘경험’으로 만드는 걸 목표로 합니다.

// 꾸준히 배우며 개선하고,
// 더 나은 결과를 만드는 과정에서 성장의 의미를 찾습니다.