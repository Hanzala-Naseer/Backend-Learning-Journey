const http=require("http");
const { json } = require("stream/consumers");

let students=[];


const server=http.createServer((req,res)=>{
    let chunks=[];
    if(req.url==="/users" && req.method==="POST"){

        req.on("data",(chunk)=>{
            chunks.push(chunk);

        });

        req.on("end",()=>{
            let body=Buffer.concat(chunks);
            let data=body.toString();

                if (!data) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                return res.end(JSON.stringify({ message: "body required" }));
            }
          try {
            let user=JSON.parse(data);
            console.log(user);

            res.setHeader("Content-Type","application/json");
            res.statusCode=201;

            res.end(JSON.stringify({message:"User created"}))
            
          } catch (error) {

             console.log("Failed! Data is not JSON.");
        
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Invalid JSON format" }));
            
          }
        })
    }else if(req.url==="/products" && req.method==="POST"){
   

        let chunks=[];
        req.on("data",(chunk)=>{
            chunks.push(chunk);

        })
        req.on("end", () => {
    let body = Buffer.concat(chunks);
    let data = body.toString();
        if (!data) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                return res.end(JSON.stringify({ message: "body required" }));
            }

    try {
        let product = JSON.parse(data); 
        console.log(product);

        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(product));

    } catch (error) {
        console.log("Failed! Data is not JSON.");
        
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Invalid JSON format" }));
    }
});
    }  else if(req.url==="/students" && req.method==="POST"){


        req.on("data",(chunk)=>{
            chunks.push(chunk);

        });

        req.on("end",()=>{
            let body=Buffer.concat(chunks);
            let data=body.toString();
               if (!data) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                return res.end(JSON.stringify({ message: "body required" }));
            } 
          try {
            let student=JSON.parse(data);
            console.log(student);
            students.push(student);
           

            res.setHeader("Content-Type","application/json");
            res.statusCode=201;

            res.end(JSON.stringify({message:"Student created"}))
            
          } catch (error) {

             console.log("Failed! Data is not JSON.");
        
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Invalid JSON format" }));
            
          }
        })
    } else if(req.url==="/students" && req.method==="GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode=200;

        res.end(JSON.stringify(students));
    }
  
})
server.listen("3000",()=>{
    console.log("server started");
});