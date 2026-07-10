const {Buffer}=require("buffer");
const fs=require("fs");

const chunks=[];


const readStream=fs.createReadStream("./message.txt");
readStream.on("data",(chunk)=>{
    chunks.push(chunk);
})
readStream.on("end",()=>{
    const b=Buffer.concat(chunks);
    console.log("Total Bytes: ",b.length);
    console.log("Content: ",b.toString());
})


