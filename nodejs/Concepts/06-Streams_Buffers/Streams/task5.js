const fs= require("fs");

const writeStream=fs.createWriteStream("./employees.txt");

writeStream.write("Ahmed\n");

writeStream.write("Ahmed\n");

writeStream.write("Ahmed\n");

writeStream.write("Ahmed\n");

writeStream.write("Ahmed\n");

writeStream.write("Ahmed\n");

writeStream.end();