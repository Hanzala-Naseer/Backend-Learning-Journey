const EventEmitter = require("events");

const eventEmitter = new EventEmitter();


eventEmitter.on("patientAdmitted",()=>{
    console.log("Assigning Doctor");
})

eventEmitter.on("patientAdmitted",()=>{
    console.log("Reserving room...");
})

eventEmitter.on("patientAdmitted",()=>{
    console.log("Generating patient id...");
})

eventEmitter.on("patientAdmitted",()=>{
    console.log("notifying reception");
})

eventEmitter.on("patientAdmitted",()=>{
    console.log("creating medical record ");
})


eventEmitter.emit("patientAdmitted");