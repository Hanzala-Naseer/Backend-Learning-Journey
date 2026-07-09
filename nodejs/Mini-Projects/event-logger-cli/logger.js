const fs = require("fs");
const path = require("path");

const logFile = "./logs/activityLogs.txt";

function saveLog(message) {

    const timestamp = new Date().toLocaleString();

    fs.appendFileSync(logFile, `[${timestamp}] ${message}\n`);
    

}

module.exports = {
    saveLog
};