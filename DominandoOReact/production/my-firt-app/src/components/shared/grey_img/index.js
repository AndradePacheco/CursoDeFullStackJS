import React, {Fragment} from 'react';
import './style.css';

const GreyImg = (props) => {
    return(
        <div>
             <img className="greyImg" src={props.img_url}></img>
        </div>
    )
}

export default GreyImg;