const http =require("http");

// const server= http.createServer((req,res)=>{
//     res.setHeader("Content-Type","text/plain")
//     res.end("Hello world");
// })


// const server= http.createServer((req,res)=>{
//    res.setHeader("Content-Type","text/html");

//     res.end("<h1>Hello World</h1>");
// })


const server= http.createServer((req,res)=>{
  const user={
    id:1,
    name:"Hanzala"
};

res.setHeader("Content-Type","application/json");

res.end(JSON.stringify(user));
})

server.listen("3000",()=>{
    console.log("Server started");
})




