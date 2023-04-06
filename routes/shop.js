const path = require("path");

const express = require('express');

const productsController = require("../controllers/Products");


const router = express.Router();

router.get('/', productsController.getHomePage);

router.get('/contactus', productsController.getContactus);

router.post('/contactus', productsController.postContactus);

router.get('/success',productsController.getSuccess);




module.exports = router;
