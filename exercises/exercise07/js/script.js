/*

Blast.js template
Pippin Barr


*/

$(document).ready(function() {


  $('#buttonA').on('click',function() {

    responsiveVoice.speak("Into the fire.", "UK English Female", {rate: 1}, {volume: 1});

  });

  $('#buttonB').on('click',function() {

    responsiveVoice.speak("In sorrow, one of us.", "UK English Female", {rate: 1}, {volume: 1});

  });
  $('#buttonC').on('click',function() {

    responsiveVoice.speak("and, the other seeks shelter.", "UK English Female", {rate: 1}, {volume: 1});

  });
  $('#buttonD').on('click',function() {

    responsiveVoice.speak("In love, we walk.", "UK English Female", {rate: 1}, {volume: 1});

  });
  $('#buttonE').on('click',function() {

    responsiveVoice.speak("With hands together.", "UK English Female", {rate: 1}, {volume: 1});

  });
  $('#buttonF').on('click',function() {

    responsiveVoice.speak("is called a liar.", "UK English Female", {rate: 1}, {volume: 1});

  });


  //responsiveVoice.speak("The code that you are looking for is in this room but I cannot tell you where it is.", "French Female", {rate: 0.2}, {volume: 1});

});
