let arr1=["Hanzala",24,"Gujranwala"];
let [name,age,city]=arr1;
console.log(name,age,city);

let arr2=[10,20,30,40,50];

let [val1,,val3,,val5]=arr2;
console.log(val1,val3,val5);

let a=15;
let b=25;
[a,b]=[b,a];
console.log(a);
console.log(b);

const student = {
    name: "Hanzala",
    age: 21,
    city: "Lahore",
    cgpa: 3.8
};

const {name:name1,age:age1,city:city1,cgpa:cgpa1}=student;
console.log(name1,age1,city1,cgpa1);

const employee = {
  id: 101,
  name: "Ali"
};

const{id:employeeId,name:employeeName,department="IT"}=employee;

console.log(employeeId,employeeName,department);