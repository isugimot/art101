// Lab 15: AJAX
// Author: Ichiro Sugimoto <isugimot@ucsc.edu>
// Date: 6/1/2023

function getData(){
    console.log("clicked");
    // Using the core $.ajax() method
    $.ajax({
            url: "https://yesno.wtf/api",
            type: "GET",
            data: {},
    })
    .done(function(data) {
        console.log(data.answer);
        console.log(data.image);
        $("#output").html(data.answer + "<br>");
        $("#theImg").remove();
        $("#output").append('<img id="theImg" src= ' + data.image + '>');
    })
}

$("button").click(getData);