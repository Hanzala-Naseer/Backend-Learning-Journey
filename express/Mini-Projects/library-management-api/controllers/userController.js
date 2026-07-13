


const users=[];

function getAllUsers(req,res){
    res.status(200).json(users);
}


function addUser(req,res){
  const {id,name}=req.body;
    users.push({id,name});

    res.status(201).json({message:"User added successfully.",user:req.body});

}



function deleteUser(req,res){
    users.splice(req.userIndex, 1);
    res.status(200).json({ message: "User deleted successfully" });

}

module.exports={
    users,
    getAllUsers,
    addUser,
    deleteUser
}
