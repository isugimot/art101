// index.js - For lab 5
// Author: Ichiro Sugimoto <isugimot@ucsc.edu>
// Date: 4/27/2023
// Licence: Public Domain

// Constants
make = "Honda";
model = "Honda E";
color = "Black";
year = "2020";
ownIt = false;

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  age = 2023 - year;
  // return results;
}

function main() {
  console.log("Main function started.");
  document.writeln("Make: " + make + "<br>");
  document.writeln("Model: " + model + "<br>");
  document.writeln("Color: " + color + "<br>");
  document.writeln("Year: " + year + "<br>");
  document.writeln("Is Owning: " + ownIt + "<br>");
  document.writeln("Age: " + age + " years<br>");
  // the code that makes everything happen
}

// let's get this party started
main();
