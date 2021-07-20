import React from 'react';
import HeaderContent from '../Components/HeaderContent';
import HeaderNav from '../Components/HeaderNav';
import SurveyModal from '../Components/Surveymodal';
import downArrow from '../image/down_arrow.png';
import '../css/Header.css';

function Header() {
  return (
      <header className="header-container">
        <div className="slide">
          <div className="header-content-container">
            <HeaderNav></HeaderNav>
            <HeaderContent></HeaderContent>
            <SurveyModal></SurveyModal>
            <img className="down-arrow" src={downArrow} alt=""></img>
          </div>
          
          <ul className="slide-ul">
              <li className="bg-drive slide-li"></li>
              <li className="bg-sky slide-li"></li>
              <li className="bg-dding slide-li"></li>
              <li className="bg-family slide-li"></li>
              <li className="bg-money slide-li"></li>
              <li className="bg-money slide-li"></li>
           </ul>
        </div> 
      </header>
  );
}

export default Header;
