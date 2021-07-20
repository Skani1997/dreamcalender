import React from 'react';
import '../css/UsageBox.css';

function UsageBox(props){
    return(
        <div className="usagebox-container">
            <h1 className="usagebox-title">{props.title}</h1>
            <h1 className="usagebox-subtitle">{props.subtitle}</h1>  
            <p className="usagebox-img-title">{props.imgtitle}</p>
            <img className="usagebox-img" src={props.img} alt=""/>
            {/* eslint-disable-next-line*/}
            <p className="usagebox-description" dangerouslySetInnerHTML={{__html: props.description.replace(new RegExp('\n', 'g') , '<br/>')}}/>
            {/* eslint-disable-next-line*/}
            <p className="usagebox-description-small" dangerouslySetInnerHTML={{__html: props.descriptionSmall.replace(new RegExp('\n', 'g') , '<br/>')}}/>
        </div>
    );
}

export default UsageBox;