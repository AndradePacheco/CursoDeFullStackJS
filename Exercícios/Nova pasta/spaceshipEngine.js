//export default class{
class spaceshipEngine{
    constructor(Spaceship=new Spaceship()){
        this.Spaceship = Spaceship;
    }

    start(){
       let testShield = this.shielTest()
       let verificar = this.verificar()

       Promise.all([testShield,verificar]).then(results => {
        return this.normalization(results[0])
    }).then(atualizado => {
        this.Spaceship.shield = atualizado
        console.log(`${this.Spaceship.spaceShipName} - Partida autorizada: Escudo ${this.Spaceship.shield} - Carga: ${this.Spaceship.porcentagemDeCargaAtual()}`)
    }).catch(erro => {
        console.log(`${this.Spaceship.spaceShipName} Partida não autorizada: ${erro}`)
       })
    }

    normalization(shield){
        return new Promise((resolve, reject) => {
            let normalized = shield*0.7
            if(normalized > 120){
                reject("Falha na normalização")
            }
            else{
                resolve(normalized)
            }
        })
    }

    shielTest(){
        return new Promise((resolve,reject) => {
            if(this.Spaceship.shield*2 < 100){
                reject("Teste de escudo fracassado!")
            }
            else{
                resolve(this.Spaceship.shield*2)
            }
        })
    }

    verificar(){
         return new Promise((resolve,reject) => {
            if(this.Spaceship.porcentagemDeCargaAtual() >= 30 ){
                resolve(this.Spaceship.porcentagemDeCargaAtual())
            }
            else{
                reject("Carga em apenas " +this.Spaceship.porcentagemDeCargaAtual() + "%")
            }
        })
    }
}