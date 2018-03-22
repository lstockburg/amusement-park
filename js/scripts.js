$(document).ready(function() {
  var height = parseInt(prompt("Enter your height in inches:"));
  if (height >= 60) {
    $(".tall").css("background-color","#eaffa0")
  }
});
