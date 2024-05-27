const express = require("express");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  img: String,
  stock: Number,
  category: String,
  description: String,
  isFeatured: Boolean,
  isActive: Boolean,
  ingeredients: Array,
});

const Product = mongoose.model("Products", schema);
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const products = await Product.findById();
    return res.json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      brand: req.body.brand,
      time: req.body.time,
      img: req.body.img,
      stock: req.body.stock,
      category: req.body.category,
      description: req.body.description,
      isFeatured: req.body.isFeatured,
      isActive: req.body.isActive,
    });
    await product.save();
    return res.json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateproduct = await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      brand: req.body.brand,
      time: req.body.time,
      img: req.body.img,
      stock: req.body.stock,
      category: req.body.category,
      description: req.body.description,
      isFeatured: req.body.isFeatured,
      isActive: req.body.isActive,
    });

    return res.json(updateproduct);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    return res.json(deleteProduct);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
