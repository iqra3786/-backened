const myMidware = async function(req, res, next){
    let isAppFreeUser = req.headers["isappfreeuser"]
    // console.log(typeof(isAppFreeUser))
    // isAppFreeUser = Boolean(isAppFreeUser)
    if(isAppFreeUser == "true" || isAppFreeUser == "false"){
        next()
    }else{

        res.send("request is missing a mandatory header")
    }
    
    // next()
}
module.exports.myMidware = myMidware


// NOTE: In some of the below apis a header validation is to be performed (create user and create order). The name of the header is ‘isFreeAppUser’. Write a header validation that simply checks whether this header is present or not. Please note this validation should only be called in create user and create order apis. Perform this validation in a middleware.

