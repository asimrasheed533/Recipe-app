const express = require("express");
const mongoose = require("mongoose");
const mailer = require("../utils/mailer");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", schema);

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByid(req.params.id);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const { email, password } = req.body;

    if (!email || !password) {
      req.statusCode(400).json({ error: "All fields are required" });
    }

    if (user) {
      const isMatch = password === user.password;

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      }
      //jwt token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "2h" }
      );
      // user.token = token;
      // console.log(token);
      // res.status(200).json({ message: "Login successful", user: user });
      const responseObject = {
        message: "Login successful",
        user: {
          ...user.toObject(), // Convert the Mongoose document to a plain JavaScript object
          token: token,
        },
      };

      // Send the response
      res.status(200).json(responseObject);
    } else {
      res.status(400).json({ error: "invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    // const encryptedPassword = (res.body.password, 10);
    const olduser = await User.findOne({ email: req.body.email });
    if (olduser) {
      return res.status(409).json({ error: "User already exists" });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    console.log(err);
  }
});

router.post("/forgot", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }
    const otp = generateOTP();
    const sendotp = await mailer.sendMail(email, otp);
    if (sendotp) {
      res.status(200).send("OTP sent successfully");
    }
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await updateUser.save();
    res.json(updateUser);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.send(deleteUser);
  } catch (err) {
    console.log(err);
  }
});

router.post("/verify", auth, async (req, res) => {
  try {
    res.send("User verified");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
