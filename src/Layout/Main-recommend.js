import React from 'react';
import '../css/Main-recommend.css';
import person1 from '../image/recommend1.png';
import person2 from '../image/recommend2.png';
import person3 from '../image/recommend3.png';
import person4 from '../image/recommend4.png';
import person5 from '../image/recommend5.png';
import person6 from '../image/recommend6.png';

function MainRecommend(){
    return(
        <div className="recommend-container">
            <h1 className="recommend">
                이런 분들에게 반드시 필요합니다
            </h1>
            <div className="recommend-box1">
                <div className="box">
                    <img src={person1} alt=''></img>
                    <p>"꿈이요? 너무 막연해요<br/>
                        사실 제가 뭘 하고 싶은지 모르겠어요"
                    </p>
                </div>
                <div className="box">
                    <img src={person2} alt=''></img>
                    <p>
                    “매번 포기하고 가능성이 없는 것 같아요.<br/>
                    꾸준히 돈도 모으고 제 꿈을 이루고 싶은데 너무 어려워요”
                    </p>
                </div>
                <div className="box">
                    <img src={person3} alt=''></img>
                    <p className="marginleft">"어떻게 하면 돈 관리를<br/>
                        잘 할 수 있는지 모르겠어요"</p>
                </div>
            </div>
            <div className="recommend-box2">
                <div className="box">
                    <img src={person4} alt=''></img>
                    <p>“결혼도 하고 자식도 키워야하고<br/>
                    집도 사야하는데 너무 막연해서 계속 미루게 돼요”</p>
                </div>
                <div className="box">
                    <img src={person5} alt=''></img>
                    <p>“저와 비슷한 사람들과 비교해서<br/>
                    제가 잘 하고 있는지 확인하고 싶어요”</p>
                </div>
                <div className="box">
                    <img src={person6} alt=''></img>
                    <p>“주식? 투자? 부동산? 금융은 너무 어렵고<br/>
                    무엇부터 시작해야할지 모르겠어요”</p>
                </div>
            </div>
        </div>
    );
}

export default MainRecommend;
