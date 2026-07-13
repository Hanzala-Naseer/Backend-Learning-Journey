const express= require("express");
require("dotenv").config();
const port=process.env.PORT;
const bookRoutes=require("./routes/books.js")
const userRoutes=require("./routes/users.js");
const app= express();


app.use(express.json());

app.use("/books",bookRoutes);
app.use("/users",userRoutes);

app.use((req,res)=>{
    res.status(404).json({message:"Route Not Found"});
})


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        message: "Something went wrong."
    });

});
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})

