async function sentryService(){
     const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/sentry?api_key=DEMO_KEY")
     const result = await response.json()
    console.log(result)

    return result["sentry_objects"]
}

async function chargeObjects(){
    const objects = await sentryService();
    let objectsList = [];

    objects.forEach(sentryObject => {
        const id = sentryObject["sentryId"]
        const name = sentryObject["fullname"]
        const minYears = sentryObject["year_range_min"]
        const maxYears = sentryObject["year_range_max"]
        const newSentryObject = new Sentry(id,name,minYears,maxYears)

        objectsList.push(newSentryObject)
    });
    console.log(objectsList)
    console.log("Hello World")
    renderObjects(objectsList);
}

function renderObjects(objectsList){
    let lista = document.querySelector("ol.objectsList");

    objectsList.forEach(sentryObject => {
        let li = document.createElement("li");
        li.textContent = `(${sentryObject.id}) ${sentryObject.name}: risco de colisão entre ${sentryObject.minYears} e ${sentryObject.maxYears}`;
        lista.appendChild(li);
    })
}

chargeObjects()
