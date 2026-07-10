const fs = require("fs");

const readStream = fs.createReadStream("./message1.txt");

readStream.on("data", (chunk) => {
    console.log("========== NEW CHUNK ==========");
    console.log(chunk.toString());
});

readStream.on("end", () => {
    console.log("Reading completed");
});

readStream.on("error", (err) => {
    console.log("Failed to read file.");
    console.log(err.message);
});