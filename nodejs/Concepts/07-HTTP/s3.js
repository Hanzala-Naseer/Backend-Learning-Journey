const http= require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/users" && req.method=="GET"){
          res.end("Returning all users");

    }
  
})


server.listen("3000",()=>{
    console.log("Server is running ");
})