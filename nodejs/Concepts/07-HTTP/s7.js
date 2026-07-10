const http= require("http");

const server =http.createServer((req,res)=>{

    if (req.url==="/" && req.method==="GET"){
        res.statusCode=200;
        res.setHeader("Content-Type","text/plain")
        res.end("Welcome Home")
    } else if (req.url==="/about" && req.method==="GET"){
        res.statusCode=200;
        res.setHeader("Content-Type","text/html")

        res.end("<h1>About Page</>");
    } else if(req.url==="/user"){

        let user={
            name:"Hanzala",
            university:"Comsats",
            semester:8
        }
        res.statusCode=200;
        res.setHeader("Project","HTTP Module Practice")
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(user));


    }else{
        res.setHeader("Content-Type","text/plain")
        res.statusCode=404;
        res.end("Page not found 404")
    }
})

server.listen("3000",()=>{
    console.log("Server started")
})