const User = require("../models/users");
const bcrypt = require('bcryptjs');
async function handleUserSignup(req,res){
    const {name , email , password , year} = req.body;

    if(!name || !email || !password || year){
        return res.status(404).json({"success":false , "msg":"Please provide all the inputs"});
    }
    
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const result = User.create({
        name , email , year , password:hashPassword
    })

    if(!result){
        return res.status(404).json({"success":false, "msg":"Something went wrong"});
    }

    return res.status(200).json({"success":true , "msg":"The user has been successfully connected" , "data":result});
}


async function handleUserSignin(req,res){
    const {email , password} = req.body;

    if(!email || !password){
        return res.status(404).json({"success":false , "msg":"Please provide all the inputs"})
    }
}


module.exports = {handleUserSignup , handleUserSignin};