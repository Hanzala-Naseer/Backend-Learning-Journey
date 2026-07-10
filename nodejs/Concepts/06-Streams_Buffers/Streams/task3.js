const fs = require("fs");

const writeStream = fs.createWriteStream("./students.txt");

writeStream.write("Ali\n");
writeStream.write("Ahmed\n");
writeStream.write("Hanzala\n");
writeStream.write("Raza\n");

writeStream.end();

writeStream.on("finish", () => {
    console.log("Students saved successfully.");
});

writeStream.on("error", (err) => {
    console.log("Failed to write.");
    console.log(err.message);
});