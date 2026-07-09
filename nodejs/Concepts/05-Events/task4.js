
const EventEmitter=require("events");

const eventEmitter= new EventEmitter();

eventEmitter.on("userLogin",()=>{
    console.log("Updating last login...");
})

eventEmitter.on("userLogin",()=>{
    console.log("creating session....");
})

eventEmitter.on("userLogin",()=>{
    console.log("writing login logs...");

})

eventEmitter.emit("userLogin");