//const Spaceship = required("./spaceship.js")
//const spaceshipEngine = required("./spaceshipEngine")

let Sophia = new Spaceship("Sophia",10,5,70)
let Amsterda = new Spaceship("Amsterdã",14,10,40)
let EstrelaAna = new Spaceship("Estrela-Anã",20,4,80)

let engine1 = new spaceshipEngine(Sophia)
let engine2 = new spaceshipEngine(Amsterda)
let engine3 = new spaceshipEngine(EstrelaAna)

engine1.start()
engine2.start()
engine3.start()
