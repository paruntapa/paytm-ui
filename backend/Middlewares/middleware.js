const JWT_SECRET = require("../config")
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

const authMiddleware = () => {
    const token = req.headers.authorization

    if(!token || !token.startswith("Bearer")){
        return res.status(403).json({
            Message: "no token"
        })
    }
    
    const realtoken =  token.split(' ')[1];

    try{
        const user = jwt.verify(realtoken, JWT_SECRET);

        if (user.userId){
        req.userId = user.userId;
        next();
        } else {
        return res.json({
            Message: "Token is Invalid"
        })
        }

    } catch(err) {
        return res.json({
            Message: "Token is Invalid"
        })
    }
    

} 

module.exports = authMiddleware