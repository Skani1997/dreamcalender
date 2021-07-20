import React from 'react';
import '../css/IconBar.css'
import House from '../image/icon-house.png';
import Pipe from '../image/icon-pipe.png';
import Family from '../image/icon-family.png';
import Earth from '../image/icon-earth.png';
import Car from '../image/icon-car.png';

function IconBar(){
    return(
        <div className="IconBar-container">
            <img src={House} alt=""/>
            <img src={Pipe} alt=""/>
            <img src={Earth} alt=""/>
            <img src={Pipe} alt=""/>
            <img src={Family} alt=""/>
            <img src={Pipe} alt=""/>
            <img src={Car} alt=""/> 
        </div> 
    );
}

export default IconBar;