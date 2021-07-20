import React from 'react';
import '../css/ProgressIcons.css';
import ProgressIconBox from "../Components/ProgressIconBox";
import Progress1 from '../image/progress1.png';
import Progress2 from '../image/progress2.png';
import Progress3 from '../image/progress3.png';
import Progress4 from '../image/progress4.png';
import Progress5 from '../image/progress5.png';

function ProgressIcons() {
  return (
      <div className="progressicons-container">
                <ProgressIconBox className="margintop" img={Progress1} title="드림캘린더 신청" 
                  description="모바일/PC를 통한 드림캘린더 <br/>
                  웹페이지에서 신청<br/>
                  신청유형 유료/무료 선택 가능"     
                 em=" "></ProgressIconBox>
                <ProgressIconBox img={Progress2} title="온라인 검사" 
                  description="투자성향검사, 라이프스타일 검사 등<br/> 
                  9종 150문항 검사"
                  em=" "></ProgressIconBox>
                <ProgressIconBox  className="margintop" img={Progress3} title="보고서 개발" 
                  description="금융 Data Scraping을 통한<br/>
                  소득분위별 대차대조,<br/>
                  재무목표 달성가능성 도출 등<br/>
                  객관적지표+전문가견해 반영"em=" "></ProgressIconBox>
                <ProgressIconBox img={Progress4} title="드림캘린더 완성" 
                  description="수령방식 선택(우편/메일/상담)<br/>
                  수령 후 사용방법 안내(by서포터즈)"em=" "></ProgressIconBox>
                <ProgressIconBox className="margintop" img={Progress5} title="액션플랜 수행" 
                  description="월별, 분기별, 연간 피드백 <br/>
                  신청자 의사에 따라 전략적 제휴사<br/>
                  (주)한국재무설계 전문가 멘토링"em=" "></ProgressIconBox>
      </div>
  );
}

export default ProgressIcons;