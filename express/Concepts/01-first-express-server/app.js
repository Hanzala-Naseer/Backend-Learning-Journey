const express=require("express");

const app= express();

app.get("/",(req,res)=>{
    res.send("Hello from express Server!");
})

app.get("/about",(req,res)=>{
    res.send("About Us")
})

app.get("/status",(req,res)=>{
    res.send("Server is running")
})


app.listen("3000",()=>{
    console.log("Server started");
})