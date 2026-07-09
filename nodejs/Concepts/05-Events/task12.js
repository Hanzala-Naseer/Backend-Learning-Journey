
const EventEmitter=require("events");

const eventEmitter= new EventEmitter();


eventEmitter.once("festivalOffer",()=>{
    console.log("Festival discount applied!");
})

eventEmitter.emit("festivalOffer");
eventEmitter.emit("festivalOffer");

eventEmitter.emit("festivalOffer");
eventEmitter.emit("festivalOffer");
eventEmitter.emit("festivalOffer");