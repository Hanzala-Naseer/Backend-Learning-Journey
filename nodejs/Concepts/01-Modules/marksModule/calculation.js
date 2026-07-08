
function checkHighestMarks(marks){
    let max=marks[0];
    for (let i = 0; i< marks.length; i++) {
        if(marks[i]>max){
            max=marks[i]
        }   
    }

    return max;
}

function checkLowestMarks(marks){
    let min=marks[0];
    for (let i = 0; i< marks.length; i++) {
        if(marks[i]<min){
            min=marks[i]
        }   
    }

    return min;
}

function findAverage(marks){
    let total=marks.length;
    let sum=marks.reduce((curr,prev)=>{
        return curr+prev;
        
    },0);
    let avg = sum/total;
    return avg;

}

module.exports={
    checkHighestMarks,
    checkLowestMarks,
    findAverage
}

