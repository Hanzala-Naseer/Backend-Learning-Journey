const EventEmitter = require("events");
const { saveLog } = require("./logger");

const eventEmitter = new EventEmitter();

// Listener 1
eventEmitter.on("userLogin", (username) => {
    console.log(`Login time saved for ${username}`);
});

// Listener 2
eventEmitter.on("userLogin", (username) => {
    console.log(`Session created for ${username}`);
});

// Listener 3
eventEmitter.on("userLogin", (username) => {
    console.log("Entry Saved to Logs.txt");
    saveLog(`User ${username} logged in.`);
});



////logout listeners

eventEmitter.on("userLogout", (username) => {
    console.log(`GoodBye ${username}`);

});

eventEmitter.on("userLogout", (username) => {
    console.log(`Session destroyed for ${username}`);
});



eventEmitter.on("userLogout", (username) => {
    console.log("Entry Saved to Logs file");
    saveLog(`User ${username} logged out.`);
});



///register user listners
eventEmitter.on("userRegister", (user) => {
    console.log("Entry Saved to Logs file");
    saveLog(`User ${user.username} registered with email ${user.email}.`);
});


eventEmitter.once("userRegister",(user)=>{
    console.log(`User ${user.username} saved.`)
})


eventEmitter.once("userRegister",(user)=>{
    console.log(`Profile created for ${user.username}.`)
})


eventEmitter.once("userRegister",(user)=>{
    console.log(`Welcome Email sent to ${user.email}.`)
})


eventEmitter.once("userRegister",(user)=>{
    console.log(`Free credits added to ${user.username}'s Account.`)
})



///purchaseOrder

eventEmitter.on("purchaseProduct",(order)=>{
    console.log(`Order saved for ${order.customer}.`);
})


eventEmitter.on("purchaseProduct",(order)=>{
    console.log(`Invoice sent to ${order.customer}.`);
})

eventEmitter.on("purchaseProduct",(order)=>{
    console.log(`Inventory updated for ${order.product}.`);
})

eventEmitter.on("purchaseProduct",()=>{
    console.log(`Admin notified about the purchase..`);
})

eventEmitter.on("purchaseProduct",(order)=>{

    saveLog(`${order.customer} purchased ${order.product} for Rs. ${order.price}.`);
    console.log("Entry saved to logs");
})


//download file

eventEmitter.on("downloadFile",(file)=>{
    console.log(`Download started for ${file}`);
})

eventEmitter.on("downloadFile",(file)=>{
    console.log(`File ${file} verified. `);
})

eventEmitter.on("downloadFile",(file)=>{
    console.log("entry saved to logs");
    saveLog(`File downloaded: ${file}.`);
})







function loginUser(username) {

    console.log(`\n${username} is logging in...\n`);

    eventEmitter.emit("userLogin", username);

}


function logoutUser(username) {

    console.log(`\n${username} is logging out...\n`);

    eventEmitter.emit("userLogout", username);

}

function registerUser(user){
        console.log(`\n${user.username} is being Registered..\n`);
        eventEmitter.emit("userRegister",user);

}


function purchaseProduct(order){
    console.log("Order is being placed....");
    eventEmitter.emit("purchaseProduct",order)

}




function downloadFile(filename){
    eventEmitter.emit("downloadFile",filename);

}

module.exports = {
    loginUser,
    logoutUser,
    registerUser,
    purchaseProduct,
    downloadFile



};