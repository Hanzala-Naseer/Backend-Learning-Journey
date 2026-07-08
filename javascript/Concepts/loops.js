for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

let arr=[85,97,44,37,76,60];
let sum=0;

for(const element of arr){
    sum=sum+element;
}

let average=sum/arr.length;
console.log(average);

let orgPrices=[250,645,300,900,50];

for(let i=0;i<orgPrices.length;i++){
    let disc=orgPrices[i]*0.10;
    let finalPrice=orgPrices[i]-disc;
    orgPrices[i]=finalPrice;
}

console.log(orgPrices);

const obj={
    name:"Hanzala",
    age:24,
    cgpa:3.43
}

for (let key in obj) {
  
    console.log(`${key} ${obj[key]}`);
    
    
}


let fruits=["orange","apple","grapes","peach","banana"];
fruits.forEach(element => {
    console.log(element);
});

let n=10;
while(n>0){
    console.log(n);
    n--;

}
let a=0;
do {
    console.log("Do While loop has been started");
    a++;
    
} while (a<=5);