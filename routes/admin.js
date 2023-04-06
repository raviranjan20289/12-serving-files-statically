const path = require("path");

const express = require('express');


const productsController = require("../controllers/Products");

const router = express.Router();


router.get('/add-product', productsController.getProduct);


router.post('/add-product', productsController.postProducts);

module.exports = router;
