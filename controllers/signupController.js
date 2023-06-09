const CryptoJS = require("crypto-js");
const User =  require("../model/user.mdel");

const signupHandler = async(req,res)=>{
    try{
        
        const newUser = new User ({
            
                username: req.body.username,
                number:  req.body.number,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        });
        const  saveduser = await newUser.save();
        res.status(201).json(saveduser); 
    }
    catch(err){
        res.status(500).json({message:"error found"})
        console.log(err);
    }
 }
 

 module.exports = signupHandler;