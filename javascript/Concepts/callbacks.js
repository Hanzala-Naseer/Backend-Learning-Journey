function sayHello(){
    console.log("Hello");
}

function executeCallback(callback){
    callback();

}


executeCallback(sayHello);


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;

}

function calculator(a,b,callback){
    return callback(a,b);
}

console.log(calculator(3,4,add));

console.log(calculator(8,7,subtract));

function greetUser(callback){
    callback();
}


greetUser(function(){
    console.log("Hi User")
})

function arrow(callback){
    callback();
}

arrow(()=>{
    console.log("Arrow Callback");
})

console.log("Programme Started");
setTimeout(()=>{
    console.log("Loading Complete!")
},3000);
console.log("Programme finished");

const fruit=["Apple","Peach","Apricot","Grapes"];
fruit.forEach((element)=>{
    console.log(element);
});

function login(callback){
    console.log("Login successful...");
    callback();

}

function fetchProfile(callback){
    console.log("Fetching Profile...");
    callback();
}

function showDashboard(callback){
    console.log("Dashboard available...")
}

login(()=>{
    fetchProfile(()=>{
        console.log("Dashboard available");
    })
})






