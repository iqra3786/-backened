const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


//problem 1: Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.


router.get('/GET/movies', function (req, res){
   let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
 res.send(movies)
})



// problem 2: Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api
// [‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]

router.get('/GET/movies/:indexNumber',function(req, res){
    let movies = ["Rang de basanti", "The shining", "Lord of the rings","Batman begins"]
     let myParams = req.params
      res.send('movie name: ' + movies[myParams.indexNumber])
})
// problem:3 Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.
router.get('/edgeCase/:y',function(req,res){
    let movies = ["Rang de basanti", "The shining", "Lord of the rings","Batman begins"]
    let myParams = req.params
    if(myParams.y<movies.length)
    {
        res.send('movie name: ' + movies[myParams.y])
    }
    else
    {
       res.send("use a valid index")
    }

})


// Problem:4 Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 
// [ {
//  “id”: 1,
//  “name”: “The Shining”
// }, {
//  “id”: 2,
//  “name”: “Incendies”
// }, {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }, {
//  “id”: 4,
//  “name”: “Finding Nemo”
// }]

// Return the entire array in this api’s response

router.get('/GET/films',function(req,res){
    let array=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       res.send(array)
    })

// Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
// {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }
// Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’
router.get( '/GET/films/:filmId',function(req,res){
    let array=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       let myParam=req.params

       let count=0
       for(let i=0;i<array.length;i++){
        if(array[i].id==Number(myParam.filmId)){
            count++
            res.send(array[i])
        }
      }
       if(count==0)    
      res.send("No movie exists with this id")

    
        
})



module.exports = router;