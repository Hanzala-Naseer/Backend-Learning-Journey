const fruits=["apple","peach","banana","mango"];
const favFruits=[...fruits];
favFruits.push("apricot");
console.log(fruits);
console.log(favFruits);

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express.js", "MongoDB"];
const techStack=[...frontend,...backend];
console.log(techStack); 


const student = {
    name: "Hanzala",
    age: 21,
    city: "Lahore"
};

const copy={
    ...student,
    city:"ISB"

};

console.log(student);
console.log(copy);

const personalInfo = {
    name: "Hanzala",
    age: 21
};

const academicInfo = {
    university: "Comsats University",
    cgpa: 3.8
};

const mergedObj={
    ...personalInfo,
    ...academicInfo
};
console.log(mergedObj);

let arr5=[10, 20, 30, 40, 50];
let [first,second,...remaining]=arr5;
console.log(first);
console.log(second);
console.log(remaining);


const employee = {
    id: 101,
    name: "Ali",
    designation: "Backend Developer",
    salary: 100000,
    city: "Lahore"
};

let {id,name,...details}=employee;
console.log(id);
console.log(name);
console.log(details);


function Sum(...numbers){
    return numbers.reduce((curr,prev)=>{
        return curr+prev;
    },0)
}


let result=Sum(2,3,55,6,7,89,6,54,3,3);
console.log(result);

const user = {
    username: "hanzala",
    age: 21,
    city: "Lahore",
    country: "Pakistan"
};

let {username,...rem}=user;
const details1={
    ...rem
};

details1.profession="Backend Developer";
console.log(username);
console.log(rem);
console.log(details1);



