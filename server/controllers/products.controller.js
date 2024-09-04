
const mongoose = require('mongoose');
const Product = require('../models/products.model.js');

const createProduct = async (request, response) => { 
    const {name, category, price, image} = request.body;
    if(!name || !category || !price || !image){
        return response.status(400).json({success: false, message: "Please provide all the fields"})
    }
    try {
        const newProduct = await Product.create({name, category, price, image});
        return response.status(201).json({success: true, message: "Product created!", data: newProduct});
    } catch (error) {
        console.log("Error in creating product:", error.message);
        return response.status(500).json({success: false, message: "Server error"});
    }
}

//Get all products
const getAllProducts = async (request, response) => {
    try {
        const allProducts = await Product.find({});
        console.log("Getting products:");
        return response.status(200).json({success: true, data: allProducts});
    } catch (error) {
        console.log("Error in getting product:", error.message);
        return response.status(500).json("Error in getting product", error);
    }
    
}

//Get a product
const getProduct = async (request, response) => {
    const {id} = request.params;
    try {
        const product = await Product.findById(id);
        return response.status(200).json({success: true, data: product, message: "Fetch successfull"});
    } catch (error) {
        console.log("Error in getting product:", error.message);
        return response.status(500).json({success: false, message: "Error in fetching the product"});
    }
}

//Update a product
const updateProduct = async (request, response) => {
    const {id} = request.params;
    const updateData = request.body;
    try {
        const product = await Product.findByIdAndUpdate(id, updateData, {new:true});
        return response.status(200).json({success: true, message: "Updated successfully", data: product})
    } catch (error) {
        console.log("Error in updating product:", error.message);
        return response.status(500).json({success: false, message: "Error in updating the product"});
    }
}

//Delete product
const deleteProduct = async (request, response) => {
    const {id} = request.params;
    try{
        await Product.findByIdAndDelete(id);
        return response.status(200).json({success: true, message: "Product deleted successfully"}); 
    } catch(error){
        console.log("Error in deleting product:", error.message);
        return response.status(500).json({success: false, message: "Error deleting product"}); 
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
}