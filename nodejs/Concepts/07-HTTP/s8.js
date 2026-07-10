const http=require("http");

const server=http.createServer((req,res)=>{

    if(req.url==="/user"){

        const user={
            id:1,
            name:"Hanzala",
            university:"COMSATS"
        };

        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(user));
    }

});

server.listen(3000);