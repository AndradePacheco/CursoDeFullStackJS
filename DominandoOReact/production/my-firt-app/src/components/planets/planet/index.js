import React from 'react';
import GreyImg from '../../shared/grey_img';
import DescriptionWithLink from './descriptionwithLink';


const Planet = (props) => {
    return(
        <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GreyImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet;