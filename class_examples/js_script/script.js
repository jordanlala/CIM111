$(document).ready(function() {

  $("button").click(function() {
    $("p").hide();
  });

  // $("h2").mouseover(function(){
  //   $("h2").css("background-color", "blue");
  // });

  $("h1").mouseout(function(){
    $("h1").css("background-color", "black");
  });

  $("button").click(function(){
    $("h2").hide();
  });

$("#brews").mouseover(function() {
  $("#brews").toggle(1000);
  console.log("")
});
