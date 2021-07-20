import React from 'react';
import '../css/Main-progress.css';
import ProgressIcons from '../Components/ProgressIcons';

function MainProgress() {
  return (
      <div className="main-container">
        <h1 className="progress-title">드림캘린더 제작과정</h1>
        <p className="progress-description">
          드림캘린더는 당신의 꿈을 응원합니다.<br/>
          아직 꿈이 없다면 드림캘린더에서 당신의 꿈을 그려보는 것은 어떨까요?<br/>
          이것 하나만 약속해주세요. 드림캘린더는 사실 그대로의 당신이 필요합니다.<br/>
          거짓되거나 남의 시선을 신경쓰는 정보는당신의 꿈을 왜곡시키고 이룰 수 없게 합니다.
        </p>
        <ProgressIcons></ProgressIcons>
        <p className="progress-caption">
          “꿈에 날짜를 적고, 계획을 세운 다음 실행하면 당신의 꿈은 이루어집니다.<br/>
          여러분의 꿈을 이룰 수 있도록 나만의 드림캘린더를 그려보세요.”</p>
      </div>
  );
}

export default MainProgress;