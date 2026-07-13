const express= require("express");

const app= express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome</h1>");
})


app.get("/about",(req,res)=>{
    res.send("Hi I am Hanzal Naseer final year student at COMSATS Wah");
})


app.get("/courses",(req,res)=>{
    const tech=["Nodes JS","Express JS","Mongo DB"];
    res.send(tech);
})

app.listen("3000",()=>{
    console.log("Server is started....")
})