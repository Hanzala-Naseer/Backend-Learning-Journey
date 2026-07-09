const EventEmitter=require("events");

const eventEmitter= new EventEmitter();


eventEmitter.on("orderPlaced",()=>{
    console.log("Saving order....");
})

eventEmitter.on("orderPlaced",()=>{
    console.log("Sending Invoice...  ");
})

eventEmitter.on("orderPlaced",()=>{
    console.log("Updating Inventory....  ");
})


eventEmitter.on("orderPlaced",()=>{
    console.log("Sending Confirmation Mail... ");
})


eventEmitter.emit("orderPlaced");