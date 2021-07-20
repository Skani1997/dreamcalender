import React from 'react';
import '../css/ConfigBox.css';

function ConfigBox(props){
    return(
        <div className="configbox-container">
            <img className="configbox-img" src={props.img} alt=""/>
            <div className="configbox-innercontainer">
                {/* eslint-disable-next-line*/}
                <h1 className="configbox-title" dangerouslySetInnerHTML={{__html: props.title.replace(new RegExp('\n', 'g') , '<br/>')}}/>
                {/* eslint-disable-next-line*/}
                <p className="configbox-description" dangerouslySetInnerHTML={{__html: props.description.replace(new RegExp('\n', 'g') , '<br/>')}}/>
            </div>
        </div>
    );
}

export default ConfigBox;