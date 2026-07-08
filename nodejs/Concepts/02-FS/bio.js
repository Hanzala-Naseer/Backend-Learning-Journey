const fs= require("fs");
let data=fs.readFileSync("./bio.txt","utf8");
console.log(data);

console.log("Number of Characters: ",data.length);
console.log("Content in Upper Case: ",data.toUpperCase());
console.log(data.split(/\r?\n/));