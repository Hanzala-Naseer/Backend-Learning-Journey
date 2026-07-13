const express= require("express");
const bookRoutes=require("./routes/books.js")
const userRoutes=require("./routes/users.js");
const app= express();


app.use(express.json());

app.use("/books",bookRoutes);
app.use("/users",userRoutes);



app.listen(3000,()=>{
    console.log("Server Started...");
})

