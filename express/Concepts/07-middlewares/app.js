const express= require("express");

const app= express();

// json built in middleware that does parsing for us
app.use(express.json()); 

//parsing html forms data

app.use(express.urlencoded({extended:true}));



app.use(express.static("public"));


// custom middleware
app.use((req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
})




app.get("/",(req,res)=>{
    res.send("Home Page");
})


app.get("/about",(req,res)=>{
    res.send("About Page");
})




app.post("/projects", (req, res) => {

    console.log(req.body);

    res.json({
        message:"Project created !",
        user:req.body
    });

});

app.get("/projects",(req,res)=>{
    res.send("Projects Page");
})


const users=[];

app.post("/users", (req, res) => {

    console.log(req.body);

    const user=req.body;
    users.push(user);

    res.json({
        message:"User created !",
        user:req.body
    });

});


app.get("/users",(req,res)=>{
    res.json(users);
})

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    console.log(email);
    console.log(password);

    res.send("Login Successful");

});

app.post("/register",(req,res)=>{
    const {name,rollno,department,semester,email}=req.body;

    if(name=="" || rollno=="" || department=="" ||  semester=="" || email==""){
        return res.status(400).send("All fields required");
    };

    res.send({
        message: "Valid",
        student:{name,rollno,department,semester,email}
    })

})


app.listen(3000,()=>{
    console.log("server started")
})