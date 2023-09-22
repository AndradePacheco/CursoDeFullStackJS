class Spaceship{
    constructor(spaceShipName, cargaMaxima, CargaAtual,shield){
        this.spaceShipName = spaceShipName;
        this.cargaMaxima = cargaMaxima;
        this.CargaAtual = CargaAtual;
        this.shield = shield;
    }

    porcentagemDeCargaAtual(){
        return this.CargaAtual*100 / this.cargaMaxima;
    }
}

//export default Spaceship