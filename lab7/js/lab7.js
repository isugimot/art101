// lab7.js - Working with functions on JavaScript
// Author: Ichiro Sugimoto <isugimot@ucsc.edu>
// Date: 5/4/2023

// sortUserName takes user input and rearanges the letters
function sortUserName() {
  var userName = window.prompt("Hello. Please tell me your name so that I can fix it");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // array gets sorted
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // array gets joind back to the string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
} 

document.writeln("Here is your new and corrected name. Enjoy!: ", sortUserName(), "</br>");