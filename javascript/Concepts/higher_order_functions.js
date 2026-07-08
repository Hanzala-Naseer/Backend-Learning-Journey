function greet(name){
    console.log(`Hi ${name}`);
}

function welcome(callback,name){
    callback(name);
}

welcome(greet,"Ali");



function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}


function calculator(operation,a,b){
    return operation(a,b);
}


console.log(calculator(add,5,5));

console.log(calculator(multiply,5,5));

console.log(calculator(subtract,5,5));

function makeGreeting(){
    return function(){
        console.log("Welcome to JS");
    }
}

const Welcome=makeGreeting();
Welcome();

function multiplyBy(x){
    return function(a){
        return a*x;

    }
}
const double=multiplyBy(2);
console.log(double(5));

const triple=multiplyBy(3);
console.log(triple(9));




function study(){
    console.log("I am studying....");
}

function exercise(){
    console.log("I am doing workout....");
}

function performTask(callback){
    callback();
}

performTask(study);
performTask(exercise);


const arr=["JS","Python","C++","C#","Rust","Ruby","PHP"];
arr.forEach(element => {
    console.log(element);
});


const arr2=[2, 4, 6, 8, 10];
const arr3=arr2.map((n)=>{
    return n*n;
})

console.log(arr3);

const arr5=[5, 10, 15, 20, 25, 30];
const arr6=arr5.filter((n)=>{
    return n>15;
})
console.log(arr6);





