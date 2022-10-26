const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const myBookController= require("../controllers/myBookController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createmyBook", myBookController.createmyBook  )

router.get("/getmyBookData", myBookController.getmyBookData)
router.get("/getBookandAuthorName",myBookController.getBookandAuthorName)
router.post("/findYearData",myBookController.findYearData)
router.get("/authorNameStarted",myBookController.authorNameStarted)
router.get("/priceIndia",myBookController.priceIndia)
router.get("/particularBook",myBookController.particularBook)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;