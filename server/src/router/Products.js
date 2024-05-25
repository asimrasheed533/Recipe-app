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
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const products = await Product.findById();
    res.send(products);
  } catch (err) {
    console.log(err);
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
    res.send(product);
  } catch (err) {
    console.log(err);
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

    res.send(updateproduct);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deleteProduct);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
