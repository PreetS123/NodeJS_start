const http= require('http');


const server= http.createServer((req,res)=>{
    res.end("Hello server")
    console.log("server has started")
})

let PORT= 8080
server.listen(PORT,'127.0.0.1',()=>{
    console.log('Server has started listening on',PORT)
})