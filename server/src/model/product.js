const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   name:{
    type: String,
    required: [true, "Please provide your name"]
    trim: true,
   },
    email:{
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    trim: true,
    lowercase: true,
    },
    password:{
    type: String,
    required: [true, "Please provide your password"],
    trim: true,
    },
    product:{
        
        
    }
  

    });
const User = mongoose.model("User", UserSchema);
module.exports = User;