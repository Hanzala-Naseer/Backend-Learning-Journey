const fs = require("fs");

const readStream = fs.createReadStream("./abc.txt");

readStream.on("error", (err) => {

    console.log("Error:", err.message);

});