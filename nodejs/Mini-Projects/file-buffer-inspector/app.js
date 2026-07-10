const fs=require("fs");

const display=require("./display");

const command=process.argv[2];
const file=process.argv[3];

if(!command){
    console.log("No command provided.");
    console.log("Usage: node app.js inspect <filename>");
    process.exit(1);
}

if(command!=="inspect"){
    console.log(`Unknown command: "${command}"`);
    console.log("Supported command: inspect");
    console.log("Usage: node app.js inspect <filename>");
    process.exit(1);
}

if(!file){
    console.log("Missing filename.");
    console.log("Usage: node app.js inspect <filename>");
    process.exit(1);
}

if(process.argv.length>4){
    console.log("Too many arguments.");
    console.log("Usage: node app.js inspect <filename>");
    process.exit(1);
}

const chunks=[];
let chunkCount=0;

try{

    const readStream=fs.createReadStream(file);

    readStream.on("data",(chunk)=>{
        chunks.push(chunk);
        chunkCount++;
    });

    readStream.on("end",()=>{
        const data=Buffer.concat(chunks);

        display({
            file,
            data,
            chunkCount
        });
    });

    readStream.on("error",(err)=>{
        console.log(`Error: ${err.message}`);
    });

}catch(err){
    console.log(`Error: ${err.message}`);
}