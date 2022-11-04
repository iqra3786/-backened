const UserModel = require('../models/userModel')

const createUser = async function(req, res){
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({msg : savedData})
}

const getUser = async function(req, res){
    let  getData = await UserModel.find()
    res.send({msg : getData})
}

module.exports.createUser = createUser
module.exports.getUser = getUser
