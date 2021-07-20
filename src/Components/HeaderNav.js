import React from 'react';
import logo from '../image/dreamcalenderLogo.png'
import "../css/HeaderNav.css"

function HeaderNav() {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt=""></img>
            <div className="menu">
                <ul>
                    <li>드림캘린더 신청</li>
                    <li>코드등록 & 검사하기</li>
                    <li>고객센터</li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default HeaderNav;