// Lab 16: JSON and APIs
// Author: Ichiro Sugimoto <isugimot@ucsc.edu>
// Date: 6/6/2023

var comicnum = 0;
var max = 0;

$.ajax({
    url: "https://xkcd.com/info.0.json",
    type: "GET",
    data: {},
    dataType: "json",
    success: (function(data) {
        console.log("success");
        console.log(data);
        var comicObj = data;
        comicnum = comicObj.num;
        max = comicObj.num;
        $("#output").html("<h3>" + comicObj.title + "<h3>");
        $("#output").append('<img src= ' + comicObj.img + ' alt=' + comicObj.alt + ' title="Image">');
    })
})

function getAndPutData(number){
    $.ajax({
        url: "https://xkcd.com/" + number + "/info.0.json",
        type: "GET",
        data: {},
        dataType: "json",
        success: (function(data) {
            console.log("getAndPutData");
            console.log(data);
            var comicObj = data;
            $("#output").html("<h3>" + comicObj.title + "<h3>");
            $("#output").append('<img src= ' + comicObj.img + ' alt=' + comicObj.alt + ' title="Image">');
        })
    })
}

function NextButton(){
    console.log("Next");
    comicnum += 1;
    if(comicnum > max){
        comicnum = 1;
    }
    getAndPutData(comicnum);
}

function PrevButton(){
    console.log("Prev");
    comicnum -= 1;
    if(comicnum < 1){
        comicnum = max;
    }
    getAndPutData(comicnum);
}

$("#next").click(NextButton);
$("#prev").click(PrevButton);