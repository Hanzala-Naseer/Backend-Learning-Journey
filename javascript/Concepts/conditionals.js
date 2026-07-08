const isAdult=(age)=>{
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

let salary=91000;
if(salary>=30000 && salary<=50000){
    console.log("income tax is 1.8 %")

}else if(salary>50000 && salary<=90000){
    console.log("Income tax is 3 %")
}else{
    console.log("income tax is 5 %")
}

