const EventEmitter = require("events");

const eventEmitter = new EventEmitter();


function sendNotification(){
    console.log("notification sent!")
}

eventEmitter.on("newMessage",sendNotification);

eventEmitter.emit("newMessage");

eventEmitter.off("newMessage",sendNotification);

eventEmitter.emit("newMessage");