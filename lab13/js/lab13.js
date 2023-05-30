// lab13.js - Loops
// Author: Ichiro Sugimoto <isugimot@ucsc.edu>
// Date: 5/24/2023

function FizzBuzz(max, factor){
  $("#output").css("height", (max/4) + "em");
  for(var i = 1; i <= max; i++){
    var out = "";
    for(var f in factor){
      if(i % f == 0){
        out += factor[f];
      }
    }
    if(out){
      out = " - " + out + "!";
    }
    $("#output").append("<li>" + out + "</li>");
  }
}

  $("#submit").click(function(){
    var max = document.getElementById("max").value;
    console.log("max: ", max);
  if(! max){
      $("#output").append("<p>Provide a maximum value</p>");
   }
    else{
     var text0 = document.getElementById("text0").value;
     var num0 = document.getElementById("num0").value;
     var text1 = document.getElementById("text1").value;
     var num1 = document.getElementById("num1").value;
     var text2 = document.getElementById("text2").value;
     var num2 = document.getElementById("num2").value;
     var text3 = document.getElementById("text3").value;
     var num3 = document.getElementById("num3").value;
     const factor = {};
     factor[num0] = text0;
     factor[num1] = text1; 
     factor[num2] = text2;
     factor[num3] = text3;

     FizzBuzz(max, factor);
    }
  })