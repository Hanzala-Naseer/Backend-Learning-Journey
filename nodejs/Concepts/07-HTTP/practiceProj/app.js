const fs= require("fs");
const http=require("http");

const server= http.createServer((req,res)=>{

    if(req.url==="/"){
        fs.readFile("./pages/index.html",(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end("Failed to load page");
                return;
            }
            res.statusCode=200;
            res.setHeader("Content-Type","text/html");
            res.end(data);
        })
    } else if(req.url==="/contact"){
        fs.readFile("./pages/contact.html",(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end("Failed to load page");
                return;
            }
            res.statusCode=200;
            res.setHeader("Content-Type","text/html");
            res.end(data);
        }) 
    } else if(req.url==="/about"){
        fs.readFile("./pages/about.html",(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end("Failed to load page");
                return;
            }
            res.statusCode=200;
            res.setHeader("Content-Type","text/html");
            res.end(data);
        })
    } else if(req.url==="/services"){
        fs.readFile("./pages/services.html",(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end("Failed to load page");
                return;
            }
            res.statusCode=200;
            res.setHeader("Content-Type","text/html");
            res.end(data);
        })
    }else if(req.url==="/students"){

        const students=[
            {name: "Hanzala", age:24, cgpa:3.45},
            {name: "Ali", age:22, cgpa:3.5},
            {name: "Ahmed", age:23, cgpa:3.6}

        ]
            res.statusCode=200;
            res.setHeader("Content-Type","application/json");
            res.end(JSON.stringify(students));

    }  else if(req.url==="/courses"){

        const courses=[
            {courseName: "DSA", credits:4, isLab:true},
            {courseName: "OOP", credits:4, isLab:true},
            {courseName: "SEC", credits:3, isLab:false}

        ]
            res.statusCode=200;
            res.setHeader("Content-Type","application/json");
            res.end(JSON.stringify(courses));

    }else{
         res.statusCode=500;
        res.setHeader("Content-Type","text/plain");
        res.end("404 page not found");
           
    
    
    }
           
     
    



})



server.listen("3000",()=>{
    console.log("Server strated");
})
