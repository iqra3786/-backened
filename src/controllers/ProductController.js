const ProductModel = require('../models/ProductModel')

const createProduct = async function(req, res){
    let data = req.body
    let  savedData = await ProductModel.create(data)
    res.send({msg : savedData})
}

const getProduct = async function(req, res){
    let getData = await ProductModel.find()
    res.send({msg : getData})
}

module.exports.createProduct = createProduct
module.exports.getProduct = getProduct