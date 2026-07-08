const marks= require("./marks.js");
const {checkHighestMarks,checkLowestMarks,findAverage}=require("./calculation.js");


let highest= checkHighestMarks(marks);
console.log("Highest Marks: ",highest);

let lowest =checkLowestMarks(marks);
console.log("Lowest",lowest);

let avg= findAverage(marks);
console.log("Average: ",avg);