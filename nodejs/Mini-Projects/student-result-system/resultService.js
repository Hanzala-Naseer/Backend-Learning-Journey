const students=require("./students.js");

function getStudentById(id){
    let isStudentFound=false;
for (let i = 0; i< students.length; i++) {
    if(students[i].id===id){
        isStudentFound=true;
        return students[i];
    }   
}
if(!isStudentFound){
    return null;
}
}


function getPassedStudents(){
    let passedStudents=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=50){
            passedStudents.push(students[i]);
        }
    }
    return passedStudents;
}


function getFailedStudents(){
    let failedStudents=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks<50){
            failedStudents.push(students[i]);
        }
    }
    return failedStudents;
}

function getTopper(){
    let topper= students[0];
  
    for(let i=0;i<students.length;i++){
        if(students[i].marks>topper.marks){
            topper=students[i];
        }

    }
    return topper;

}




module.exports={
    getStudentById,
    getPassedStudents,
    getFailedStudents,
    getTopper
}