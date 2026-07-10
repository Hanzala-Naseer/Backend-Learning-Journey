const b= Buffer.from("Hello Node Js");
console.log("");
console.log("Raw Buffer: ",b,"\n");


let str= b.toString();
console.log("String Version: ",str,"\n");


console.log("Length of Buffer: ",b.length,"\n");


console.log(`Buffer 1: ${b[0]}\n`);

console.log(`Buffer 2: ${b[1]}\n`);

console.log(`Buffer 3: ${b[2]}\n`);

console.log(`Buffer 4: ${b[3]}\n`);



