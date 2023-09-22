const spaceShip = {
    name: "Komodo",
    bateryCharge: 50,
    consumoPorSegundos: 0.00008
}

const updateBateryCharge = function(chargeConsumed){
    return new Promise((resolve, reject) => {
        spaceShip.bateryCharge -= chargeConsumed;
        if(spaceShip.bateryCharge > 0){
            resolve(spaceShip.bateryCharge)
        }
        else{
            reject("Bateria esgotada, a nave irá parar em alguns segundos")
        }
    })
}

const CalcularBateria = function(velocity,seconds){
    return new Promise((resolve,reject) => {
        if(spaceShip.bateryCharge <= 0 || spaceShip.consumoPorSegundos <= 0){
            reject("A nave está parada!!")
        }
        else{
            let cargaConsumida = spaceShip.consumoPorSegundos * velocity * seconds;
            resolve(cargaConsumida)
        }
    })
}

CalcularBateria(90,300).then(cargaConsumida => {
    updateBateryCharge(cargaConsumida).then(bateryCharge => {
        console.log(`Carga da Bateria: ${bateryCharge}`);
    }).catch(erro => {console.log(erro)})
}).catch(erro => {console.log(erro)})