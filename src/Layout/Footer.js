import React from 'react';
import '../css/Footer.css';

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-brown">
                <ul className="footer-menu">
                    <li>회사소개</li>
                    <li>개인정보처리방침</li>
                    <li>이용약관</li>
                    <li>고객센터</li>
                </ul>
            </div>
            <div className="footer-white">
                <p className="footer-company">AIA생명 <span className="spforma">(우)11111 서울특별시 강남구 테헤란로 1234, 행복나라 아파트 103층</span> 대표이사: 땡땡땡</p>
                <p className="footer-businum">사업자 등록번호: 111-11-11111</p>
                <p className="footer-shopcall">온라인 쇼핑몰 관련문의 : 1544-7665</p>
                <p className="footer-address">(우)11111 경기도 경기시 경기로 땡땡땡 와</p>
                <p className="footer-copyright">Copyright (c) 2020 where where wheeeeee. All Rights reserved.</p>   
            </div>   
        </div>
    );
}

export default Footer;