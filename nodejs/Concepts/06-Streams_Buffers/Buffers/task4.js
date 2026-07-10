const buffer=Buffer.from("Hello");

buffer[0]=74;

console.log(buffer.toString());