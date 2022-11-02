const express = require('express');
const router = express.Router();
const commonMW = require ("../middlewares/commonMiddlewares")
const midController=require("../controllers/middlewareController")

router.get("/middlewareApi",commonMW.middleware,midController.abc)

module.exports = router;