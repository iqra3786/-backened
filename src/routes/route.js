const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const cloudeController=require('../controllers/weatherController')
const memeController=require('../controllers/memesController')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/cowin/district/", CowinController.getDistrictsfind)


router.get("/meme/get_memes", memeController.get_memes)
router.post("/meme/creatememe", memeController.creatememe)

router.get("/getcloudedetails", cloudeController.getcloudedetails)



module.exports = router;