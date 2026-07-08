//Arithmetic Opertaors
console.log(25+5);// 30 will be printed
console.log(10/5);// 2 will be printed

console.log(24%3);//0 will be printed
console.log(7**3);//343 will be printed  beacuse ** is epxressing power

let number=40;
let result=(number-15)*2;
console.log(result);

//assignment operator

let score =50;
score +=20;
console.log(score);

let balance=1000;
balance-=350;
console.log(balance);

let distance=120;
distance/=4;
console.log(distance);

let x=10;
x+=5;
x*=2;
x-=4;
console.log(x);

//comparison operators
console.log(15=="15")//loose equality it will return true data type doesnt matter
console.log(15==="15");//strict equality will return false bcz of diff data types

console.log(15>10);//true bcz 15 is greater than 10 this > symbol used to check greater than 
console.log(8<=3);//neither 8 is less than 3 nor equal to 3 so false 
console.log("apple"!=="banana");//true because both strings have different number of characters 


//logical operators
// && AND operator will be true when both conditons are true

let age=24;
let isStudent =false;
if (age>18 && isStudent==true){
    console.log("Eligible");
}else{
    console.log("Not eligible");
}

// || OR operator will return true if any statement is true

if (age>18 || isStudent==true){
    console.log("Eligible");
}else{
    console.log("Not eligible");
}

// ! Not operator  check boolean ones

if (!isStudent){// if !isStudent will return false condition will met
    console.log("Not Eligible");
}

//unary operators

let a=9;
a++;//now a will become 10

let b=15;
b--; // now b will become 14

console.log(typeof("Node JS"));//will return string
console.log(typeof(5));//will return number
console.log(typeof(false));//will return boolean

const person={
    name:"Hanzala",
    age:24
}

delete person.age;//this will delete the age key from person object

for (const key in person) {

    console.log(key);  //now only print name 
}

//special operators
let numbers=50;

console.log(numbers>50 ? "Pass" :"Fail");//just a shorter way to write if else 
let username;
console.log(username??"Guest");


const user={
    id:1,
    profile:{
        phone:"+9233445566"
    }
}

console.log(user.profile?.email);//now undefined will be print otherwise without this programme will crash

const obj1={
    name:"Hanzala",
    email:"hanzalanaseer56@gmail.com"
}

console.log("email" in obj1);// this will return true bcz email is present in oj1 as key



