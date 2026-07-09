const os=require("os");

const {roundToTwo}= require("./helper.js") ;

let platform= os.platform();

let arch=os.arch();

let host=os.hostname();

let user=os.userInfo();

let totalMem=os.totalmem();
totalMem=totalMem/(1024**3);
totalMem=roundToTwo(totalMem);

let freeMem=os.freemem();
freeMem=freeMem/(1024**3);
freeMem=roundToTwo(freeMem);
console.log(os.cpus());

let cpus= os.cpus();
cpus=cpus.length;

let uptime=os.uptime();

console.log(`
==========================
SYSTEM INFORMATION
==========================
Platform     : ${platform}
Architecture : ${arch}
Host Name    : ${host}
User Name    : ${user.username}
Home Dir     : ${user.homedir}
Total Memory : ${totalMem} GB
Free Memory  : ${freeMem} GB
CPU Cores    : ${cpus}
Uptime       : ${uptime}
Home Dir     : ${os.homedir()}
(os.homedir())

`)

