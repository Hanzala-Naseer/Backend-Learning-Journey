const express= require("express");

const app= express();



//// GET Method

app.get("/",(req,res)=>{
    res.send("Welcome to Hanzala Naseer's Portfolio API");
})

app.get("/users/:username",(req,res)=>{
    console.log(req.params);
    const username=req.params.username;

    res.send(`Welcome ${username}`);
})


app.get("/about",(req,res)=>{
    res.send("Hi, I'm Hanzala Naseer, a final-year Software Engineering student at COMSATS University Islamabad, Wah Campus. I'm passionate about backend development with Node.js, Express.js, and PostgreSQL.");
})

app.get("/education",(req,res)=>{

    const education={
  "university": "COMSATS University Islamabad, Wah Campus",
  "degree": "Bachelor of Science in Software Engineering",
  "status": "Final Year",
  "graduationYear": 2027
};

res.send(education);
})

app.get("/education/:year",(req,res)=>{
    const year= req.params.year;

    res.send(`Graduation year: ${year}`);

res.send(education);
})

app.get("/skills",(req,res)=>{
    const skills=[
  "JavaScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma ORM",
  "React",
  "Tailwind CSS",
  "Git",
  "REST APIs"
];
res.send(skills);
   
})


app.get("/skills:skill",(req,res)=>{

const skill=req.params.skill;

  
res.send(`Skill: ${skill}`);
   
})


app.get("/projects",(req,res)=>{

    const projects=[
  {
    "name": "GymKey",
    "description": "Multi-platform gym membership management system"
  },
  {
    "name": "Event Registration API",
    "description": "Backend API for event management and registrations"
  },
  {
    "name": "Personal Notes CLI",
    "description": "Command-line notes management application"
  }
]
    res.send(projects);
})

app.get("/projects/:id",(req,res)=>{
    const id= req.params.id;


    res.send(`Project ID is: ${id} `);
})



app.get("/contact",(req,res)=>{
    const contactInfo={
  "email": "hanzala@example.com",
  "github": "https://github.com/Hanzala-Naseer",
  "linkedin": "https://linkedin.com/in/hanzala-naseer"
}
    res.send(contactInfo);
})



/// POST Method

app.post("/projects",(req,res)=>{
  res.send("Project created successfully!");
})

// PUT Method

app.put("/projects/:id",(req,res)=>{
  res.send("Project updated successfully...");
})


// PATCH Method

app.patch("/projects/:id",(req,res)=>{
  res.send("Project partially updated successfully...");
})


// DELETE Method

app.delete("/projects/:id",(req,res)=>{
  res.send("Project deleted successfully...");
})



app.listen(3000,()=>{
    console.log("Server is started....")
})