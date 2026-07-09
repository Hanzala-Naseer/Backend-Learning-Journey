const readlineSync = require("readline-sync");

const {
    addNote,
    viewNotes,
    deleteAllNotes,
    backupNotes
} = require("./notesService");

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

    choice = Number(readlineSync.question("Choose an option: "));

    switch (choice) {

        case 1: {
            
            const note = readlineSync.question("\nEnter your note: ");

            addNote(note);



            break;
        }

        case 2: {
            viewNotes();
          
            break;
        }

        case 3: {
          

            const confirm = readlineSync.question(
                "\nAre you sure? (yes/no): "
            );

            if (confirm.toLowerCase() === "yes") {

                 deleteAllNotes()

            }

            break;
        }

        case 4: {
        

            backupNotes()

            break;
        }

        case 0:
            console.log("\nThank you for using Personal Notes Manager.\n");
            process.exit(0);

        default:
            printError("Invalid option!");
    }

    readlineSync.question("\nPress Enter to continue...");
    console.clear();
}