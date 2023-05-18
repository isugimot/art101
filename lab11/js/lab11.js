// lab11.js - Working with jQuery
// Author: Ichiro Sugimoto <isugimot@ucsc.edu>
// Date: 5/17/2023

var ChallengeEl = $('<input type="button" value="Challenge" id="challengeBt"\>');
$("#Challenge").append(ChallengeEl);
var ProblemEl = $('<input type="button" value="Problems" id="problemBt"\>');
$("#Problems").append(ProblemEl);
var ResultsEl = $('<input type="button" value="Results" id="resultBt"\>');
$("#output").append(ResultsEl);

var TaskX1El = $('<input type="button" value="Task X, Challenge" id="taskx1Bt"\>');
$("#output").append(TaskX1El);
var TaskX2El = $('<input type="button" value="Task X, Problems" id="taskx2Bt"\>');
$("#output").append(TaskX2El);
var TaskX3El = $('<input type="button" value="Task X, Results" id="taskx3Bt"\>');
$("#output").append(TaskX3El);

$("#challengeBt").click(function(){
  $('#Challenge').toggleClass("special");
})

$("#problemBt").click(function(){
  $('#Problems').toggleClass("special");
})

$("#resultBt").click(function(){
  $('#output').toggleClass("special");
})

$("#taskx1Bt").click(function(){
  $('#challengeBt').toggleClass("taskx1");
})
$("#taskx2Bt").click(function(){
  $('#problemBt').toggleClass("taskx2");
})
$("#taskx3Bt").click(function(){
  $('#resultBt').toggleClass("taskx3");
})