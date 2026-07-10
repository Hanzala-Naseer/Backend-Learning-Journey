
const b= Buffer.alloc(20);
b.write("Hello Node");
console.log(b);

let str=b.toString();
console.log(str);