
const EventEmitter=require("events");

const eventEmitter= new EventEmitter();


eventEmitter.on("studentAdded",(name)=>{
    console.log(`Student ${name} added successfully.`)

})

eventEmitter.emit("studentAdded","Ali");