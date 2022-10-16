const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const abc=require('../util/helper.js')
const efg=require('.././validator/formatter.js')
//importing external package
const underscore = require('underscore')
const lodash=require('lodash');

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    // call Problem 1(logger.js)
    
    console.log(xyz.welcome())
   
    // call Problem 2 (util/helper.js)

    console.log("current_date: ",abc.date())
    console.log("current_month: ",abc.month())
    console.log("my batch detail:",abc.batch())
    //call  Problem 3 (validator/formatter.js)

    console.log(efg.myName)

    // Problem 4
    // Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays

    let monthName=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
console.log(lodash.chunk(monthName,3))

// Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.

let oddNumber=[1,3,5,7,9,11,13,15,17,19]
console.log(lodash.tail(oddNumber))

// Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console

let array1=[1,6,9,5,4,5]
let array2=[7,8,5,4,3,4]
let array3=[9,6,2,1,5,1]
let array4=[10,6,7,4,6,8]
let array5=[8,9,4,2,10,7]
console.log(lodash.union(array1,array2,array3,array4,array5))

// Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

let array= [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log(lodash.fromPairs(array))

    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

