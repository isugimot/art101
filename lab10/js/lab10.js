// lab10.js - Working with functions and forms on JavaScript
// Author: Ichiro Sugimoto <isugimot@ucsc.edu>
// Date: 5/15/2023

// sortUserName takes user input and rearanges the letters
var buttonEl = document.getElementById("my-button");
var outputEl = document.getElementById("output");

buttonEl.addEventListener("click", function(){
  var userName = document.getElementById("user-name").value;
  // split string to array
  var nameArray = userName.split('');
  // array gets sorted
  var nameArraySort = nameArray.sort();
  // array gets joind back to the string
  var nameSorted = nameArraySort.join('');
  document.getElementById("output").innerHTML = nameSorted;
})