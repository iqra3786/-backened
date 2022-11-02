const request=require( 'request-ip')
const middleware=async function(req,res,next){
    console.log("this is by middleware")
    const date=new Date();
    console.log(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"    "
    + date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds())

console.log(request.getClientIp(req))

console.log(req.route.path)
    next()
}
module.exports.middleware=middleware