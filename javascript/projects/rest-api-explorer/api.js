// async function viewAllUsers() {
//     console.log("Function called");
//     const url="https://jsonplaceholder.typicode.com/users";
//     try {
//         const response=await fetch(url);
//         if(!response.ok){
//             throw new Error("Failed to get all Users!");

//         }


//         console.log(response.status);
//         const users=await response.json();
//         console.log(`=========ALL USERS========`);

//         for (const user of users) {
//             console.log(`ID: ${user.id}\nName: ${user.name}\nEmail: ${user.email}`);  
//         }

        
//     } catch (error) {
//         console.log(error.message);        
//     }
// }

async function viewAllUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to get all Users!");
        }
        const users = await response.json();

        console.log("=======ALL USERS======")

        for (const user of users) {
            console.log("");
            console.log(`ID: ${user.id}\nName: ${user.name}\nEmail:${user.email}`);
            console.log("");
        }
                console.log("Total Users:", users.length);

    } catch (error) {
        console.log("ERROR:", error);
    }
}

async function viewUserById(id) {
    const url=`https://jsonplaceholder.typicode.com/users/${id}`;
    try {
        if(id==""){
            console.log("Id required !!");
            return;
        }

        if(isNaN(id)){
            console.log("Id must be a positive Integer!")
            return;

        }
        const response= await fetch(url);
        if(!response.ok){
            throw new Error("User not found");
        }
        const user= await response.json();
        console.log("========== USER DETAILS ========");
        console.log(`ID: ${user.id}\nName: ${user.name}\nUsername: ${user.username}\nEmail: ${user.email}\nPhone: ${user.phone}\nWebsite: ${user.website}\nCompany: ${user.company.name}\nCity: ${user.address.city}`)
        
    } catch (error) {
        console.log(error);
        
    }

    
}

async function createUser(userData) {
   try {
     const url="https://jsonplaceholder.typicode.com/users";
    const response= await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
    });

    if(!response.ok){
        throw new Error("Failed to create user");
    }
    console.log("======USER CREATED======")
    console.log("Status: ",response.status);
    const user=await response.json();
    console.log("");
    console.log(`ID: ${user.id}\nName: ${user.name}\nUsername: ${user.username}\nEmail: ${user.email}\nPhone: ${user.phone}`);
    console.log("");
    console.log("User Created Successfully!");
    
   } catch (error) {
    console.log(error);
    
   }

    
}
module.exports={
    viewAllUsers,
    viewUserById,
    createUser
}