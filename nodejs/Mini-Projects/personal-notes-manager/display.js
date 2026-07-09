function printHeader() {

    console.log(`
==================================================
             PERSONAL NOTES MANAGER
==================================================
`);
}

function printMenu() {

    console.log(`1. Add Note
2. View Notes
3. Delete All Notes
4. Backup Notes
0. Exit
`);
}

function printSuccess(message) {

    console.log(`\n✅ ${message}\n`);

}

function printError(message) {

    console.log(`\n❌ ${message}\n`);

}

function printNotes(notes) {

    console.log(`
==================== NOTES ====================`);

    console.log(notes);

    console.log("===============================================\n");

}

module.exports = {
    printHeader,
    printMenu,
    printSuccess,
    printError,
    printNotes
};