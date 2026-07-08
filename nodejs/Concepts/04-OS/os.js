const os=require("os");

let platform= os.platform();

let arch=os.arch();

let host=os.hostname();

let user=os.userInfo();

console.log(`
==========================
SYSTEM INFORMATION
==========================
Platform     : ${platform}
Architecture : ${arch}
Host Name    : ${host}
User Name    : ${user.username}
Home Dir     : ${user.homedir}
`)

