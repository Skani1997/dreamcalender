import React from 'react';
import '../css/Main-request.css';
import howtoimg1 from '../image/howtoimg1.png';
import howtoimg2 from '../image/howtoimg2.png';
import RequestModal from '../Components/Requestmodal';

function MainRequest(){
    return(
        <div className="main-request-container">
            <div className="request-text-box">
                <h1 className="request-title">드림캘린더 신청</h1>
                <p className="request-description">
                정말 이루고 싶은 꿈과 고민, 현재 자신의 상황을 양식에 맞게 적어주시는 분께는 무료로 드림캘린더를 제공해드립니다.
                드림캘린더는 그러한 사람들의많은 꿈을 모아 2년에 한번씩 대한민국재무&꿈 실태조사 보고서를 발간합니다.
                다소 시간이 소요되는 신청양식 작성없이 본인의 재무상황과 알고리즘과 최신화된 금융데이터와 대차대조한 재무설계보고서를
                받아보고 싶으신 분은 유료로 신청하시면 편리하게 이용하실 수 있습니다.
                </p>
            <RequestModal></RequestModal>
            </div>
            <div className="request-box-container">
                <div className="request-container-left">
                    <h1 className="request-box-title">무료 신청</h1>
                    <img className="howtoimg" src={howtoimg1} alt=""></img>
                    <p className="request-box-description">
                        <strong className="request-box-description-title">&lt;신청양식 작성 개인&gt;</strong>
                        신청양식을 상세히 작성한 개인 신청자
                        <p className="request-box-description-box">
                            드림캘린더 검사<br/>
                            +<br/>
                            검사결과 일반 레포트(PDF)<br/>
                            +<br/>
                            멘토링 ( 화상/대면) 추첨 후 제공<br/><br/>
                            (무료)
                        </p>
                    </p>
                </div>
                <div className="request-container-right">
                    <h1 className="request-box-title">유료 신청</h1>
                    <img className="howtoimg" src={howtoimg2} alt=""></img>
                    <p className="request-box-description">
                        <strong className="request-box-description-title">&lt;양식 미작성 개인 및 기업, 공공기관&gt;</strong>
                        유료 검사자 및 업무협약 된 단체기관
                        <p className="request-box-description-box">
                            드림캘린더 검사<br/>
                            +<br/>
                            검사결과 상세 레포트(PDF/제본)<br/>
                            +<br/>
                            전문가 멘토링 ( 화상/대면)  제공<br/><br/>
                            (￦ 12,900원)
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainRequest;