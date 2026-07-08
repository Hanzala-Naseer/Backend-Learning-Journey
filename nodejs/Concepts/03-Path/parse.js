const path =require("path");
let file=path.parse("documents/resume.pdf");
console.log(file.dir);
console.log(file.name);
console.log(file.ext);
