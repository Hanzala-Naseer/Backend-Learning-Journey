const fs=require("fs");
const writeStream=fs.createWriteStream("./quotes.txt");

writeStream.write("Stay hungr\n");
writeStream.write("Stay foolish\n");
writeStream.write("Never Stop LEarning\n")
writeStream.end();

writeStream.on("finish",()=>{
    console.log("Quotes saved successfully.")
});

