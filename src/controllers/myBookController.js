const myBookModel= require("../models/myBookModel")

const createmyBook= async function (req, res) {
    let data= req.body
    let savedData= await myBookModel.create(data)
    res.send({msg: savedData})
}

const getmyBookData= async function (req, res) {
    let allBooks= await myBookModel.find()
     res.send({msg: allBooks})
}
const getBookandAuthorName=async function(req,res){
    let name= await myBookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg:name})
}
const findYearData=async function(req,res){
    let year=req.query.year
    let yearData= await myBookModel.find({year:{$eq:year}})
    res.send({msg:yearData})
} 
const authorNameStarted=async function(req,res){
    let author=await myBookModel.find({authorName: /^ab/})
    res.send({msg:author})
}
const priceIndia=async function(req,res){
    let indiaPrice= await myBookModel.find({$or:[{"price.Indian":{$eq:"100INR"}},{"price.Indian":{$eq:"200INR"}},{"price.Indian":{$eq:"500INR"}}]})
    res.send({msg:indiaPrice})
}
const particularBook=async function(req,res){
    let findBook= await myBookModel.find({$and:[{stockAvailable:true},{totalPages:{$gt:500}}]})
     res.send({msg: findBook})
}
// module.exports.createmyBook= createmyBook
// module.exports.getmyBookData= getmyBookData
module.exports={
    createmyBook,
    getmyBookData,
    getBookandAuthorName,
    findYearData,
    authorNameStarted,
    priceIndia,
    particularBook
}