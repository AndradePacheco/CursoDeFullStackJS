export default class{
    constructor(Spaceship=new spaceship()){
        this.Spaceship = Spaceship;
    }

    start(){
        return new Promise((resolve,reject) => {
            if(this.Spaceship.porcentagemDeCargaAtual() >= 30 ){
                console.log("Lingando a nave!")
                resolve(this.Spaceship.porcentagemDeCargaAtual())
            }
            else{
                console.log("Impossível ligar a nave.")
                reject(this.Spaceship.porcentagemDeCargaAtual())
            }
            this.start().then(porcentagem => {
                console.log(this.Spaceship.spaceshipName + "Partida autorizada: carga atual em " + porcentagem + "%")
            })
            this.start().catch(porcentagem => {
                console.log(this.Spaceship.spaceshipName + "Partida não autorizada: carga atual em " + porcentagem + "%")
            })
        })
    }
}