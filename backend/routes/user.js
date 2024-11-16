const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const authMiddleware = require("../Middlewares/middleware");
const router = express.Router();

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string() 
})

router.get("/signup", async (req, res) => {
    const {username, password, firstName, lastName} = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = User.findOne({
        username: username
    })

    if(user._id){
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const dbUser = await User.create({
        username, 
        password, 
        firstName, 
        lastName
    })
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)
    
    res.json({
        message: "User Created Successfully",
        token: token
    })
})

router.put("/", authMiddleware, async (req, res) => {
    const { password, firstName, lastName } = req.body;
    const updatedBody = {password, firstName, lastName}

    const { success } =  updatedBody.safeParse(req.body);
    if(!success){
        res.json({
            message: "Error in updating inputs"
        })
    }

    await User.updateOne(req.body, {
      id: req.userId  
    })
})

module.exports = router;