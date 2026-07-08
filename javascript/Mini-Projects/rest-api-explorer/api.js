

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

async function replaceUser(userData) {
    const {id,...details}=userData;

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
        const response1= await fetch(url);
        if(!response1.ok){
            throw new Error("User not found");
        }
     
    const response= await fetch(url,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
    });

    if(!response.ok){
        throw new Error("Failed to update user");
    }
    console.log("======USER UPDATED======")
    console.log("");
    console.log("Status: ",response.status);
    console.log("");
    const user=await response.json();
    console.log("");
    console.log(`ID: ${user.id}\nName: ${user.name}\nUsername: ${user.username}\nEmail: ${user.email}\nPhone: ${user.phone}`);
    console.log("");
    console.log("User Updated Successfully!");
    
   } catch (error) {
    console.log(error);
    
   }

    
}


async function updateUser(userData) {
   
    const {id,...field}=userData;
    
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
        const response1= await fetch(url);
        if(!response1.ok){
            throw new Error("User not found");
        }
     
    const response= await fetch(url,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
    });

    if(!response.ok){
        throw new Error("Failed to update user");
    }
    console.log("======USER PATCHED======")
    console.log("");
    console.log("Status: ",response.status);
    console.log("");
    const data=await response.json();
    console.log("");
    const key=Object.keys(field)[0];
    console.log("Updated Field:");
    console.log(key+" → "+data[key]);
    console.log("");
    console.log("User Updated Successfully!");
   } catch (error) {
    console.log(error);
    
   }

    
}


async function  deleteUser(id) {
    const url=`https://jsonplaceholder.typicode.com/users/${id}`;
    try {
         if(id==""){
            console.log("Id required !!");
            return;
        };

        if(isNaN(id)){
            console.log("Id must be a positive Integer!")
            return;

        };

        const response1 = await fetch(url);

    if (!response1.ok) {
    throw new Error("User not found");
    }

        const response= await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
        }
    });
    if(!response.ok){
        throw new Error("Failed To delete user")
    }
    const data =await response.json();

    console.log("======USER DELETED======");
    console.log(`User with ID ${id} deleted successfully`);



        
    } catch (error) {
        console.log(error);
        
    }


    
}

async function viewAllPosts() {
    const url=`https://jsonplaceholder.typicode.com/posts`;
    try {

        const response= await fetch(url);
        if(!response.ok){
            throw new Error("Something went wrong...");
        }

        const posts= await response.json();
        console.log("========== ALL POSTS =========");
        for (const post of posts) {
            console.log(`ID: ${post.id}\nTitle: ${post.title} `);
            console.log();
            console.log("-------------------------------------");
            
        }

    } catch (error) {
        console.log(error);
        
    }
    
}


async function viewPostById(id){

    const url=`https://jsonplaceholder.typicode.com/posts/${id}`;
    try {
            if(id==""){
            console.log("Id required !!");
            return;
        };

        if(isNaN(id)){
            console.log("Id must be a positive Integer!")
            return;

        };

        const response= await fetch(url);
        if(!response.ok){
            throw new Error("Post not found!");
        } 
        const post =await response.json();
        console.log("========== POST DETAILS ==========");
        console.log("");
        console.log(`ID: ${post.id} \nUser ID: ${post.userId}\n\nTitle:\n${post.title}\n\nBody:\n${post.body}`);
        
        
    } catch (error) {
        console.log(error);
        
    }
}

