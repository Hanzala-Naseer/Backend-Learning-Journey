const fs=require("fs");

const writeStream= fs.createWriteStream("./logs.txt");

writeStream.write("Server Started\n");
writeStream.write("Database Connected\n");
writeStream.write("User logged in\n");
writeStream.write("Server Stopped\n");

writeStream.end();

writeStream.on("finish",()=>{
    console.log("logged entered successfully ")
})

writeStream.on("error",(err)=>{
    console.log(err.message);
})