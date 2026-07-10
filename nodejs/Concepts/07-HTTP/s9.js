const http= require("http");
const { json } = require("stream/consumers");

const server= http.createServer((req,res)=>{
    if(req.url==="/students" && req.method==="POST"){

        const chunks=[];
        req.on("data",(chunk)=>{
            chunks.push(chunk);

        })

        req.on("end",()=>{
            let body=Buffer.concat(chunks);
            body=body.toString();
            let student=JSON.parse(body);

            console.log(student);

            res.setHeader("Content-Type","application/json");
            res.statusCode=201;
            res.end(JSON.stringify({
                message:"Student has been created",
                student:student
            }))


        })
    }
})


server.listen(3000);