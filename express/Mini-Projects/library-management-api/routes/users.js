const express =require("express");

const logger=require("../middleware/logger.js");

const isUserLoggedIn=require("../middleware/auth.js");


const { users,getAllUsers,addUser,deleteUser}=require("../controllers/userController.js");
const router= express.Router();





function checkDuplicateUser(req, res, next) {
    const { id } = req.body;

    const existingUser = users.find(user=> user.id === id);

    if (existingUser) {
        return res.status(409).json({
            message: "User ID already exists."
        });
    }

    next();
}

function validateUser(req,res,next){
    if(!req.id || !req.name){
        return res.status(400).json({message:"All fields required!"});
    }
    next();
}



function isUserExist(req,res,next){
    const id = Number(req.params.id); 
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    req.userIndex = index;
    next();

}



router.get("/",logger,getAllUsers);


router.post("/",logger,isUserLoggedIn,checkDuplicateUser,addUser);


router.delete("/:id",logger,isUserExist,deleteUser);

module.exports=router;





