/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

var ambitions = [];

$(document).ready(function () {

  $('#titleDiv').on('click',function () {
    $('#titleDiv').css({
      color: '#D41B20'
    })
  });


  $('#addButton').on('click',function() {
    $('#exampleDiv').append('<div id=>' + $('#ambitionInput').val() + '</div>');
  });

  $('#resetButton').on('click',function() {
    $('#exampleDiv').text(' ');
  });

  $('#exampleDiv').hover(function () {
    $(this).animate({
      fontSize: '+=1em',
    },1000);
});
  // Insert jQuery code here to run when the page is loaded

});
