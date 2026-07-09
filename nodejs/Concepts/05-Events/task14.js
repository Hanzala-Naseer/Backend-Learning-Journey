const EventEmitter=require("events");

const eventEmitter= new EventEmitter();



eventEmitter.on("error",(err)=>{
    console.log(err.message);
})

eventEmitter.emit("error", new Error("DB connection failed"));