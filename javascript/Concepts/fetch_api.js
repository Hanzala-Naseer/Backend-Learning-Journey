const url="https://jsonplaceholder.typicode.com/users";
///GET
async function fetchUsers(){
    console.log("Loading Users...");
    try{
        const response = await fetch(url);
        console.log(response.status);
        console.log(response.ok);
        console.log(response.headers);
        console.log(response.url);
        if(!response.ok){
            throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        console.log(data);
        for(const user of data){
            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
        }
        console.log(`Name: ${data[0].name}`);
        console.log(`Username: ${data[0].username}`);
        console.log(`City: ${data[0].address.city}`);
        console.log(`Company: ${data[0].company.name}`);
        console.log(`Total Users: ${data.length}`);
    }
    catch(error){
       console.log(error.message);
    }
}

//POST

async function createUser(name,username,email,phone) {
    const response=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            username,
            email,
            phone

        })
    });
    console.log(response.status);
    const data=await response.json();
    console.log(data);
    
}

createUser("Hanzala Naseer","hanzala1212","hanzala@gmail.com","+92 3344556677");


const urlPosts = "https://jsonplaceholder.typicode.com/posts";

async function createPost(title,body,userId) {
    
    const response=await fetch(urlPosts,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title,
            body,
            userId

        })
    });
    console.log(`Status: ${response.status}`);
    if(response.status===201){
        console.log("Created Successfully!");
    }

    const data= await response.json();
    console.log("Returned Data:");
    console.log(data);
    
}

createPost("Node JS Learning","Practicing POST requests with Fetch API",1);

async function getSingleUser(id) {
    const url=`https://jsonplaceholder.typicode.com/users/${id}`;
    const response= await fetch(url);
    const user=await response.json();
    console.log(user);

    console.log(user.name,user.email,user.phone,user.website);

    
}
getSingleUser(5);

async function getPostById(id) {
    const url=`https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    const response= await fetch(url);
    const posts=await response.json();
    console.log("Total Posts: ",posts.length);
    for (const post of posts) {
        console.log("Title of Post:",post.title);
        
    }

    
}
getPostById(5);


async function getCommentsOfPost(id) {
    const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    const response= await fetch(url);
    const comments=await response.json();

    for (const comment of comments) {
        console.log("Name of Post:",comment.name);
        console.log("Email: ",comment.email);
        
    }

    
}
getCommentsOfPost(1);


async function createToDo(userId,title,completed) {
    const url="https://jsonplaceholder.typicode.com/todos";
    const response=await fetch(url,
        {
            method:"POST",
            headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        userId,title,completed
    })
});
    console.log(response.status);

    const data= await response.json();
    console.log(data);
    
}

createToDo(1,"Completed Fetch Api practice",false);

async function updatePost(postData) {
    const url="https://jsonplaceholder.typicode.com/posts/1";
    try{
        const response= await fetch(url,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(postData)
        });
        console.log(response.status);

        console.log("Post Updated Successfully!"); 

        const data= await response.json();
        console.log(data);

    


    }catch(error){
        console.log(error)
    }
    
}

updatePost({id:1,
    title:"Mastering Fetch API",
    body:"Learning PUT requests in javascript",
    userId:1
});


async function updateUser(userData) {
    const url="https://jsonplaceholder.typicode.com/users/1";
    try {
        const response= await fetch(url,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        if(!response.ok){
            throw new Error("Failed to update user details");
        }
        console.log(response.status);
        const data=await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error.message);
        
    }


    
}
updateUser({email:"newEmail@yahoo.com"});


async function deletePost(id) {
    const url=`https://jsonplaceholder.typicode.com/todos/${id}`;
    try {
    const response= await fetch(url,{method:"DELETE"});
    if(!response.ok){
        throw new Error("Failed to Delete Post");
    }
    console.log(response.status);
    console.log("Post deleted successfuly");

    
        
    } catch (error) {
        console.log(error.message);
    }


    
}


deletePost(1);


