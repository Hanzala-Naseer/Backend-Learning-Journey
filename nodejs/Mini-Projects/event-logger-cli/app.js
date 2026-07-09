const readlineSync = require("readline-sync");

const {
    loginUser,
    logoutUser,
    registerUser,
    purchaseProduct,
    downloadFile
} = require("./eventService");

const {
    printHeader,
    printMenu,
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

            const username = readlineSync.question(
                "\nEnter Username: "
            );

            loginUser(username);

            break;
        }

        case 2: {

       

            const username = readlineSync.question(
                "\nEnter Username: "
            );

            logoutUser(username);

            break;
        }

        case 3: {


            const username = readlineSync.question(
                "\nEnter Username: "
            );

            const email = readlineSync.question(
                "Enter Email: "
            );

          

             registerUser({username,email});

            break;
        }

        case 4: {

         

            const customer = readlineSync.question(
                "\nCustomer Name: "
            );

            const product = readlineSync.question(
                "Product Name: "
            );

            const price = Number(
                readlineSync.question("Price: ")
            );

             purchaseProduct({customer,product,price});

            break;
        }

        case 5: {

           

            const filename = readlineSync.question(
                "\nEnter Filename: "
            );

            downloadFile(filename);

            break;
        }

        case 0:

            printSuccess("Thank you for using Event Logger CLI.");
            process.exit(0);

        default:

            printError("Invalid option!");

    }

    readlineSync.question("\nPress Enter to continue...");
    console.clear();

}