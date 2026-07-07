const readlineSync = require("readline-sync");
const {viewAllUsers,viewUserById,createUser}=require("./api");
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
            postsMenu();
            break;

        case 3:
            commentsMenu();
            break;

        case 4:
            todosMenu();
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


        switch (choice) {

            case 1:
                await viewAllUsers();
                break;

            case 2:
                let id=readlineSync.question("Enter User Id: ");
                id=Number(id);
                await viewUserById(id);
                break;

            case 3:
                let name=readlineSync.question("Enter Name: ");
                let username=readlineSync.question("Enter Username: ");
                let email=readlineSync.question("Enter email: ");
                let phone=readlineSync.question("Enter Phone: ");

                await createUser({name,username,email,phone});
                break;

            case 4:
                console.log("Update User");
                break;

            case 5:
                console.log("Patch User");
                break;

            case 6:
                console.log("Delete User");
                break;

            case 0:
                return;

            default:
                console.log("Invalid choice!");
        }

        readlineSync.question("\nPress Enter to continue...");
    }

}

function postsMenu() {

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

        switch (choice) {

            case 1:
                console.log("View All Posts");
                break;

            case 2:
                console.log("View Post By ID");
                break;

            case 3:
                console.log("View Posts By User");
                break;

            case 4:
                console.log("Create Post");
                break;

            case 5:
                console.log("Replace Post");
                break;

            case 6:
                console.log("Patch Post");
                break;

            case 7:
                console.log("Delete Post");
                break;

            case 0:
                return;

            default:
                console.log("Invalid choice!");
        }

        readlineSync.question("\nPress Enter to continue...");
    }

}

function commentsMenu() {

    let choice;

    while (true) {

        console.clear();

        console.log(`
========== COMMENTS ==========

1. View Comments of a Post
0. Back
`);

        choice = Number(readlineSync.question("Choose an option: "));

        switch (choice) {

            case 1:
                console.log("View Comments of a Post");
                break;

            case 0:
                return;

            default:
                console.log("Invalid choice!");
        }

        readlineSync.question("\nPress Enter to continue...");
    }

}

function todosMenu() {

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

        switch (choice) {

            case 1:
                console.log("View All Todos");
                break;

            case 2:
                console.log("Create Todo");
                break;

            case 3:
                console.log("Delete Todo");
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