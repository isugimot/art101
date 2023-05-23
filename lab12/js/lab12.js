// lab12.js - Conditionals
// Author: Ichiro Sugimoto <isugimot@ucsc.edu>
// Date: 5/22/2023

const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff", "Azkaban"];

function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
  }
  return hash;
}

function sortingHat(str){
  hash = Math.abs(hashCode(str));
  mod = hash % houses.length;
  return houses[mod];
}

function housesExpl(str){
  if(str == "Gryffindor"){
    return "You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve and chivalry";
  }
  else if(str == "Ravenclaw"){
    return "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind";
  }
  else if(str == "Slytherin"){
    return "Or perhaps in Slytherin, You'll make your real friends, Those cunning folk use any means, To achieve their ends.";
  }
  else if(str == "Hufflepuff"){
    return "You might belong in Hufflepuff Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil";
  }
  else{
    return "Azkaban!!!!!";
  }
}

var buttonEl = document.getElementById("button");
buttonEl.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var explain = housesExpl(house);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
  document.getElementById("TaskX").innerHTML = explain;
})