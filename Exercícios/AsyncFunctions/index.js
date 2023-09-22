


let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30,45,70],
    firing: false
}

async function adjustPosition(x,y,z){
    if(z > 90){
    return Promise.reject("Ângulo z inválido para a arma!")
    }
    laserGun.currentPosition = [x,y,z]
    return [x,y,z]
}

async function fire(x,y,z){
    laserGun.firing = true
    return [x,y,z]
}

function loadAmmo(){
    return new Promise(resolve => {
        setTimeout( () => {
            resolve("Arma carregada")
        }, 2000)
    })
}

async function moveAndFire(x,y,z){
    try{
    const adjustPositionPromise = adjustPosition(x,y,z)
    const loadAmmoPromise = loadAmmo()
    let promiseResult = await Promise.all([adjustPositionPromise,loadAmmoPromise])
    let newCoor = promiseResult[0]

    console.log(`Arma ajustada para as coordenadas (${newCoor[0]},${newCoor[1]},${newCoor[2]})`)

    let fireCoor = await fire(...newCoor)
    console.log(`Começando a atirar nas coordenadas (${fireCoor[0]},${fireCoor[1]},${fireCoor[2]})`)
    } catch(erro){
        console.log(erro)
    }
}

moveAndFire(20, 40, 9)