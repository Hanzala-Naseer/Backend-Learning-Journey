//older and tradional way
function multiply(a,b){
    let result=a*b;
    return result;
}

const result=multiply(4,5);


//arrow functions introduced in ES6 just a way to write functions nothing extra 
const subtract=(a,b)=>{
    if(typeof a!==Number && typeof b!==Number){
        return;
    }
    return a-b;
}

const result2=subtract(2,2);

const getFullName=(firstName,lastName)=>{
    return firstName+" "+lastName;
}

function countVowels(str){
    let vowels=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
            vowels++;
        }
    }
    return vowels;
}

let vowels=countVowels("hello");
console.log(vowels);


//function expressions another way to write funtions

const greet=function (){
    console.log("hi");
}