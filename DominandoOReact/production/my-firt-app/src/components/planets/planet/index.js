import React, {useState,useEffect} from 'react';
import GreyImg from '../../shared/grey_img';
import DescriptionWithLink from './descriptionwithLink';
import Form from './form';

async function getSattelites(id){
        let response = await fetch(`http://localhost:3000/api/${id}.json`);
        let data = await response.json();
        
        return data;
    }
const Planet = (props) => {
    const [satellites,setSatellites] = useState([]);

    const addSattelite = (new_Sattelite) => {
        setSatellites([...satellites,new_Sattelite])
    }

    useEffect(() => {
        getSattelites(props.id).then(data => {
            setSatellites(data["satellites"])
        })
    },[])

    let title
    if(props.title_with_underline) title = <h4><u>{props.name}</u></h4>
    else title = <h4>{props.name}</h4>
    return(
        <div>
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GreyImg img_url={props.img_url} grey={props.grey}/>
            <hr/>
            <Form addSattelite = {addSattelite} />
            <hr/>
            <h4>Satélites</h4>
            <ul>
               {satellites.map((satt,index) => <li key={index}>{satt["name"]}</li>)}
            </ul>
        </div>
    )
}

export default Planet;