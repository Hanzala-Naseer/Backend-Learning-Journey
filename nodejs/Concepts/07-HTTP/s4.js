const htpp=require("http");

const server=htpp.createServer((req,res)=>{
    console.log(`URL: ${req.url}\nMETHOD: ${req.method}`);

    if(req.url==="/students" && req.method==="GET"){
        res.end("Returning all students");
    }else if(req.url==="/students" && req.method==="POST"){
        res.end("Createing new student")
    }else if (req.url==="/courses" && req.method==="GET"){
        res.end("Returning all courses")
    }else{
        res.end("Page not found....");
    }
})


server.listen("3000",()=>{
    console.log("Server running...")
})