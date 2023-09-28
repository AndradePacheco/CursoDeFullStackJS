import React, {useState,useEffect} from 'react';
import Grey_img from '../../shared/grey_img';
import DescriptionWithLink from '../../shared/descriptionWithLink';
import { Link } from 'react-router-dom';


const Planet = (props) => {

    return(
        <div>
            <Link to={`/planet/${props.id}`}><h4>{props.name}</h4></Link>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <Link to={`/planet/${props.id}`}><Grey_img img_url = {props.img_url}/></Link>
            <br/>
        </div>
    )

}

export default Planet;