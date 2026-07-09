function printHeader() {

    console.log(`
=========================================
          EVENT LOGGER CLI
=========================================
`);

}

function printMenu() {

    console.log(`1. User Login
2. User Logout
3. User Registration
4. Purchase Product
5. Download File
0. Exit
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
    printSuccess,
    printError
};