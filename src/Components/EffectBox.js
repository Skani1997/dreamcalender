import React from 'react';
import '../css/EffectBox.css';

function EffectBox(props){
    return(
        <div className="effectBox-container">
            <img className="effectBox-img" src={props.img} alt=""/>
            <div className="effectBox-innercontainer">
                <button className="effectBox-title">{props.title}</button>
                {/* eslint-disable-next-line*/}
                <p className="effectBox-description" dangerouslySetInnerHTML={{__html: props.description.replace(new RegExp('\n', 'g') , '<br/>')}}/>
          </div>
        </div>
    );
}

export default EffectBox;