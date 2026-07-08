console.log(name);//will throw ref error 
let name="Hanzala";

console.log(pi);//again ref error
const pi=3.14;

console.log(age);//wil print un defined 
var age=24;

//why do so beacuse js engine assigns undefined val to variables of type var but not with const and let 
//this will create tdz in which variable cant be accessed until declaration
 