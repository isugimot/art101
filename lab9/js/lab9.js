// lab9.js - The javascript is used to experiment with DOM manipulation
// Author: Ichiro Sugimoto <isugimot@ucsc.edu>
// Date: 5/10/2023

//Appending new1El and new2El to outputEl
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerHTML = "Added strings!";
var new2El = document.createElement("p");
new2El.innerHTML = "Added another string!";
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//Changing CSS attributes
new1El.style.color = "blue";
new1El.style.textDecoration = "underline";

new2El.style.color = "red";
new2El.style.fontStyle = "italic";

// Creating new elment with new string
var new3El = document.createElement("p");
new3El.innerHTML = "Prepended strings";
// Prepending the new element so that it will add a element to the top of an element
new2El.prepend(new3El);

// Change the style of the new element
new3El.style.color = "yellow";
new3El.style.fontStyle = "bold";

// Add buttonEl with the id button
var buttonEl = document.createElement("button");
buttonEl.id = "button";
buttonEl.innerHTML = "Hover over!";
// Add event listner for the "click" event on the button element
buttonEl.addEventListener("click", function(){
  // When the "click" event occurs, show a alert on the screen.
  alert("don't hover over me!");
})
// Add event listener for the "mouseover" event on the button element
buttonEl.addEventListener("mouseover", function(){
  // When the "mouseover" event occurs, trigger a click event on the button
  this.click();
})
outputEl.appendChild(buttonEl);

