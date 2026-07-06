const student={
    name:"Hanzala",
    age:24,
    city:"Gujranwala",
    cgpa:3.43
}

for (const key in student) {

    console.log(`${key} ${student[key]}`);
    
}

console.log(student.name);
console.log(student["city"]);

const employee={};
employee.id=101;
employee.name="Ahmed";
employee.designation="Senior Software Engineer";
employee.salary=120000;

console.log(employee);

console.log(`salary of ${employee.name} before increment: ${employee.salary}`);

employee.salary=150000;
console.log(`Salary of ${employee.name} after increment: ${employee.salary}`);


delete employee.designation;
console.log(`After deleting designation property the updated employee object:`);
console.log(employee);

console.log("salary" in employee);
console.log("department" in employee);

const human={
    "first name":"Hanzala",
    "phone number": +92344556677 
}

console.log(human["first name"]);

