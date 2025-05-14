const http = require("http");
const fs = require("fs");

const htmlContent = fs.readFileSync("./template/index.html", "utf-8");
let products= JSON.parse(fs.readFileSync("./Data/product.json","utf-8"));

const server = http.createServer((req, res) => {
  const path = req?.url;
  if (path == "/" || path.toLocaleLowerCase() === "/home") {
    res.writeHead(200,{
        'Content-Type':'text/html',
         'my-header':'Hellow, world'
    })
    res.end(htmlContent.replace("{{%CONTENT%}}", "You are in home page"));
  } else if (path.toLocaleLowerCase() === "/about") {
     res.writeHead(200,{
        'Content-Type':'text/html',
         'my-header':'Hellow, world'
    })
    res.end(htmlContent.replace("{{%CONTENT%}}", "You are in about page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
     res.writeHead(200,{
        'Content-Type':'text/html',
         'my-header':'Hellow, world'
    })
    res.end(htmlContent.replace("{{%CONTENT%}}", "You are in Contact page"));
  } else if (path.toLocaleLowerCase() === "/product") {
     res.writeHead(200,{
        'Content-Type':'text/html',
         'my-header':'all-products'
    })
     const productContent =products.map((item)=>{
        return (
            ` <div style="border: 1px solid #ccc; padding: 16px; margin: 16px; border-radius: 8px; max-width: 400px;">
            <h2>${item.name}</h2>
            <img src="${item.productImage}" alt="${item.name}" style="width: 100%; max-height: 250px; object-fit: cover;"/>
            <p><strong>Color:</strong> ${item.color}</p>
            <p><strong>Model:</strong> ${item.modeName} (${item.modelNumber})</p>
            <p><strong>ROM:</strong> ${item.ROM} GB</p>
            <p><strong>Display:</strong> ${item.size}</p>
            <p><strong>Camera:</strong> ${item.camera}</p>
            <p><strong>Description:</strong> ${item.Description}</p>
            <p><strong>Price:</strong> $${item.price}</p>
        </div>`
        )
     })
    res.end(htmlContent.replace("{{%CONTENT%}}", productContent));
  } else {
    res.writeHead(404)
    res.end(
      htmlContent.replace("{{%CONTENT%}}", "<h1>404: Page Not found!</h1>")
    );
  }

  console.log("server has started");
});

let PORT = 8080;
server.listen(PORT, "127.0.0.1", () => {
  console.log("Server has started listening on", PORT);
});
