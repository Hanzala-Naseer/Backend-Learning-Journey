const http= require("http");

const server =http.createServer((req,res)=>{

    if (req.url==="/" && req.method==="GET"){
        res.statusCode=200;
        res.end("Welcome Home")
    } else if (req.url==="/students" && req.method==="GET"){
        res.statusCode=200;
        res.end("Returning students");
    } else if (req.url==="/students" && req.method==="POST"){
        res.statusCode=201;
        res.end("Student created");

    }else if(req.url==="/error" && req.method==="GET"){
        res.statusCode=500;
        res.end("Internal Server Error");
    }else{
        res.statusCode=404;
        res.end("Page not found 404")
    }
})

server.listen("3000",()=>{
    console.log("Server started")
})