async function viewPostByUser(id){

    const url=`https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    try {
            if(id==""){
            console.log("Id required !!");
            return;
        };

        if(isNaN(id)){
            console.log("Id must be a positive Integer!")
            return;

        };

        const response= await fetch(url);
        if(!response.ok){
            throw new Error("User not found!");
        } 
        const posts =await response.json();
        console.log("========== USER POSTS ==========");
        console.log("");
        console.log(`User ID: ${id}`);
        console.log("");

        for (const post of posts) {
            console.log(`Post ID: ${post.id} \n\nTitle:\n${post.title}`);
            console.log("----------------------------------");
            
        }
        
        
    } catch (error) {
        console.log(error);
        
    }
}
async function createPost(postData) {

    const url = "https://jsonplaceholder.typicode.com/posts";

    try {

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error("Failed to create post");
        }

        console.log("======POST CREATED======");
        console.log("");
        console.log("Status:", response.status);

        const post = await response.json();

        console.log("");
        console.log(`ID: ${post.id}
User ID: ${post.userId}

Title:
${post.title}

Body:
${post.body}`);

        console.log("");
        console.log("Post Created Successfully!");

    } catch (error) {
        console.log(error);
    }

}


async function replacePost(postData) {

    const { id } = postData;

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {

        if (id == "") {
            console.log("Id required !!");
            return;
        }

        if (isNaN(id)) {
            console.log("Id must be a positive Integer!");
            return;
        }

        const response1 = await fetch(url);

        if (!response1.ok) {
            throw new Error("Post not found");
        }

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error("Failed to update post");
        }

        console.log("======POST UPDATED======");
        console.log("");
        console.log("Status:", response.status);

        const post = await response.json();

        console.log("");
        console.log(`ID: ${post.id}
User ID: ${post.userId}

Title:
${post.title}

Body:
${post.body}`);

        console.log("");
        console.log("Post Updated Successfully!");

    } catch (error) {
        console.log(error);
    }

}


async function updatePost(postData) {

    const { id, ...field } = postData;

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {

        if (id == "") {
            console.log("Id required !!");
            return;
        }

        if (isNaN(id)) {
            console.log("Id must be a positive Integer!");
            return;
        }

        const response1 = await fetch(url);

        if (!response1.ok) {
            throw new Error("Post not found");
        }

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error("Failed to update post");
        }

        console.log("======POST PATCHED======");
        console.log("");
        console.log("Status:", response.status);

        const data = await response.json();

        const key = Object.keys(field)[0];

        console.log("");
        console.log("Updated Field:");
        console.log(key + " → " + data[key]);

        console.log("");
        console.log("Post Updated Successfully!");

    } catch (error) {
        console.log(error);
    }

}

async function deletePost(id) {

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {

        if (id == "") {
            console.log("Id required !!");
            return;
        }

        if (isNaN(id)) {
            console.log("Id must be a positive Integer!");
            return;
        }

        const response1 = await fetch(url);

        if (!response1.ok) {
            throw new Error("Post not found");
        }

        const response = await fetch(url, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete post");
        }

        console.log("======POST DELETED======");
        console.log(`Post with ID ${id} deleted successfully`);

    } catch (error) {
        console.log(error);
    }

}
async function viewCommentsByPost(id) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    try {
        if (id == "") {
            console.log("Id required !!");
            return;
        }
        if (isNaN(id)) {
            console.log("Id must be a positive Integer!");
            return;
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Comments not found!");
        }
        const comments = await response.json();
        console.log("========== COMMENTS ==========");
        console.log("");
        for (const comment of comments) {
            console.log(`Name: ${comment.name}`);
            console.log(`Email: ${comment.email}`);
            console.log("");
            console.log(`Comment:\n${comment.body}`);
            console.log("--------------------------------------");
        }
        console.log("");
        console.log("Total Comments:", comments.length);
    } catch (error) {
        console.log(error);
    }

}

async function viewAllTodos() {

    const url = "https://jsonplaceholder.typicode.com/todos";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to get todos");
        }
        const todos = await response.json();
        console.log("========== ALL TODOS ==========");
        for (const todo of todos) {
            console.log(`ID: ${todo.id}\nTitle: ${todo.title}\nCompleted: ${todo.completed}`);
            console.log("--------------------------------------");
        }
        console.log("Total Todos:", todos.length);
    } catch (error) {
        console.log(error);
    }


}

async function createTodo(todoData) {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todoData)
        });
        if (!response.ok) {
            throw new Error("Failed to create todo");
        }
        console.log("======TODO CREATED======");
        console.log("Status:", response.status);

        const todo = await response.json();

        console.log(`ID: ${todo.id}\nUser ID: ${todo.userId}\nTitle: ${todo.title}\nCompleted: ${todo.completed}`);
        console.log("Todo Created Successfully!");

    } catch (error) {
        console.log(error);
    }

}
async function deleteTodo(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    try {
        if (id == "") {
            console.log("Id required !!");
            return;
        }
        if (isNaN(id)) {
            console.log("Id must be a positive Integer!");
            return;
        }
        const response1 = await fetch(url);

        if (!response1.ok) {
            throw new Error("Todo not found");
        }

        const response = await fetch(url, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete todo");
        }
        console.log("======TODO DELETED======");
        console.log(`Todo with ID ${id} deleted successfully`);

    } catch (error) {
        console.log(error);
    }

}
module.exports={
    viewAllUsers,
    viewUserById,
    createUser,
    replaceUser,
    updateUser,
    deleteUser,
    viewAllPosts,
    viewPostById,
    viewPostByUser,
    createPost,
    replacePost,
    updatePost,
    deletePost,
    viewCommentsByPost,
    viewAllTodos,
    createTodo,
    deleteTodo


}