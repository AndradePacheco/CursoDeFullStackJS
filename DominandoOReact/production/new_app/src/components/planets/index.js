import React,{Fragment,useState,useEffect} from 'react';
import Planet from './planet';
import Form from './form';

async function getPlanets(){
    const response = await fetch("http://localhost:3000/api/planets.json");
    const result = await response.json()

    return result;
}

const Planets = () => {
    const [planets,setPlanets] = useState([]);

    useEffect(() =>{
        getPlanets().then(data => {
            setPlanets(data["planets"])
        })
    },[])

    const addPlanet = (new_Planet) => {
        setPlanets([...planets, new_Planet])
    } 

    const removeLastPlanet = () => {
        let planet = [...planets];
        planet.pop();
        setPlanets(planet);
    }

    const duplicateLastPlanet = () => {
        let new_Planet = planets[planets.length - 1];
        setPlanets([...planets, new_Planet]);
    }

    return(
        <Fragment>
            <hr/>
            <Form addPlanet={addPlanet}/>
            <hr/>
            <br/>
            <h3>Planets list</h3>
            <button onClick={removeLastPlanet}>Remover último planeta</button>
            <button onClick={duplicateLastPlanet}>Duplicar último planeta</button>
            {
                planets.map((planet,index) => 
                    <Planet id={planet.id}
                            name={planet.name}
                            description={planet.description}
                            link={planet.link}
                            img_url={planet.img_url} 
                            key={index}/>
                )
            }
        </Fragment>
    )
}

export default Planets;