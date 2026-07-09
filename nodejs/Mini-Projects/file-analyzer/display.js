function printHeader() {

    console.log(`
==================================================
                FILE ANALYZER CLI
==================================================
`);

}

function printMenu() {

    console.log(`1. Analyze File Path
2. Join Paths
0. Exit
`);

}

function printFileInfo(info) {

    console.log(`
==================================================
               FILE INFORMATION
==================================================
`);

    console.log(`Original Path : ${info.originalPath}`);
    console.log(`Directory     : ${info.directory}`);
    console.log(`File Name     : ${info.fileName}`);
    console.log(`Name          : ${info.name}`);
    console.log(`Extension     : ${info.extension}`);
    console.log(`Absolute Path : ${info.absolutePath}`);

    console.log(`
==================================================
`);

}

function printJoinedPath(joinedPath) {

    console.log(`
==================================================
                 JOINED PATH
==================================================

${joinedPath}

==================================================
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
    printFileInfo,
    printJoinedPath,
    printSuccess,
    printError
};