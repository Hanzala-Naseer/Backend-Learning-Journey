const fs = require("fs");

console.log("Program Started");

fs.readFile("./profile.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Failed to read file.");
        return;
    }

    console.log("File Contents:");
    console.log(data);
});

console.log("Program Finished");