const readlineSync = require("readline-sync");

const {
    analyzePath,
    joinPath,
} = require("./pathService");

const {
    printHeader,
    printMenu,
    printFileInfo,
    printJoinedPath,
    printSuccess,
    printError
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



            const filePath = readlineSync.question(
                "\nEnter file path: "
            );

            let fileData=analyzePath(filePath);

            printFileInfo(fileData);

            break;
        }

        case 2: {

            const folderPath = readlineSync.question(
                "\nEnter folder Path: "
            );

        

            const fileName = readlineSync.question(
                "Enter filename: "
            );

            let joinedPath=joinPath(folderPath,fileName);

            printJoinedPath(joinedPath);

            break;
        }

        case 0:

            printSuccess("Thank you for using File Analyzer CLI.");
            process.exit(0);

        default:

            printError("Invalid option!");

    }

    readlineSync.question("\nPress Enter to continue...");
    console.clear();

}