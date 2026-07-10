const b1= Buffer.from("Node ");
const b2= Buffer.from("Streams ");
const b3= Buffer.from("Rocks! ");

console.log(Buffer.concat([b1,b2,b3]).toString());
