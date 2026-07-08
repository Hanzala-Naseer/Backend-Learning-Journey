
const { getStudentById, getPassedStudents,getFailedStudents,getTopper } = require("./resultService");
const {getHighestMarks,getLowestMarks,getTotalStudents,findAverage}=require("./statictics.js");
const students= require("./students.js")
const { displayStudents,displayStatistics } = require("./display");
const readlineSync = require("readline-sync");

console.log(`==================================================
        STUDENT RESULT MANAGEMENT SYSTEM
==================================================`);

let choice;

while (true) {
    console.log(`
1. View All Students        
2. Search Student by ID
3. View Passed Students
4. View Failed Students
5. View Topper
6. View Class Statistics

0. Exit
`);

    choice = Number(readlineSync.question("Choose an option: "));

    switch (choice) {
        case 1:
            displayStudents(students,"ALL STUDENTS");
            break;
        case 2:
            let id = Number(readlineSync.question("Enter Student ID: "));
            let student = getStudentById(id);

            if (student === null) {
                console.log("\nStudent not found!\n");
            } else {
                displayStudents(student,"STUDENT DETAILS");
            }
            break;

        case 3:
            const passedStudents = getPassedStudents();
            displayStudents(passedStudents,"PASSED STUDENTS");
            break;
        case 4:
            const failedStudents=getFailedStudents();
            displayStudents(failedStudents,"FAILED STUDENTS");
            break;
        case 5:
            const topper=getTopper();
            displayStudents(topper,"TOPPER STUDENT/s");
            break;
        case 6:
            let highestMarks=getHighestMarks();
            let lowestMarks=getLowestMarks();
            let totalStudents=getTotalStudents();
            let avg=findAverage();
            displayStatistics(totalStudents,highestMarks,lowestMarks,avg);
            break;
        


        case 0:
            console.log("\nThank you for using Student Result Management System.");
            process.exit(0);

        default:
            console.log("\nInvalid choice! Please try again.\n");
    }
}