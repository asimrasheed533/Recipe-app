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
  otp: {
    type: Number,
    default: null,
  },
});

const User = mongoose.model("User", schema);

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByid(req.params.id);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "invalid credentials" });
    }
    const isMatch = password === user.password;
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    //jwt token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );

    // Send the response
    return res.status(200).json(token);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/register", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.name) {
      return res.status(400).json({ error: "All fields are required" });
    }

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
    return res.json(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
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
    user.otp = otp;
    await user.save();
    const sendotp = await mailer.sendMail(email, otp);

    if (!sendotp) {
      return res.status(200).send("email did not send");
    }
    return res.status(200).send("OTP sent to email");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
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
    return res.json(updateUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    return res.send(deleteUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/verify", auth, async (req, res) => {
  try {
    return res.send("User verified");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
