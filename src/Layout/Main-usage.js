import React from 'react';
import '../css/Main-usage.css';
import UsageBox from '../Components/UsageBox';
import EffectBox from '../Components/EffectBox';
import UsageBoxImg1 from '../image/usage1.png';
import UsageBoxImg2 from '../image/usage2.png';
import UsageBoxImg3 from '../image/usage3.png';
import EffectBoxImg1 from '../image/effect1.png';
import EffectBoxImg2 from '../image/effect2.png';
import EffectBoxImg3 from '../image/effect3.png';
import EffectBoxImg4 from '../image/effect4.png';
import EffectBoxImg5 from '../image/effect5.png';

function MainUsage(){
    return(
        <div className="usage-container">
            <h1 className="usage-title">드림캘린더 활용방법 및 효과</h1>
            <div className="usage-box-container">
                <UsageBox title="지금껏 없었던" subtitle="나만의 재무보고서" imgtitle="활용방법 하나."
                          img={UsageBoxImg1} 
                          description="Part2. 목표 및 재무성향 평가 보고서 <br/>
                          Part3. 종합 재무상태보고서<br/>
                          Part4. 꿈 이룸 재무포트폴리오"
                          descriptionSmall=""></UsageBox>
                <UsageBox title="청춘의 하루는 노년의 10년이다" subtitle="부자습관 기르는 우리집 가계부" imgtitle="활용방법 둘."
                          img={UsageBoxImg2} 
                          description="Part5. 금융환경의 이해<br/>
                          Part6. 드림캘린더 액션플랜<br/>"
                          descriptionSmall="- 일 / 월 / 분기 / 연도별 가계부 탑재<br/>
                          - 최신 반영된 생활가계금융정보 수록"></UsageBox>
                <UsageBox title="R=VD(Reality=Vivid Dream)" subtitle="현실 버킷리스트" imgtitle="활용방법 셋."
                          img={UsageBoxImg3} 
                          description="Part6. 드림캘린더 액션플랜<br/>
                          Part7. 버킷리스트 FollowUp Sheet"
                          descriptionSmall=""></UsageBox>
            </div>
            <h1 className="effect-title">드림캘린더 활용방법 및 효과</h1>
            <p className="usage-description">
                자신의 목표를 구체화하고 System을 이용하여 꿈을 관리한 사람들의 10년간 변화<br/>
                Books of Brian Tracy, Gallup USA Research Co. 연구자료 발췌 
            </p>
            <div className="effect-box-container">
                <EffectBox img={EffectBoxImg1} title="목표설정능력" 
                    description="목표설정 및 피드백이 습관화<br/>
                    될 수록 어떠한 상황에서도<br/>
                    빠른 판단력으로 합리적인<br/>
                    목표를 도출"></EffectBox>
                <EffectBox img={EffectBoxImg2} title="가족과 함께보내는 시간"
                    description="계획에 의거한 시간배분과<br/>
                    효과적인 자산축적은<br/>
                    여가시간 및 가족과 함께하는<br/>
                    시간으로 부산물을 창출"></EffectBox>
                <EffectBox img={EffectBoxImg3} title="월 평균 소득"
                    description="목표 설정하고 행동하는 사람은<br/>
                    그렇지 않은 사람에 비해<br/>
                    현격한 소득의 격차를 발생"></EffectBox>
                <EffectBox img={EffectBoxImg4} title="비즈니스 생산성"
                    description="과업 Feedback, 업무 처리<br/>
                    Process 모두 계획과 실천,<br/>
                    점검의 단계를 거치므로<br/>
                    생산성에 영향"></EffectBox>
                <EffectBox img={EffectBoxImg5} title="이직 및 업종전환율"
                    description="몰입과 집중능력의 향상을 통한<br/>
                    Grit을 바탕으로 현업에 더욱<br/>
                    집중하며 Performance 발휘"></EffectBox>
            </div>
        </div>
    );
}

export default MainUsage;