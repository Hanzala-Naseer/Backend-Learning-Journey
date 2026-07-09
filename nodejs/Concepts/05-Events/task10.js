const EventEmitter=require("events");

const eventEmitter= new EventEmitter();



const user = {
    id:1,
    name:"Hanzala",
    email:"hanzala@gmail.com"
};



eventEmitter.on("userRegistered",(user)=>{
    console.log(`Saving user ${user.id} ... `)

})


eventEmitter.on("userRegistered",(user)=>{
    console.log(`Creating Profile for ${user.name} ... `)
    
})


eventEmitter.on("userRegistered",()=>{
    console.log(`Giving free credits ... `)
    
})

eventEmitter.on("userRegistered",()=>{
    console.log(`Writing activity logs ... `)
    
})


eventEmitter.emit("userRegistered",user);