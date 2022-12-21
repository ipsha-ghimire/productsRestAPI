const express = require('express');
const homepagerouter= express.Router();
const {getHomepage}= require('../controllers/products')
homepagerouter.route('/').get(getHomepage);  //ocalhost:3000 ma yo call huncha 

module.exports= homepagerouter;