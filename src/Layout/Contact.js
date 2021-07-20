import React from 'react';
import Footer from './Footer';
import Termmodal from '../Components/Termmodal';
import '../css/Contact.css';

function Contact(){
    return(
        <>
        <div className="contact-container">
            <h1>고객문의</h1>
            <p>혹시 궁금한 점이 있으시다면 연락주세요!</p>
            <form className="contact-form" id="contact">
                <div className="form-container">
                    <div className="form-input"><label for="input-name">이름/기업명</label><input id="input-name" type="text" name="name"/></div>
                    <div className="form-input"><label for="input-call">연락처</label><input id="input-call" type="text" name="call"/></div>
                    <div className="form-input"><label for="input-email">이메일</label><input id="input-email" type="text" name="email"/></div>
                    <div className="form-input">
                        <label for="input-sort">문의유형</label>
                        <div className="select">
                            <select id="input-sort" name="sort">
                                <option value="" selected disabled hidden >선택하기</option>
                                <option value="program">검사프로그램</option>
                                <option value="progress">제작과정</option>
                                <option value="service">서비스</option>
                                <option value="error">오류</option>
                                <option value="etc">기타</option>
                            </select>
                            <div className="select-arrow"></div>
                        </div>
                    </div>
                    <div className="form-input"><label for="input-content">내용</label><input id="input-content" type="text" name="contetent"/></div>
                    <p className="term">
                        <input id="checkbox" className="checkbox"type="checkbox"></input>
                        <Termmodal/>
                    </p>
                </div>
            </form>
            <button className="submit-btn" type="submit" form="contact">문의하기</button>
            
        </div>
        <Footer></Footer>
        </>
    );
}

export default Contact;