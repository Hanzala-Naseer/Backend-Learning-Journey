function printDetails(obj) {
    console.log("\n===== EMPLOYEE DETAILS =====");

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }

    console.log("============================");
}

module.exports = {
    printDetails
};