{
    var name="Hanzala";
    let age=24;
    const mood="happy";
}

console.log(name);
console.log(age);
console.log(mood);

// variables of type var will be printed bc var is not block scoped 
// but age and mood will not printed bcz variables of type let and const are block scoped

for (let i=0;i<5;i++) {
    let str="Hanzala";
    console.log(str);
    
}

console.log(str);//will not printed because of type let it its scope is inside the loop only 

let number=50
if(number===50){
    let str2="Number is equal to 50";
    console.log(str2);
}

console.log(str2);//same scope is only inside the condition or block this will show error


