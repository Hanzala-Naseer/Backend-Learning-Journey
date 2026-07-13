function isUserLoggedIn(req,res,next){
    const isLoggedIn=true;
    if(!isLoggedIn){
        return res.status(400).json({message:"Login required"});
    }
    next();

}


module.exports=isUserLoggedIn;