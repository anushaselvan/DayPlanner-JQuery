var today = moment().format("LLLL");
$("#currentDay").text(today);

var rowTextArea = ['9','10','11','12','13','14','15','16','17'];

var currentTime = moment().format("HH");
for (var i=0; i<rowTextArea.length; i++) {
console.log(rowTextArea[i]);
    if(currentTime === rowTextArea[i])
    {
       $(".time-block").children().eq(i).children().eq(1).addClass("red");
    }
    if(currentTime < rowTextArea[i])
    {
       $(".time-block").children().eq(i).children().eq(1).addClass("green");
    }
    if(currentTime > rowTextArea[i])
    {
       $(".time-block").children().eq(i).children().eq(1).addClass("grey");
  }
}

$(".saveBtn").on("click", function(event){
  var textData = event.target.parentElement.children[1].value;
  localStorage.setItem(event.target.attributes[0].value, textData);
});

$(document).ready(function(){
  if(localStorage["btn9"] !== null && localStorage["btn9"] !== undefined){
    var nine = $("<p>"+ localStorage["btn9"] +"</p>");
    $("#nine").append(nine[0].innerText);
  } 
});

  $(document).ready(function(){
    if(localStorage["btn10"] !== null && localStorage["btn10"] !== undefined){
      var ten = $("<p>"+ localStorage["btn10"] +"</p>");
      $("#ten").append(ten[0].innerText);
    } 
});

$(document).ready(function(){
  if(localStorage["btn11"] !== null && localStorage["btn11"] !== undefined){
    var eleven = $("<p>"+ localStorage["btn11"] +"</p>");
    $("#eleven").append(eleven[0].innerText);
  }
});

$(document).ready(function(){
  if(localStorage["btn12"] !== null && localStorage["btn12"] !== undefined){
    var twelve = $("<p>"+ localStorage["btn12"] +"</p>");
    $("#twelve").append(twelve[0].innerText);
  } 
});

$(document).ready(function(){
  if(localStorage["btn13"] !== null && localStorage["btn13"] !== undefined){
    var thirteen = $("<p>"+ localStorage["btn13"] +"</p>");
    $("#thirteen").append(thirteen[0].innerText);
  } 
});

$(document).ready(function(){
  if(localStorage["btn14"] !== null && localStorage["btn14"] !== undefined){
    var fourteen = $("<p>"+ localStorage["btn14"] +"</p>");
    $("#fourteen").append(fourteen[0].innerText);
  } 
});

$(document).ready(function(){
  if(localStorage["btn15"] !== null && localStorage["btn15"] !== undefined){
    var fifteen = $("<p>"+ localStorage["btn15"] +"</p>");
    $("#fifteen").append(fifteen[0].innerText);
  } 
});

$(document).ready(function(){
  if(localStorage["btn16"] !== null && localStorage["btn16"] !== undefined){
    var sixteen = $("<p>"+ localStorage["btn16"] +"</p>");
    $("#sixteen").append(sixteen[0].innerText);
  }
});

$(document).ready(function(){
  if(localStorage["btn17"] !== null && localStorage["btn17"] !== undefined){
    var seventeen = $("<p>"+ localStorage["btn17"] +"</p>");
    $("#seventeen").append(seventeen[0].innerText);
  } 
});
