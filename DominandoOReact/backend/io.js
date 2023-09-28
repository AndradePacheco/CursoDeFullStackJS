const process = require('process')

console.log("Digite o seu nome: ");

process.stdin.on("data", (keyboard) => {
    process.stdout.write(`Seu nome é: ${keyboard}`);
    process.exit();
})