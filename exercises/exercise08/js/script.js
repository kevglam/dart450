/*

Blast.js template
Pippin Barr


*/


$(document).ready(function() {

//Buttons to go into rooms
  $('#room1').on('click',function() {

//Open in a new window/tab
      window.open("page2.html");
      responsiveVoice.speak("Welcome to room 1", "UK English Female", {rate: 1}, {volume: 1});

  });

  $('#room2').on('click',function() {


      window.open("two.html");
      responsiveVoice.speak("Welcome to room 2", "UK English Male", {rate: 1}, {volume: 1});

  });

  $('#room3').on('click',function() {


      window.open("three.html");
      responsiveVoice.speak("Welcome to room 3", "Hindi Female", {rate: 1}, {volume: 1});

  });

  $('#room4').on('click',function() {


      window.open("four.html");
      responsiveVoice.speak("Welcome to room 4", "Australian Female", {rate: 1}, {volume: 1});

  });

  });
