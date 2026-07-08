const fs =require("fs");

fs.writeFileSync("./bio.txt","Hanzala\nComsats\nBS SE");
fs.writeFileSync("./skill.txt","Frontend Backend Cloud Devops Kubernetes");
fs.writeFileSync("./todo.txt","Do Exercise\nEat your Meal\nOffer Prayer\nDo good deeds");


let data="Hanzala\nComsats";
console.log("Writing Started....");
fs.writeFile("./about.txt",data,(error)=>{
    if(error){
        console.log("Failed to write!")
        return;
    }
    console.log("File Created successfully...");
});
console.log("Program continues...");

let courses="DSA\nOOP\nSRE";
fs.writeFile("./courses.txt",courses,(error)=>{
    if(error){
        console.log("Failed to write...");
        return;
    }
    console.log("Written successfully....");
})

courses="jksjasjksajk";
fs.writeFile("./courses.txt",courses,(error)=>{
    if(error){
        console.log("Failed to write...");
        return;
    }
    console.log("Written successfully....");


})
let attendance="Ali - Present\n";

fs.appendFileSync("./attendance.txt",attendance);

attendance="Ahmed - Present\n";

fs.appendFileSync("./attendance.txt",attendance);

attendance="Raza - Present\n";

fs.appendFileSync("./attendance.txt",attendance);


let entry="dated:07-07-2026 ajahsjhjas\n";
fs.appendFileSync("./journal.txt",entry);


entry="dated:07-07-2026 ajahsjhjas\n";
fs.appendFileSync("./journal.txt",entry);

entry="dated:07-07-2026 ajahsjhjas\n";
fs.appendFileSync("./journal.txt",entry);


let expense="Food 1298 pkr\n";
fs.appendFileSync("./expenses.txt",expense);

expense="Transport 2567pkr\n";
fs.appendFileSync("./expenses.txt",expense);

expense="Internet 2999pkr\n";
fs.appendFileSync("./expenses.txt",expense);


let title=`====================
Daily Tasks
====================\n`;
fs.writeFileSync("./tasks.txt",title);
fs.appendFileSync("./tasks.txt","1. Learn Node JS\n");
fs.appendFileSync("./tasks.txt","2. Practicing Coding\n");
fs.appendFileSync("./tasks.txt","3. Go to Gym\n");
fs.appendFileSync("./tasks.txt","4. Push o Github\n");


fs.unlink("./temp.txt",(err)=>{
    if(err){
        console.log("Fai;ed to delet file");
        return;    
    }
    console.log("File deleted successfully");
})

fs.renameSync("./skill.txt","./skill2.txt");
fs.rename("./notes.txt","./notes121.txt",(err)=>{
    if(err){
        console.log("Failed to rename");
        return;
    }
    console.log("Renamed successful");
})







