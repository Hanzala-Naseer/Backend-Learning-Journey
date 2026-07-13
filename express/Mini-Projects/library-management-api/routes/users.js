const express =require("express");

const logger=require("../middleware/logger.js");

const isUserLoggedIn=require("../middleware/auth.js");

const router= express.Router();



const users=[];

function getAllUsers(req,res){
    res.status(200).json(users);
}


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

function addUser(req,res){
  const {id,name}=req.body;
    users.push({id,name});

    res.status(201).json({message:"User added successfully.",user:req.body});

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

function deleteUser(req,res){
    users.splice(req.userIndex, 1);
    res.status(200).json({ message: "User deleted successfully" });

}



router.get("/",logger,getAllUsers);


router.post("/",logger,isUserLoggedIn,checkDuplicateUser,addUser);


router.delete("/:id",logger,isUserExist,deleteUser);

module.exports=router;





