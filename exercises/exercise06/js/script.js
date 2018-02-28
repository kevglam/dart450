/*

Blast.js template
Pippin Barr


*/

$(document).ready(function() {




$('#tap').on('click',function() {

  $("#tap").blast({ delimiter: "character" }).animate({color:'rgba(0, 0, 0, 0.5)'},500);

  $("#glass").blast({ delimiter: "character" }).animate({color:'rgba(255, 255, 255, 0.5)'},4000);

  });

});
