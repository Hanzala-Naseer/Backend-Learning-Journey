const students= require ("./students.js");
const { roundToTwo } = require("./helper.js");

function getTotalStudents(){
    return students.length;
}
function getHighestMarks(){
    let max=students[0].marks;
    for (let i = 0; i< students.length; i++) {
        if(students[i].marks>max){
            max=students[i].marks;
        }   
    }

    return max;
}

function getLowestMarks(){
    let min=students[0].marks;
    for (let i = 0; i< students.length; i++) {
        if(students[i].marks<min){
            min=students[i].marks;
        }   
    }

    return min;
}
function findAverage() {
    let total = students.length;

    let sum = students.reduce((curr, student) => {
        return curr + student.marks;
    }, 0);

    let avg = sum / total;

    return roundToTwo(avg);
}

module.exports={
    getTotalStudents,
   getHighestMarks,
   getLowestMarks,
   findAverage
}

