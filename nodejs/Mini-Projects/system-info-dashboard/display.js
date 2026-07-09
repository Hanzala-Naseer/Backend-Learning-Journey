function printHeader() {

    console.log(`
=========================================
      SYSTEM INFORMATION DASHBOARD
=========================================
`);

}

function printMenu() {

    console.log(`1. View System Information
2. View Memory Information
3. View CPU Information
4. View User Information
0. Exit
`);

}

function printSystemInfo(info) {

    console.log(`
=========================================
        SYSTEM INFORMATION
=========================================
`);

    console.log(`Operating System : ${info.type}`);
    console.log(`Platform         : ${info.platform}`);
    console.log(`Architecture     : ${info.arch}`);
    console.log(`Hostname         : ${info.hostname}`);
    console.log(`System Uptime    : ${info.uptime} Days`);

    console.log(`
=========================================
`);

}

function printMemoryInfo(info) {

    console.log(`
=========================================
        MEMORY INFORMATION
=========================================
`);

    console.log(`Total Memory : ${info.totalMemory}`);
    console.log(`Free Memory  : ${info.freeMemory}`);
    console.log(`Used Memory  : ${info.usedMemory}`);

    console.log(`
=========================================
`);

}

function printCpuInfo(info) {

    console.log(`
=========================================
         CPU INFORMATION
=========================================
`);

    console.log(`Model : ${info.model}`);
    console.log(`Speed : ${info.speed}`);
    console.log(`Cores : ${info.cores}`);

    console.log(`
=========================================
`);

}

function printUserInfo(info) {

    console.log(`
=========================================
        USER INFORMATION
=========================================
`);

    console.log(`Username : ${info.username}`);
    console.log(`Home Dir : ${info.homeDir}`);

    console.log(`
=========================================
`);

}

function printSuccess(message) {

    console.log(`\n✅ ${message}\n`);

}

function printError(message) {

    console.log(`\n❌ ${message}\n`);

}

module.exports = {
    printHeader,
    printMenu,
    printSystemInfo,
    printMemoryInfo,
    printCpuInfo,
    printUserInfo,
    printSuccess,
    printError
};