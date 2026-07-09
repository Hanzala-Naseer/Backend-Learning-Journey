const EventEmitter=require("events");

const eventEmitter= new EventEmitter();

eventEmitter.on("deposit",(amount)=>{
    console.log(`Rs.${amount} has been deposited successfully.`);
})


eventEmitter.emit("deposit",15678);

