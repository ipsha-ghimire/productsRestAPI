const express= require("express");

const getHomepage =async(req,res)=>{
res.status(200).json({msg:" this is home page"})
}

const getAllProducts= async(req,res)=>{
    res.status(200).json({msg:" this is getAllProducts page"})  
}

const getAllProductsTesting= async(req,res)=>{
    res.status(200).json({msg:" this is getAllProductsTesting"})
}

module.exports= {getHomepage,getAllProducts,getAllProductsTesting};