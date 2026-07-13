const express= require("express");

const app= express();


app.get("/",(req,res)=>{
    res.send("Query parameters practice server");
})

app.get("/search",(req,res)=>{
    res.send(req.query.keyword);

})


app.get("/products",(req,res)=>{
    res.send(`Category: ${req.query.category}`);

})


app.get("/students",(req,res)=>{
    res.send(`City: ${req.query.city}`);

})


app.get("/courses",(req,res)=>{
    res.send(`Level: ${req.query.level}\nDuration: ${req.query.duration}`);

})





app.listen(3000,()=>{
    console.log("Server running....");
})



