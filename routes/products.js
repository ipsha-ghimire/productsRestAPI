const express= require('express');
const productsrouter= express.Router();
const {getAllProducts,getAllProductsTesting}= require('../controllers/products');

productsrouter.route('/').get(getAllProducts);
productsrouter.route('/testing').get(getAllProductsTesting);

module.exports= productsrouter;