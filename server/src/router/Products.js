const express = require ("express");
const mongoose = require ("mongoose");

const router = express.Router()

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
})

const Product = mongoose.model("Products", schema)

router.get("/", async(req, res)=>{
    try{
        const products = await Product.find()
        res.send(products)
    } catch (err){
        console.log(err)
    }
})

router.get("/:id", async(req, res)=>{
    try{
        const products = await Product.findById()
        res.Send(products)
    } catch(err){
        console.log(err)
    }
})

