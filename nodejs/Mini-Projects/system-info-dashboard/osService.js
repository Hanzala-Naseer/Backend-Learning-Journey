
const os =require("os");

const {roundToTwo}= require("./helper.js");



function getSystemInfo(){

let type= os.type();
let platform=os.platform();
let arch=os.arch();
let hostname=os.hostname();
let uptime=os.uptime();
uptime=Math.floor(uptime/86400);
return ({type,platform,arch,hostname,uptime});

}


function getMemoryInfo(){
    let totalMemory=os.totalmem();
    totalMemory=totalMemory/(1024**3);
    totalMemory=roundToTwo(totalMemory);

    let freeMemory=os.freemem();
    freeMemory=freeMemory/(1024**3);
    freeMemory=roundToTwo(freeMemory);

    let usedMemory=totalMemory-freeMemory;
    usedMemory=roundToTwo(usedMemory);

    return ({totalMemory,freeMemory,usedMemory});
}

function getCpuInfo(){
    let cpus=os.cpus();
   let model=cpus[0].model;
   let speed=cpus[0].speed;
   let cores=cpus.length

   return ({model,speed,cores});


}

function getUserInfo(){
    let user=os.userInfo();
    let username=user.username;
    let homeDir=user.homedir;

    return({username,homeDir});
}


module.exports={
    getSystemInfo,
    getMemoryInfo,
    getCpuInfo,
    getUserInfo
}