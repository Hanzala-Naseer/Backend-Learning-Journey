const fs = require("fs");

const readStream = fs.createReadStream("./message.txt");

const writeStream = fs.createWriteStream("./copy.txt");

readStream.pipe(writeStream);