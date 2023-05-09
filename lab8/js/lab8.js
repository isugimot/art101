// lab8.js - Working with functions on JavaScript
// Author: Ichiro Sugimoto <isugimot@ucsc.edu>
// Date: 5/9/2023

function isEven(x){
  return (x % 2 == 0);
}

//
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [64, 90, 35, 112, 15, 500]
console.log("My array :", array);

var result = array.map(isEven);

console.log("Test of eveness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})

console.log("Square root of array:", result);