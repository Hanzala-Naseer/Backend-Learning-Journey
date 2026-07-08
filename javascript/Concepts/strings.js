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

const product="Laptop";
const price=80000;

console.log(`${product} costs PKR ${price}`);