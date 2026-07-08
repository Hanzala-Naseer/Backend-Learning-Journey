function displayStudents(data, title) {
    console.log(`\n===== ${title} =====`);

    if (Array.isArray(data)) {
        for (const student of data) {
            for (const key in student) {
                console.log(`${key}: ${student[key]}`);
            }
            console.log("--------------------");
        }
    } else {
        for (const key in data) {
            console.log(`${key}: ${data[key]}`);
        }
    }

    console.log("====================");
}

function displayStatistics(totalStudents, highest, lowest, average) {
    console.log("\n========== CLASS STATISTICS ==========\n");

    console.log("Total Students :", totalStudents);
    console.log("Highest Marks  :", highest);
    console.log("Lowest Marks   :", lowest);
    console.log("Average Marks  :", average.toFixed(2));

    console.log("\n======================================");
}

module.exports = {
    displayStatistics
};
module.exports = {
    displayStudents,
    displayStatistics
};