const fs= require("fs");

fs.mkdirSync("./project");
fs.mkdirSync("./project/uploads");
fs.mkdirSync("./project/logs");
fs.mkdirSync("./project/data");


fs.mkdirSync(".project/uploads/images");
fs.mkdirSync(".project/uploads/documents");
fs.mkdirSync(".project/uploads/videos");


let arr=fs.readdirSync("./project/uploads");
console.log(arr);

fs.mkdirSync("./students");
fs.mkdirSync("./students/semester1");
fs.mkdirSync("./students/semester2");
fs.mkdirSync("./students/semester3");

fs.rmdirSync("./students/semester3");
fs.rmdirSync("./students",{recursive:true});




