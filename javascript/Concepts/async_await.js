//although promises are better than callbacks but still they are difficult to read and debug 
// we can say that async-await >> Promises >> Callbacks
//lets see how

async function greet() {
    return "Hello async await";
    
}

async function callingGreet() {

    const msg= await greet();
    console.log(msg);
}
callingGreet();

function getMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Msg Received!")

            
        }, 2000);
    })
    
}

async function fetchMessage(){
    const p=await getMessage();
    console.log(p);
}
fetchMessage();

async function login(){
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve("Login Successful")
        
    }, 4000);
   })
}

async function fetchProfile(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Profile Fetched Successful")
        
    }, 4000);
  })
}
async function showDashboard(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Dashboard Loaded....")
        
    }, 4000);
})
}


async function handleLogin() {
    try{
    const res= await login();
    console.log(res)
    }catch(err){
        console.log(err);
    }
    
}

// handleLogin();

async function handleSignup() {
    console.log("Validating credentials");
    let p1= await login();
    console.log(p1);

    console.log("Fetching profile")
    let p2=  await fetchProfile();
    console.log(p2);

    console.log("Loading Dashboard...")
    let p3=await showDashboard();   
    console.log(p3); 
}
handleSignup();


function downloadFile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("File Downloaded Successfully");
            
        },3000);
    })
    
}

async function getFile() {
    console.log("Downloading....");
    const msg=await downloadFile();
    console.log(msg);
    
}
getFile();

function connectDB(){
    const connected=false;
    return new Promise((resolve, reject) => {
        if(connected){
            resolve("DB connected")
        }else{
            reject("DB conection failed");
        }
    })
}

async function configDB() {
    try{
       const msg= await connectDB();
        console.log(msg);
    }catch(err){
        console.log(err);

    }
    
}

configDB();


function getName(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hanzala");
        },1000)
    })
}

function getAge(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(24);
        },1000)
    })
}

function getCity(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Gujranwala");
        },1000)
    })
}

async function getDetails() {
    const name=await getName();
    console.log(name);
    const age=await getAge();
     console.log(age);
     const city= await getCity();
     console.log(city);
    
}
getDetails();




