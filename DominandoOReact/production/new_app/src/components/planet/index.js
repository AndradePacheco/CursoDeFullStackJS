import React, {useState,useEffect} from 'react';
import Grey_img from '../shared/grey_img';
import DescriptionWithLink from '../shared/descriptionWithLink';
import Form from './form';
import { useParams, useNavigate} from 'react-router-dom';

async function getPlanet(id){
    const response = await fetch(`http://localhost:3000/api/${id}.json`);
    const result = await response.json();

    return result;
}

const Planet = (props) => {
const [Satellites, setSatellites] = useState([]);
const [planet, setPlanet] = useState({});

const navigate = useNavigate();

let {id} = useParams();
const goToHome = () => {
    navigate('/');
}

const addSatellite = (new_Satellite) =>{
    setSatellites([...Satellites, new_Satellite])
}

useEffect(() => {
    getPlanet(id).then(result => {
        setSatellites(result.satellites);
        setPlanet(result.data);
    })
},[])

    return(
        <div>
            <h4>{planet.name}</h4>
            <DescriptionWithLink description={planet.description} link={planet.link}/>
            <Grey_img img_url = {planet.img_url}/>
            <Form addSatellite={addSatellite} />
            <br/>
            <p>Satélites</p>
            <ul>
                {
                    Satellites.map((satt,index) => 
                        <li key={index}>{satt.name}</li>)
                }
            </ul>
            <button type='button' onClick={goToHome}>Voltar à página inicial</button>
        </div>
    )

}

export default Planet;