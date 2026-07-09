const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("login", () => {
    console.log("Save Login Time");
});

eventEmitter.on("login", () => {
    console.log("Send Welcome Message");
});

eventEmitter.on("login", () => {
    console.log("Write Activity Log");
});

eventEmitter.emit("login");