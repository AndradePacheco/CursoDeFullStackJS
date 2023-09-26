import React, {Fragment,useState,useEffect} from 'react';
import Planet from './planet';
import Form from './form';

async function getPlanets(){
    let response = await fetch("http://localhost:3000/api/planets.json");
    let data = await response.json();

    return data;
}

const Planets = () => {

    const [planets,setPlanets] = useState([]);
    useEffect(() => {
    getPlanets().then(data => {
        setPlanets(data["planets"])
    })
    },[])

    const addPlanet = (planet) => {
        setPlanets([...planets, planet]);
    }

    const removeLastPlanet = () => {
        let new_planet = [...planets];
        new_planet.pop();
        setPlanets(new_planet)
    }

    const duplicateLastPlanet = () => {
        let new_planet = planets[planets.length - 1];
        setPlanets([...planets, new_planet])
    }

    return(
    <Fragment>
        <h3>Planet list</h3>
        <hr/>
        <Form addPlanet = {addPlanet}/>
        <hr/>
        <button onClick={removeLastPlanet}>Remover último Planeta</button>
        <button onClick={duplicateLastPlanet}>Duplicar último Planeta</button>
        <hr/>
        {
            planets.map((planet,index) => 
            <Planet name={planet.name}
                link={planet.link}
                description={planet.description}
                img_url={planet.img_url}
                id = {planet.id}
                key={index}
                />)
        }
    </Fragment>
)}

export default Planets;