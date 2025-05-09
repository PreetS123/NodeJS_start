const http= require('http');
const fs= require('fs');


const htmlContent= fs.readFileSync('./template/index.html','utf-8');

const server= http.createServer((req,res)=>{
    res.end(htmlContent)
    console.log("server has started")
})

let PORT= 8080
server.listen(PORT,'127.0.0.1',()=>{
    console.log('Server has started listening on',PORT)
})