let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");

let arr=[2,4,5,6,7,9,33];

arr.forEach((val)=>{
    console.log(val*val);
});

let marks=[40,50,70,98,85,90,99,97,10,40];

let highMarks=marks.filter((val)=>{
    return val>=90;
});

console.log(highMarks);

let arr2=[2,33,4,5,33,34,34,45];

let sum=arr2.reduce((res,curr)=>{
    return res+curr;
});

console.log(sum);

let prod=arr2.reduce((res,curr)=>{
    return res*curr;
});

console.log(prod);