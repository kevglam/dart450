/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  $('#One').hide();
  $('#Three').hide();
  $('#Five').hide();
  $('#Seven').hide();
  $('#Nine').hide();
  $('#Eleven').hide();
  $('#Thirteen').hide();
  $('#Fifthteen').hide();
  $('#Seventeen').hide();
  $('#Nineteen').hide();

  $('#turnOn').on('click',function() {
    $('body').css("background-color", "white");
    $('body').css("font-family", "Times New Roman")
    $('#rules').css("font-family", "Times New Roman")
    $('#rules').css("color", "black")
    $('h1').css("color", "black")

    $('#One').hide();
    $('#Three').hide();
    $('#Five').hide();
    $('#Seven').hide();
    $('#Nine').hide();
    $('#Eleven').hide();
    $('#Thirteen').hide();
    $('#Fifthteen').hide();
    $('#Seventeen').hide();
    $('#Nineteen').hide();

    $('#Two').show();
    $('#Four').show();
    $('#Six').show();
    $('#Eight').show();
    $('#Ten').show();
    $('#Twelve').show();
    $('#Fourteen').show();
    $('#Sixteen').show();
    $('#Eighteen').show();
    //$('#Twenty').show();

  });

  //What happens when we turn OFF the lights.
  $('#turnOff').on('click',function() {
    $('body').css("background-color", "black")
    $('body').css("font-family", "Comic Sans MS")
    $('#rules').css("color", "white")
    $('#rules').css("font-family", "Comic Sans MS")
    $('h1').css("color", "white")

    $('#Two').hide();
    $('#Four').hide();
    $('#Six').hide();
    $('#Eight').hide();
    $('#Ten').hide();
    $('#Twelve').hide();
    $('#Fourteen').hide();
    $('#Sixteen').hide();
    $('#Eighteen').hide();
    $('#Twenty').hide();

    $('#One').show();
    $('#Three').show();
    $('#Five').show();
    $('#Seven').show();
    $('#Nine').show();
    $('#Eleven').show();
    $('#Thirteen').show();
    $('#Fifthteen').show();
    $('#Seventeen').show();
    $('#Nineteen').show();

  });

});
