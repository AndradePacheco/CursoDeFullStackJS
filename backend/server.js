const http = require("http");

const server = http.createServer((req,res)=>{
    res.end(`<h3>Hello World!</h3>`)
})

server.listen(3000, () => {console.log("Servidor ativo")})