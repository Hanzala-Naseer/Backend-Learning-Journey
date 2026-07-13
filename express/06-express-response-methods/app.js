const express= require("express");

const app= express();


// res.send()

app.get("/",(req,res)=>{
    res.send("Express Response Methods");
})


app.get("/text",(req,res)=>{
    res.send("Plain Text Response using res.send()");
})


app.get("/profile",(req,res)=>{
    res.send({name:"Hanzala",email:"hanzala@gmail.com"});
})



app.get("/skills",(req,res)=>{
    res.send(["node.js","express","dockers"]);
})



// res.json()

app.get("/profile-json",(req,res)=>{

    const user={name:"Hanzala",email:"hanzala@gmail.com"};
    res.json(user);
})



// res.status()

app.get("/success",(req,res)=>{
    res.status(200).send("200 OK Projects fetched Successfully");
})

app.get("/projects",(req,res)=>{
    res.status(201).send("201 Project created Successfully");
})


app.get("/bad-request",(req,res)=>{
    res.status(400).send("400 Bad Request");
})

app.get("/unauthorized",(req,res)=>{
    res.status(401).send("401 Unauthorized");
})

app.get("/forbidden",(req,res)=>{
    res.status(403).send("403 Forbidden");
})


app.get("/not-found",(req,res)=>{
    res.status(404).send("404 Not Found");
})


app.get("/server-error",(req,res)=>{
    res.status(500).send("500 Internal Serve Error");
})


app.listen(3000,(req,res)=>{
    console.log("Server running.....")
})