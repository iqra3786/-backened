const current_date=new Date()
const date=function(){
    let d=current_date.getDate()
    return d
}

const month=function(){
    let d=current_date.getMonth()+1
    return d
}
 const batch=function(){
    let a={
        batchName:"lithium",
        day:"W3D3",
        topic:"the topic for today is Nodejs module system"
    }
    return a
 }
 module.exports={
    date,
    month,
    batch
 }