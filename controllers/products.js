const express= require("express");
const Product= require('../models/databaseschema')

const getHomepage =async(req,res)=>{
   
    res.status(200).json({msg:'this is home page'})
}

const getAllProducts= async(req,res)=>{
    const myData= await Product.find(req.query)
  res.status(200).json({myData})
  console.log(myData);
}

const getAllProductsTesting= async(req,res)=>{
    const myData= await Product.find(req.query)
    res.status(200).json({myData})
}

module.exports= {getHomepage,getAllProducts,getAllProductsTesting};