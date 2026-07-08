//variable hoisting 
//first one with var keyword
console.log(name);//this will print undefined bcz js has intialized variable of type var with undefined value at top level;
var name="hanzala";


// in case of let and const 

console.log(age);
console.log(mood);
/// both of these will throw ref error bcz they also hoisted but not assigned value undefined


let age="24";

const mood="Happy";

//so in case of let and const keywords temporal dead zone created bcz they cant be access unless they are initialized


//functions are also hoisted 

greet();//will print hi
function greet(){
    console.log("hi");

}



//but in case of expression functions and arrow functions function names actas variables by JS and behave same like variables do with let and const keywords


sayMyName("Hanzala");//will throw ref error bcz sayMyName will treat as variable by js engine
const sayMyName=function (name){console.log(name)};

hello();//same it will also throw same ref error bcz js engine will treat the hello func name as variable;
const hello=()=>{
    console.log("Hello");
}


