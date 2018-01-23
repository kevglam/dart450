/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/



$(document).ready(function () {
  var fire_count = 0;

  $('#titleDiv').on('click',function () {
    $('#titleDiv').css({
      color: '#D41B20'
    })
  });


  $('#addButton').on('click',function() {
    $('#exampleDiv').append('<div id=>' + $('#ambitionInput').val() + '</div>');
  });

  $('#LightFire').on('click',function() {
    //$('#exampleDiv').text(' ');
    $('#exampleDiv').prepend('<img id="fire"  src="http://i65.tinypic.com/245zssj.gif" />')
    fire_count++;
    console.log(fire_count)
    if(fire_count == 25) {
      $('#exampleDiv').text(' ')
      $('#exampleDiv').prepend('<img id="fire"  src="http://i65.tinypic.com/2nvcs8y.gif" />')
      fire_count = 0;
    }
  });
//http://i65.tinypic.com/2nvcs8y.gif 700x700


  $('#LightsOut').on('click',function() {
    //$('#exampleDiv').text(' ');
    $('#exampleDiv').text(' ')
    $('exampleDiv').css("background-color", "black")
    fire_count = 0;
  });


/*
  $('#fire').hover(function () {
    $('#fire').animate({ left: '100px', opacity: });
});


/*
 $('#exampleDiv').hover(function () {

   $('#fire').css({
     transform: 'scale(5)'
   }, 1000);


 })
 */
  // Insert jQuery code here to run when the page is loaded

});
