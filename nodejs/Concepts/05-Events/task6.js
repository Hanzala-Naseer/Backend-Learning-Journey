const EventEmitter = require("events");

const eventEmitter = new EventEmitter();


eventEmitter.on("employeeJoined",(employeeName,dept,salary)=>{
    console.log(`
        Employee: ${employeeName}
        Department: ${dept}
        Salary: ${salary}
        `);


})

eventEmitter.emit("employeeJoined","Hanzala","Cloud",125678);


