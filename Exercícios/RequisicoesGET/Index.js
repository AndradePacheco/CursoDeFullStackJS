async function getNeos(){
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY");
    const result = await response.json();
    return result["near_earth_objects"]
}

async function loadNeos(){
    let neos = []
    let neosJSON = await getNeos()
    neosJSON.forEach(neo => {
        const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"];
        const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"];
        const averageDiameter = (minDiameter + maxDiameter)/2;
        const newNeo = new Neo(neo["id"], neo["name"], averageDiameter, neo["is_sentry_object"])
        neos.push(newNeo)
    });
    console.log(neos)
    updateBrowser(neos)
}

function updateBrowser(neos){
    let lista = document.querySelector("ul.neoList")
    neos.forEach(neo => {
        let isSentry = neo.isSentry ? "Perigo de colisão" : "Sem perigo de colisão"
        let li = document.createElement("li")
        li.textContent = `${neo.id} | ${neo.name} | ${neo.averageEstimatedDiameter} | ${isSentry}`

        lista.appendChild(li)
    })
}

loadNeos()

//Função para verificar o que essa api nos retorna
async function getNeoss(){
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY");
    const result = await response.json();
    console.log(response)
    console.log(result)
}
getNeoss()