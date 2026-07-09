const EventEmitter=require("events");

const eventEmitter= new EventEmitter();


eventEmitter.on("resultPublished",(student)=>{
    console.log(`Result published for ${student.name}.`)
})

eventEmitter.on("resultPublished",()=>{
    console.log(`Sending SMS....`);
})


eventEmitter.on("resultPublished",()=>{
    console.log(`Writing result log...`);
})


let student={
    id:1,
    name:"Ali",
    marks:87
}

eventEmitter.emit("resultPublished",student);

