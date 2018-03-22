$(document).ready(function() {
  var height = parseInt(prompt("Enter your height in inches:"));
  if (height >= 77) {
    $(".too-tall").css("background-color","#ff2626");
  }
  else if (height >= 60) {
    $(".tall").css("background-color","#eaffa0");
  }
  else {
    $(".short").css("background-color","#eaffa0");
  }
});
