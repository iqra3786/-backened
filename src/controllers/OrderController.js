const orderModel = require('../models/OrderModel')
const userModel = require('../models/userModel')
const productModel = require('../models/ProductModel')
const mongoose = require('mongoose')
const isValid = mongoose.Types.ObjectId.isValid
const createOrder = async function (req, res) {

    const userId = req.body.UserId

    const productId = req.body.ProductId

    if (!isValid(userId)) {
        return res.send({ msg: "This is not a valid user id" })
    }
    if (!isValid(productId)) {
        return res.send({ msg: "This is not a valid product id" })
    }

    let dbUserId = await userModel.findOne({ _id: userId })
    let dbProductId = await productModel.findOne({ _id: productId })
    if (!dbUserId) {
        return res.send({ msg: "This user id is not found in user model" })
    }

    if (!dbProductId) {
        return res.send({ msg: "This product id is not found in product model" })
    }
    if (req.headers.isappfreeuser == "false") {
        let userbalance = dbUserId.balance
        let productbalance = dbProductId.price
        if (userbalance >= productbalance) {
            let deduct = userbalance - productbalance
            dbUserId.balance = deduct
            let updateUser = await userModel.findOneAndUpdate({ _id: dbUserId._id }, dbUserId, { new: true })
            console.log("updateUser")
            let data = req.body
            let savedData = await orderModel.create(data)
            return res.send({ msg: savedData, data : updateUser })
        } else {
            return res.send({ msg: "you dont have enough balance to buy this product" })
        }
    }
    let data = req.body
    let savedData = await orderModel.create(data)
    return res.send({ msg: savedData })

}

const getOrder = async function (req, res) {
    let getData = await orderModel.find()
    res.send({ msg: getData })
}

module.exports.createOrder = createOrder
module.exports.getOrder = getOrder