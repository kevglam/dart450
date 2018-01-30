/**********************************************

DART 450, Winter 2018
Exercise03
Kevin Lam

Description of what the script does...

**********************************************/

$(document).ready(function () {

  var counter = 60;
  var updateInterval = 1000;
  var rightAnswer = false;

  //What happens if the Bomb is still counting down.
  var timer = setInterval(function () { 
    counter = counter - 1;
    $('#counter').text(counter);

    //What happens when Time Runs Out.
    if (counter == 0 && rightAnswer == false) {

      $('body').css("background-color", "red");
      $('h1').css("background-color", "red");
      $('body').css("color", "red");
      $('#lightText').css("color", "red");
      $('h1').css("color", "red");
      $('#escape').css("color", "red");
      //$('body').prepend('<img id="fire"  src="http://i65.tinypic.com/20tff45.gif" />')
      //clearInterval(counter);
      $('#answerA').hide();
      $('#answerB').hide();
      $('#answerC').hide();
      $('#answerD').hide();
      $('#turnOn').hide();
      $('#turnOff').hide();
      clearInterval(timer);
    }

    //What happens if you deactivate the Bomb.
    else if (rightAnswer == true) {

      $('body').css("background-color", "green");
      $('h1').css("background-color", "green");
      $('body').css("color", "green");
      $('#lightText').css("color", "green");
      $('h1').css("color", "green");
      $('#escape').css("color", "black");
      clearInterval(counter);

      $('#answerA').hide();
      $('#answerB').hide();
      $('#answerC').hide();
      $('#answerD').hide();
      $('#turnOn').hide();
      $('#turnOff').hide();

      clearInterval(timer);

    }
  },updateInterval);


  //Hides answer buttons
  $('#answerA').hide();
  $('#answerB').hide();
  $('#answerC').hide();
  $('#answerD').hide();

  //What happens when we turn ON the lights.
  $('#turnOn').on('click',function() {
    $('body').css("background-color", "white");
    $('h1').css("background-color", "white");
    $('#escape').css("color", "white");

    //Show answer buttons
    $('#answerA').show();
    $('#answerB').show();
    $('#answerC').show();
    $('#answerD').show();

  });

  //What happens when we turn OFF the lights.
  $('#turnOff').on('click',function() {
    $('body').css("background-color", "black")
    $('h1').css("background-color", "black")
    $('#escape').css("color", "black");

    //Hides answer buttons
    $('#answerA').hide();
    $('#answerB').hide();
    $('#answerC').hide();
    $('#answerD').hide();

  });
  //What happens when we pick the RIGHT answer.
  $('#answerB').on('click',function() {
    // counter = 3;
    rightAnswer = true;

  });




});
