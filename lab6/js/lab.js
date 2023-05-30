// index.js - Working with arrays and objects on JavaScript
// Author: Ichiro Sugimoto
// Date: 5/1/2023

// Constants
const myTransport = ["Bus", "Car", "Walking"]

var myMainRide = {
  make: "Honda", 
  model: "Honda E", 
  color: "Black", 
  year: 2020, 
  age: function() {
    return 2023 - this.year;
  }
}
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
  document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");
  // the code that makes everything happen
}

// let's get this party started
main();
