// first we need to know 
// when we have callbaks then why we need promises
//because when system grows callbacks create too many nesting called Callback Hell which is difficult to read and debug
//e.g.
// login(() => {

//     fetchProfile(() => {

//         fetchPosts(() => {

//             fetchComments(() => {

//                 fetchFriends(() => {

//                     fetchMessages(() => {

//                         console.log("Done");

//                     });

//                 });

//             });

//         });

//     });

// });

const p1= new Promise((resolve, reject) => {
    console.log("Hello Promises")
    resolve("p1 completed");
})

p1.then((res)=>{
    console.log(res);
})

const p2= new Promise((resolve, reject) => {
    const isLoggedIn=false;
    if(isLoggedIn){
        resolve("Login Successful");
    }else{
        reject("Invalid Credentials...")

    }
})

p2.then((res)=>{
    console.log(res);

}).catch((err)=>{
    console.log(err);

})


function downloadFile(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("File Downloaded Successfully");
            resolve("Downloaded")
        },3000)
        
    })  
}

let p3=downloadFile();
p3.then((res)=>{
    console.log(res);
})

function connectDB(){
    return new Promise((resolve, reject) => {
        const connected=false;
        if(connected){
            resolve("DB Connected");
        }else{
            reject("Failed to connect DB....")
        }
    })  
    
}

const p5=connectDB();
p5.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})




function login(){
   return new Promise((resolve, reject) => {
        console.log("Validating credentials");
        resolve("Log in successful............")

    })

}

function fetchProfile(){
    return new Promise((resolve, reject) => {
        console.log("Fetching Profile...");
        resolve("profile fetched...")

    })
}

function showDashboard(){
   return new Promise((resolve, reject) => {
        console.log("Loading dashbard");
        resolve("dashboard loaded successfuly")

    })
}

login().then((res)=>{
    console.log(res);
    return fetchProfile();
}).then((res)=>{
    console.log(res);
    return showDashboard();
}).then((res)=>{
    console.log(res);


})


const p6 =new Promise((resolve, reject) => {
    if (Math.random()>0.5){
        resolve("Payment successful");
    }else{
        reject("Payment failed!")
    }
})
p6.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Transaction completed..")
})


function placeOrder(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order Placed Successfully");
        }, 2000);

    })

}

placeOrder().then((res)=>{
    console.log(res);
}).then(()=>{
    console.log("Preparing your meal...")
}).then(()=>{
    console.log("Order Ready!")
})


const p7=new Promise((resolve, reject) => {
    resolve(5);
})

p7.then((res)=>{
    return res;
}).then((res)=>{
    return res *2;
    
}).then((res)=>{
    console.log(res+10);
})






