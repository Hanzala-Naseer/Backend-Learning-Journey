const express= require("express");

const app= express();



app.use((req,res,next)=>{
    console.log(`URL: ${req.url}\nMethod: ${req.method}\nCurrent Date & Time: ${new Date().toLocaleString()}`);
    next();
})




app.get("/",(req,res)=>{
    res.send("Home Page");
})


app.get("/about",(req,res)=>{
    res.send("About Page");
})

app.get("/projects",(req,res)=>{
    res.send("Projects Page");
})

app.listen(3000,()=>{
    console.log("server started")
})