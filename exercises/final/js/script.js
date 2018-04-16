/*

Blast.js template
Pippin Barr


*/


$(document).ready(function() {
  var counter = 300;
  var updateInterval = 1000;

  $('#roomOne').hide();
  $('#roomTwo').hide();
  $('#roomThree').hide();
  $('#roomFour').hide();
  $('#roomFive').hide();
  $('#roomSix').hide();
  $('#roomSeven').hide();
  $('#roomEight').hide();

  var timer = setInterval(function () { 
    counter = counter - 1;
    $('#counter').text(counter);


  },updateInterval);
});

$('#room1').on('click',function(e) {
      e.preventDefault();
      console.log("Entered: Room 1");
      $('#roomOne').show();
      $('#map').hide();
      responsiveVoice.speak("Welcome to room 1", "Australian Female", {rate: 1}, {volume: 1});

  });
