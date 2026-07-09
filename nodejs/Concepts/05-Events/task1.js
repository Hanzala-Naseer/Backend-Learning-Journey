const EventEmitter=require("events");

const eventEmitter= new EventEmitter();
eventEmitter.on("buttonClick",()=>{
    console.log("Button clicked");
})

eventEmitter.emit("buttonClick");