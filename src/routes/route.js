const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
const ProductController = require('../controllers/ProductController')
const OrderController = require('../controllers/OrderController')
const myMId = require('../middlewares/commonMiddlewares')

router.post('/createUser', myMId.myMidware ,userController.createUser)
router.post('/createProduct', ProductController.createProduct)
router.post('/createOrder', myMId.myMidware ,OrderController.createOrder)
module.exports = router;