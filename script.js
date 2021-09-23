var today = moment().format("LLLL");
$("#currentDay").text(today);
/*var txtArea10 = $("textarea");
var txtArea11 = $("textarea");
var txtArea12 = $("textarea");
var txtArea13 = $("textarea");
var txtArea14 = $("textarea");
var txtArea15 = $("textarea");
var txtArea17 = $("textarea");
var txtArea18 = $("textarea");
var txtArea = [ "txtArea9","txtArea10","txtArea11","txtArea12","txtArea13", "txtArea14", "txtArea15", "txtArea16", "txtArea17"];
console.log(txtArea);
var row9 = $("#9");
var row10 = $("#10");
var row11 = $("#11");
row11 = 11;
var row12 = $("#12");
row12 = 12;
var row13 = $("#13"); 
row13 = 13;
var row14 = $("#14");
row14 = 14;
var row15 = $("#15");
row15 = 15;
var row16 = $("#16");
row16 = 16;
var row17 = $("#17");
row17 = 17;
var rowTextArea = ["row9", "row10", "row11", "row12", "row13", "row14", "row15", "row16", "row17"];
row9 = 9;row10 = 10;row11 = 11;*/

var rowTextArea = ['9','10','11','12','13','14','15','16','17'];

console.log(rowTextArea);
var currentTime = moment().format("HH");
var currentTime = 15;
console.log(currentTime);
for (var i=0; i<rowTextArea.length; i++) {
console.log("come here");
console.log(rowTextArea[i]);
    if(currentTime == rowTextArea[i])
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
/*var btn9 = $("#9");
var btn10 = $("#10");
var btn =["btn9", "btn10"];

function saveText(){
    if(btn9)
{
    localStorage.setItem = $("textarea").val();
}
}

function loadText(){
    $("textarea").val(localStorage.textarea9);
  //  $("textarea").val(localStorage.textarea10);

}

$(window).on('unload', function(){
  saveText();
  loadText();
  });
  

btn9.click(saveText);
//btn10.click(saveText)
*/
var txtArea11 = $("textarea");
var txtArea12 = $("textarea");
var txtArea13 = $("textarea");
var txtArea14 = $("textarea");
var txtArea15 = $("textarea");
var txtArea17 = $("textarea");
var txtArea18 = $("textarea");
var textarea = [ "txtArea9","txtArea10","txtArea11","txtArea12","txtArea13", "txtArea14", "txtArea15", "txtArea16", "txtArea17"];

var textData = { set : function(){
                    var textData = [];
                    var txtArea10 = $("textarea");
                    $('textarea').each(function(){
                      for(var i=0; i<textarea.length; i++)
                      {
                      textData.push(textarea[i].value);
                      }
                    }); 
                    localStorage.textData = JSON.stringify(textData);
                  },
                get : function(){
                  if(localStorage.textData != undefined){
                    textData = JSON.parse(localStorage.textData);
                    for(var i=0; i< textData.length;i++){
                    $("textarea[i]").val(textarea[i].value);
                  }
                }
              }
            }
          textData.get();
          $("button").click(function(){
            textData.set();
          });


