class Spaceship{
    constructor(sapaceShipName, cargaMaxima, CargaAtual){
        this.sapaceShipName = sapaceShipName;
        this.cargaMaxima = cargaMaxima;
        this.CargaAtual = CargaAtual;
    }

    porcentagemDeCargaAtual(){
        return this.CargaAtual*100 / this.cargaMaxima;
    }
}

export default Spaceship