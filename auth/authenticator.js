const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../users/users-model");

module.exports = (req,res,next)=>{
    const token = req.headers.authorization;
    jwt.verify(token,process.env.JWT_SECRET||"red", (err,decoded)=>{
        if(err){
            console.log(err);
            return res.status(401).json({err:"Invalid creeds"})
        }
        next();
    })

}



// module.exports = (req,res,next)=>{
//     req.session.loggedIn
//         ?next()
//         :res.status(401).json({message: 'You shall not pass!'})
// }