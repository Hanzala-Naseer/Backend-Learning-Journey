const readlineSync = require("readline-sync");

const {
    getSystemInfo,
    getMemoryInfo,
    getCpuInfo,
    getUserInfo
} = require("./osService");

const {
    printHeader,
    printMenu,
    printSystemInfo,
    printMemoryInfo,
    printCpuInfo,
    printUserInfo,
    printError,
    printSuccess
} = require("./display");

let choice;

while (true) {

    printHeader();
    printMenu();

    choice = Number(
        readlineSync.question("Choose an option: ")
    );

    switch (choice) {

        case 1: {
            let sys= getSystemInfo();
            printSystemInfo(sys);


            break;
        }

        case 2: {


            let mem =getMemoryInfo();

             printMemoryInfo(mem);

            break;
        }

        case 3: {

    
            let info=getCpuInfo();

             printCpuInfo(info);

            break;
        }

        case 4: {


            let user=getUserInfo();

            printUserInfo(user);

            break;
        }

        case 0:

            printSuccess("Thank you for using System Information Dashboard.");
            process.exit(0);

        default:

            printError("Invalid option!");

    }

    readlineSync.question("\nPress Enter to continue...");
    console.clear();

}