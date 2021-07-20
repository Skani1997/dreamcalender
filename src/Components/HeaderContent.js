import React from 'react';
import '../css/HeaderContent.css';

function HeaderContent() {
    return (
        <div id="headercontent-container">
            <h2 className="header-subtitle">당신의 꿈을 이뤄<span className="orange">드림</span></h2>
            <h1 className="header-title orange">드림캘린더</h1>
            <span className="description">
                당신의 꿈을 현실이 되도록.<br/>
                8년간의 연구와 개발을 거친 최적의 Trend 정보와 세분화 된 알고리즘<br/>
                그리고 13명의 투자, 재무, 부동산, 세금 전문가가<br/>
                꼼꼼히 작성하는 나만의 재무계획 보고서
            </span>
        </div>
    );
  }
  
  export default HeaderContent;