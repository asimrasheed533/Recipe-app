const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const schema  = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const User = mongoose.model("User", schema)

router.get("/", async(req, res) => {
    try{
    const users = await User.find();
    res.json(users);
    } catch (err){
        console.log(err);
    }
});

router.get("/:id", async(req, res) => {
    try{
        const user = await User.findByid(req.params.id);
        res.json(user);
    } catch(err){
        console.log(err);
    }
})

router.post("/login", async(req,res)=>{
    try{
      const user = await  User.findOne({email: req.body.email});
      const {email , password} = req.body;

      if(!email || !password){
        req.statusCode(400).json({error: "All fields are required"})
      }

      if(user){
        const isMatch = (password === user.password);

        if(!isMatch){
            res.status(400).json({error: "Invalid credentials"})
        } else{
            res
            .status(200)
            .json({message: "Login successful", user: user})
        }
      } else {
        res.status(400).json({error:"invalid credentials"})
      }

    } catch(err){
        console.log(err);
    }
});

router.post("/register", async (req, res)=>{
try{
    // const encryptedPassword = (res.body.password, 10);
    const olduser = await User.findOne({email: req.body.email});
    if(olduser){
        return res.status(409).json({error: "User already exists"})
    }
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }); 
    await newUser.save();
    res.send(newUser);
}   catch(err){
    console.log(err);
}
});

router.put("/:id", async(req, res)=>{
    try{
    
        const updateUser = await User.findByIdAndUpdate(req.params.id
            ,{
            name: req.body.name,
            email: req.body.email,
            password: req.body.password  
        });
        await updateUser.save();
        res.json(updateUser);
        
    } catch(err){
        console.log(err);
    } 
})

router.delete("/:id", async (req, res)=>{
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.send(deleteUser)
    }
    catch(err){
        console.log(err);
    }
});

module.exports = router;