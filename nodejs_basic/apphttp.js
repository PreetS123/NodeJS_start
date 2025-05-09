const http= require('http');
const fs= require('fs');


const htmlContent= fs.readFileSync('./template/index.html','utf-8');

const server= http.createServer((req,res)=>{
    const path= req?.url;
    if(path=='/' || path.toLocaleLowerCase()==='/home'){
      res.end(htmlContent);
    }else if(path.toLocaleLowerCase()==='/about'){
        res.end("You are in about section")
    }else if(path.toLocaleLowerCase()==='/contact'){
        res.end("You are in contact section");
    }else{
        res.end("<h1>404: Page Not found!</h1>")
    }
  
    console.log("server has started")
})

let PORT= 8080
server.listen(PORT,'127.0.0.1',()=>{
    console.log('Server has started listening on',PORT)
})