import React from 'react';
import '../css/Main-config.css';
import Config1 from '../image/config1.png';
import Slider from "react-slick";
import ConfigBox from '../Components/ConfigBox';

function MainConfig() {
    const settings = {
        dots: true,
        arrows : false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
    };
  return (
      <div className="config-container">
            <h1 className="config-title">드림캘린더 구성</h1>
            <div className="configbox-list">
            <Slider {...settings}>
                <ConfigBox img={Config1} title="Part 1.<br/>드림캘린더 온라인 검사"
                    description="10가지 테마, 150여개의 질문을 통해서 세상에서 하나뿐인<br/>
                    ‘나만의 꿈을 그리는 달력’ 드림캘린더를 만드는 기초를 만듭니다.<br/>
                    인생의 5대 자금과 개인적인 꿈, 라이프스타일들을 질문하며<br/>
                    꿈을 이루는데 필요한 재원에 관련된 모든 것을 묻습니다."></ConfigBox>
                <ConfigBox img={Config1} title="Part 2.<br/>목표 및 재무 성향 평가 보고서"
                    description="목표 설정 평가 : <br/>
                    목표 행동화 역량, 목표 설정 역량, 현재 상태 평가<br/>
                    재무 성향 평가 : <br/>
                    금융트렌드 인지검사, 개인 재무성향 검사, 투자성향 평가"></ConfigBox>
                <ConfigBox img={Config1} title="Part 3.<br/>종합 재무상태 평가보고서"
                    description="소득분위별, 직업, 지역별 최신화된(직전 2년이내)<br/>
                    통계치에 비교하는 대차대조, 재무목표의 계량화된 <br/>
                    세부계획 수립, 라이프스타일에 맞춘 개별 평가보고서"></ConfigBox>
                <ConfigBox img={Config1} title="Part 4.<br/>꿈이룸 포트폴리오 추천"
                    description="당신에게 필요한 변화는 비단 재테크상품의 선택이 아닐 수도<br/>
                    있습니다. 이직과 사업의 확장, 투자포트폴리오의 변화,<br/>
                    인식의 전환 등 당신이 꿈꾸고 있는 꿈에 다가갈 수 있는 모든<br/>
                    방법을 제시합니다."></ConfigBox>
                <ConfigBox img={Config1} title="Part 5.<br/>현재 금융환경의 이해"
                    description="개인별 보고서 출력당시의 시황이 반영된 각종 금융지표<br/>
                    도식하며 그에 따른 배경지식의 제공으로 당신의 성장을<br/>
                    도울 수 있는 정보를 선별하여 제공합니다."></ConfigBox>
                <ConfigBox img={Config1} title="Part 6.<br/>드림캘린더 액션플랜"
                    description="앞서 도출된 평가와 결과값을 토대로 당신이 직접 당신의<br/>
                    꿈을 향해 다가갈 수 있는 강력한 Tool에 제공됩니다.<br/>
                    Whole Life, Generation, Annual, Monthly.<br/>
                    총 4가지 시기구분에 따른 드림캘린더"></ConfigBox>
                <ConfigBox img={Config1} title="Part 7.<br/>버킷리스트 Follow Up Sheet"
                    description="이곳저곳에 흩어져 있는 당신의 꿈과 소망, 목표, 계획은 <br/>
                    한데 모아서 정리해놓고 드림캘린더와 함께<br/>
                    하나씩 이루어 나가세요!"></ConfigBox>  
                </Slider>
                </div>
      </div>
  );
}

export default MainConfig;