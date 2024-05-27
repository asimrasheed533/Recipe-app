const express = require("express");
const mongoose = require("mongoose");
const uploadImage = require("../uploadImage");

const schema = new mongoose.Schema({
  name: String,
  img: String,
});

const Category = mongoose.model("Category", schema);
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const category = await Category.find();
    return res.json(category);
  } catch (err) {
    console.log(err);
    return res.send(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    return res.send(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});
router.post("/add", async (req, res) => {
  try {
    const imagePath = uploadImage(req.body.img, req.body.name);
    const category = new Category({
      name: req.body.name,
      img: imagePath,
    });
    await category.save();
    res.send(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const imagePath = uploadImage(req.body.img, req.body.name);
    const category = await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      img: imagePath,
    });
    await category.save();
    return res.send(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.send(category);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
