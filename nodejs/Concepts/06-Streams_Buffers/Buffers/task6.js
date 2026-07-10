const { Buffer } = require("buffer");
const b= Buffer.from("Express");

console.log("Normal Text: ",b.toString());

console.log("Hex: ",b.toString("hex"));

console.log("Base64: ",b.toString("base64"));