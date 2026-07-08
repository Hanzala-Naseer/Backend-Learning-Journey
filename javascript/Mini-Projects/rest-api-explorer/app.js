const readlineSync = require("readline-sync");
const {
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
} = require("./api");
let mainChoice;

async function main() {
    while (true) {
    console.clear();

    console.log(`
====================================
        REST API EXPLORER
====================================

1. Users
2. Posts
3. Comments
4. Todos
0. Exit
`);

    mainChoice = Number(readlineSync.question("Choose an option: "));

    switch (mainChoice) {

        case 1:
           await usersMenu();
            break;

        case 2:
            await postsMenu();
            break;

        case 3:
            await commentsMenu();
            break;

        case 4:
           await todosMenu();
            break;

        case 0:
            console.log("\nThank you for using REST API Explorer!");
            process.exit(0);

        default:
            console.log("\nInvalid choice!");
            readlineSync.question("Press Enter to continue...");
    }
}
    
}

async function usersMenu() {

    let choice;

    while (true) {

        console.clear();

        console.log(`
========== USERS ==========

1. View All Users
2. View User By ID
3. Create User
4. Update User (PUT)
5. Patch User (PATCH)
6. Delete User
0. Back
`);

        const input = readlineSync.question("Choose an option: ");

        choice = Number(input);
        let id=null;
        let name=null;
        let email=null;
        let username=null;
        let phone= null;


        switch (choice) {

            case 1:
                await viewAllUsers();
                break;

            case 2:
                id=readlineSync.question("Enter User Id: ");
                id=Number(id);
                await viewUserById(id);
                break;

            case 3:
                name=readlineSync.question("Enter Name: ");
                username=readlineSync.question("Enter Username: ");
                email=readlineSync.question("Enter email: ");
                phone=readlineSync.question("Enter Phone: ");

                await createUser({name,username,email,phone});
                break;

            case 4:
                id=readlineSync.question("Enter User ID: ");
                id=Number(id);
                name=readlineSync.question("Enter Name: ");
                username=readlineSync.question("Enter Username: ");
                email=readlineSync.question("Enter Email: ");
                phone=readlineSync.question("Enter Phone: ");

                await replaceUser({id,name,username,email,phone});
                break;

            case 5:
                id=readlineSync.question("Enter User ID: ");
                id=Number(id);
                let field=readlineSync.question(`Enter Field to Update (email/phone/website/company): `);
                if(field=="email"){
                    email=readlineSync.question("Enter New Email: ");
                    await updateUser({id,email});
                    break;

                }else if(field=="phone"){
                    phone=readlineSync.question("Enter New Phone: ");
                    await updateUser({id,phone});
                break;

                }else if(field=="website"){
                    let website=readlineSync.question("Enter New Website: ");
                    await updateUser({id,website});
                    break;

                }else{
                    let company=readlineSync.question("Enter New Comapny Name: ");
                    await updateUser({id,company});

        
                }

                break;

            case 6:
                id=readlineSync.question("Enter User Id: ");
                id=Number(id);
                await deleteUser(id);
                break;
                

            case 0:
                return;

            default:
                console.log("Invalid choice!");
        }

        readlineSync.question("\nPress Enter to continue...");
    }

}

async function postsMenu() {

    let choice;

    while (true) {

        console.clear();

        console.log(`
========== POSTS ==========

1. View All Posts
2. View Post By ID
3. View Posts By User
4. Create Post
5. Replace Post (PUT)
6. Patch Post
7. Delete Post
0. Back
`);

        choice = Number(readlineSync.question("Choose an option: "));
        let id = null;
        let title = null;
        let body = null;
        let userId = null;

        switch (choice) {

            case 1:
                await viewAllPosts();
                break;

            case 2:
                id=readlineSync.question("Enter Post ID: ");
                id=Number(id);
                await viewPostById(id);
                break;

            case 3:
                id=readlineSync.question("Enter User ID: ");
                id=Number(id);
                await viewPostByUser(id);
                break;

            case 4:
                title = readlineSync.question("Enter Title: ");
                body = readlineSync.question("Enter Body: ");
                userId = Number(readlineSync.question("Enter User ID: "));
                await createPost({ title, body, userId });
                break;

            case 5:
                id = Number(readlineSync.question("Enter Post ID: "));
                title = readlineSync.question("Enter Title: ");
                body = readlineSync.question("Enter Body: ");
                userId = Number(readlineSync.question("Enter User ID: "));
                await replacePost({ id, title, body, userId });
                break;

            case 6:
                id = Number(readlineSync.question("Enter Post ID: "));
                let field = readlineSync.question("Enter Field to Update (title/body): ");
                if (field == "title") {
                    title = readlineSync.question("Enter New Title: ");
                 await updatePost({ id, title });
                } else {
                    body = readlineSync.question("Enter New Body: ");
                    await updatePost({ id, body });
                }
                break;

            case 7:
                id = Number(readlineSync.question("Enter Post ID: "));
                await deletePost(id);
                break;


            case 0:
                return;

            default:
                console.log("Invalid choice!");
        }

        readlineSync.question("\nPress Enter to continue...");
    }

    
}

async function commentsMenu() {

    let choice;

    while (true) {

        console.clear();

        console.log(`
========== COMMENTS ==========

1. View Comments of a Post
0. Back
`);

        choice = Number(readlineSync.question("Choose an option: "));

        let id = null;

        switch (choice) {

            case 1:
                id = Number(readlineSync.question("Enter Post ID: "));
                await viewCommentsByPost(id);
                break;

            case 0:
                return;

            default:
                console.log("Invalid choice!");
        }

        readlineSync.question("\nPress Enter to continue...");
    }

}
async function todosMenu() {

    let choice;

    while (true) {

        console.clear();

        console.log(`
========== TODOS ==========

1. View All Todos
2. Create Todo
3. Delete Todo
0. Back
`);

        choice = Number(readlineSync.question("Choose an option: "));
        let id = null;
        let title = null;
        let userId = null;
        let completed = null;

        switch (choice) {

            case 1:
                await viewAllTodos();
                break;

            case 2:
                userId = Number(readlineSync.question("Enter User ID: "));
                title = readlineSync.question("Enter Todo Title: ");
                completed = readlineSync.question("Completed (true/false): ") === "true";
                await createTodo({ userId, title, completed });
                break;

            case 3:
                id = Number(readlineSync.question("Enter Todo ID: "));
                await deleteTodo(id);
                break;

            case 0:
                return;

            default:
                console.log("Invalid choice!");
        }

        readlineSync.question("\nPress Enter to continue...");
    }

}



main();