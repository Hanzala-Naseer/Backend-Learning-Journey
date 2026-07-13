const express= require("express");

const app= express();


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


app.get("/profile-json",(req,res)=>{

    const user={name:"Hanzala",email:"hanzala@gmail.com"};
    res.send(user);
})





app.listen(3000,(req,res)=>{
    console.log("Server running.....")
})