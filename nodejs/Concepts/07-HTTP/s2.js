const http=require("http");

const server=http.createServer((req,res)=>{

    if(req.url==="/"){
        res.end("Welcome to Home Page");
    }

    else if(req.url==="/about"){
        res.end("About Us");
    }

    else if(req.url==="/contact"){
        res.end("Contact Us");
    }

    else{
        res.end("404 Page Not Found");
    }

});

server.listen(3000,()=>{
    console.log("Server started...");
});