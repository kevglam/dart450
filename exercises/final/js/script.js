/*

Final Project
Kevin Lam


*/


$(document).ready(function() {
  var counter = 480; //Variable for the Countdown
  var updateInterval = 1000; //Update rate
  var poemSequence = 1; //Variable that keeps track of the poem order for Room 1
  var puzzleOne = 0; //Variable that keeps track of the success of Room 1
  var puzzleTwo = 0; //Variable that keeps track of the success of Room 2
  var puzzleFour = 0; //Variable that keeps track of the success of Room 4
  var puzzleSeven = 0; //Variable that keeps track of the success of Room 7
  var passTwo = $('#passcode').val(); //This variable tracks what the user inputs in a input field. (Room 2)
  var passFour = $('#books').val(); //This variable tracks what the user inputs in a input field. (Room 4)
  var passSeven = $('#Esther').val(); //This variable tracks what the user inputs in a input field. (Room 7)
  var worldPass = 0; //Variable that tracks if the player successfully completes all puzzles.

  //console.log(passTwo);
  //Function in charge of the countdown
  var timer = setInterval(function () { 
    counter = counter - 1;
    $('#counter').text(counter); //Displays countdown

    //What happens when we turn ON the lights.
    $('#turnOn').on('click',function() {
      $('body').css("background-color", "white");
      $('#roomOne').hide();
      $('#roomTwo').hide();
      $('#roomThree').hide();
      $('#roomFour').hide();
      $('#roomFive').hide();
      $('#roomSix').hide();
      $('#roomSeven').hide();
      $('#roomEight').hide();
      $('#map').hide();
      $('#Lose').hide();
      $('#Win').hide();
      $('#map').show();
      $('#AHH').show();
      $('#Welcome').hide();
      //$('#switch').hide();


    });

    //What happens when we turn OFF the lights.
    $('#turnOff').on('click',function() {
      $('body').css("background-color", "black")
      $('#roomOne').hide();
      $('#roomTwo').hide();
      $('#roomThree').hide();
      $('#roomFour').hide();
      $('#roomFive').hide();
      $('#roomSix').hide();
      $('#roomSeven').hide();
      $('#roomEight').hide();
      $('#map').hide();
      $('#Lose').hide();
      $('#Win').hide();
      $('#switch').show();
      $('#AHH').hide();


    });

    //Button to declutter on-screen information
    $('#hideHUD').on('click',function() {

      $('#AHH').hide();
      $('#note').hide();


    });

    //Button to bring back on-screen information
    $('#showHUD').on('click',function() {

      $('#AHH').show();
      $('#note').show();


    });

    //If the player runs out of time and has not completed all 4 puzzles => GAME OVER Screen is shown.
    if (counter == 0 && worldPass <= 4) {

      $('body').css("background-color", "red");
      $('#roomOne').hide();
      $('#roomTwo').hide();
      $('#roomThree').hide();
      $('#roomFour').hide();
      $('#roomFive').hide();
      $('#roomSix').hide();
      $('#roomSeven').hide();
      $('#roomEight').hide();
      $('#map').hide();
      $('#Lose').show();
      $('#Win').hide();
      $('#AHH').hide();
      $('#Welcome').hide();
      $('#switch').hide();
      $('#note').hide();

      clearInterval(timer); //Stop timer!
    }

    //What happens if you deactivate the Bomb. If the player solves all 4 puzzles.
    else if (worldPass >= 4) {


      clearInterval(counter);
      $('body').css("background-color", "white");
      $('#roomOne').hide();
      $('#roomTwo').hide();
      $('#roomThree').hide();
      $('#roomFour').hide();
      $('#roomFive').hide();
      $('#roomSix').hide();
      $('#roomSeven').hide();
      $('#roomEight').hide();
      $('#map').hide();
      $('#Lose').hide();
      $('#Win').show();
      $('#AHH').hide();
      $('#Welcome').hide();
      $('#note').hide();
      $('#switch').hide();



      clearInterval(timer); //Stop timer!

    }
  },updateInterval);

  //This controls the input field for Room 2
  $('#input').on('click',function() {

    passTwo = $('#passcode').val();
    console.log(passTwo);

    if(passTwo == "Beautiful"){ //If the user enters the right world then do this...

      puzzleTwo = 1; //Check that the player has completed room 2
      console.log("CODE2ACCEPTED!");
      worldPass = worldPass + puzzleTwo; //Increment global score to keep track of player's total progress
      responsiveVoice.speak("You Solved a Puzzle!", "UK English Male", {rate: 0.5}, {volume: 1}); //Voice indication of success
    }
    //Other spelling iterations of the right answer...
    if(passTwo == "beautiful"){

      puzzleTwo = 1;
      console.log("CODE2ACCEPTED!");
      worldPass = worldPass + puzzleTwo;
      responsiveVoice.speak("You Solved a Puzzle!", "UK English Male", {rate: 0.5}, {volume: 1});
    }
    if(passTwo == "BEAUTIFUL"){

      puzzleTwo = 1;
      console.log("CODE2ACCEPTED!");
      worldPass = worldPass + puzzleTwo;
      responsiveVoice.speak("You Solved a Puzzle!", "UK English Male", {rate: 0.5}, {volume: 1});
    }
  });

  //This controls the input field for Room 4
  $('#input4').on('click',function() {

    passFour = $('#books').val();
    console.log(passFour);

    if(passFour == "4"){ //If the right number is entered...

      puzzleFour = 1; //Check that the player has completed room 4
      console.log("CODE4ACCEPTED!");
      worldPass = worldPass + puzzleFour; //Increment global score to keep track of player's total progress
      responsiveVoice.speak("You Solved a Puzzle!", "UK English Male", {rate: 0.5}, {volume: 1});//Voice indication of success
    }
  });

  //This controls the input field for Room 7
  $('#input7').on('click',function() {

    passSeven = $('#Esther').val();
    console.log(passSeven);

    if(passSeven == "Esther"){ //If the right name is entered...

      puzzleSeven = 1; //Check that the player has completed room 7
      console.log("CODE7ACCEPTED!");
      worldPass = worldPass + puzzleSeven; //Increment global score to keep track of player's total progress
      responsiveVoice.speak("You Solved a Puzzle!", "UK English Male", {rate: 0.5}, {volume: 1}); //Voice indication of success
    }

    //Other spelling iterations of the right answer...

    if(passSeven == "esther"){

      puzzleSeven = 1;
      console.log("CODE7ACCEPTED!");
      worldPass = worldPass + puzzleSeven;
      responsiveVoice.speak("You Solved a Puzzle!", "UK English Male", {rate: 0.5}, {volume: 1});
    }

    if(passSeven == "ESTHER"){

      puzzleSeven = 1;
      console.log("CODE7ACCEPTED!");
      worldPass = worldPass + puzzleSeven;
      responsiveVoice.speak("You Solved a Puzzle!", "UK English Male", {rate: 0.5}, {volume: 1});
    }
  });

  //Hide and show what is necessary when the page is loaded.
  $('#roomOne').hide();
  $('#roomTwo').hide();
  $('#roomThree').hide();
  $('#roomFour').hide();
  $('#roomFive').hide();
  $('#roomSix').hide();
  $('#roomSeven').hide();
  $('#roomEight').hide();
  $('#Lose').hide();
  $('#Win').hide();
  $('#map').hide();
  $('#AHH').hide();

  //These are all the functions that control the Back to Map buttons to show relevant info when user wishes to return to Map.
  $('#back').on('click',function() {

    $('#roomOne').hide();
    $('#roomTwo').hide();
    $('#roomThree').hide();
    $('#roomFour').hide();
    $('#roomFive').hide();
    $('#roomSix').hide();
    $('#roomSeven').hide();
    $('#roomEight').hide();
    $('#map').show();

  });
  $('#back2').on('click',function() {

    $('#roomOne').hide();
    $('#roomTwo').hide();
    $('#roomThree').hide();
    $('#roomFour').hide();
    $('#roomFive').hide();
    $('#roomSix').hide();
    $('#roomSeven').hide();
    $('#roomEight').hide();
    $('#map').show();

  });

  $('#back3').on('click',function() {

    $('#roomOne').hide();
    $('#roomTwo').hide();
    $('#roomThree').hide();
    $('#roomFour').hide();
    $('#roomFive').hide();
    $('#roomSix').hide();
    $('#roomSeven').hide();
    $('#roomEight').hide();
    $('#map').show();

  });
  $('#back4').on('click',function() {

    $('#roomOne').hide();
    $('#roomTwo').hide();
    $('#roomThree').hide();
    $('#roomFour').hide();
    $('#roomFive').hide();
    $('#roomSix').hide();
    $('#roomSeven').hide();
    $('#roomEight').hide();
    $('#map').show();

  });
  $('#back5').on('click',function() {

    $('#roomOne').hide();
    $('#roomTwo').hide();
    $('#roomThree').hide();
    $('#roomFour').hide();
    $('#roomFive').hide();
    $('#roomSix').hide();
    $('#roomSeven').hide();
    $('#roomEight').hide();
    $('#map').show();

  });
  $('#back6').on('click',function() {

    $('#roomOne').hide();
    $('#roomTwo').hide();
    $('#roomThree').hide();
    $('#roomFour').hide();
    $('#roomFive').hide();
    $('#roomSix').hide();
    $('#roomSeven').hide();
    $('#roomEight').hide();
    $('#map').show();

  });
  $('#back7').on('click',function() {

    $('#roomOne').hide();
    $('#roomTwo').hide();
    $('#roomThree').hide();
    $('#roomFour').hide();
    $('#roomFive').hide();
    $('#roomSix').hide();
    $('#roomSeven').hide();
    $('#roomEight').hide();
    $('#map').show();

  });
  $('#back8').on('click',function() {

    $('#roomOne').hide();
    $('#roomTwo').hide();
    $('#roomThree').hide();
    $('#roomFour').hide();
    $('#roomFive').hide();
    $('#roomSix').hide();
    $('#roomSeven').hide();
    $('#roomEight').hide();
    $('#map').show();

  });

  //These are all ResponsiveVoice prompts for the sections of poems for Room 1
  $('#Poem1').on('click',function() {

    responsiveVoice.speak("flower. you", "UK English Male", {rate: 1}, {volume: 1}); //Play part of poem

    (poemSequence = (poemSequence * 10) + 1); //This is to keep track of whether or not the right sequence is clicked.
    console.log(poemSequence);

  });

  $('#Poem2').on('click',function() {

    responsiveVoice.speak("my very eyes", "UK English Male", {rate: 1}, {volume: 1}); //Play part of poem
    (poemSequence = (poemSequence * 10) + 2); //This is to keep track of whether or not the right sequence is clicked.
    console.log(poemSequence);

  });

  $('#Poem3').on('click',function() {

    responsiveVoice.speak("Like a true", "UK English Male", {rate: 1}, {volume: 1}); //Play part of poem
    (poemSequence = (poemSequence * 10) + 3); //This is to keep track of whether or not the right sequence is clicked.
    console.log(poemSequence);

  });

  $('#Poem4').on('click',function() {

    responsiveVoice.speak("Goodbye.", "UK English Male", {rate: 1}, {volume: 1}); //Play part of poem
    (poemSequence = (poemSequence * 10) + 4); //This is to keep track of whether or not the right sequence is clicked.
    console.log(poemSequence);

  });

  $('#Poem5').on('click',function() {

    responsiveVoice.speak("friend, the hardest", "UK English Male", {rate: 1}, {volume: 1}); //Play part of poem
    (poemSequence = (poemSequence * 10) + 5); //This is to keep track of whether or not the right sequence is clicked.
    console.log(poemSequence);

  });

  $('#Poem6').on('click',function() {

    responsiveVoice.speak("Like a delicate", "UK English Male", {rate: 1}, {volume: 1}); //Play part of poem
    (poemSequence = (poemSequence * 10) + 6); //This is to keep track of whether or not the right sequence is clicked.
    console.log(poemSequence);

  });

  $('#Poem7').on('click',function() {

    responsiveVoice.speak("part is saying", "UK English Male", {rate: 1}, {volume: 1}); //Play part of poem
    (poemSequence = (poemSequence * 10) + 7); //This is to keep track of whether or not the right sequence is clicked.
    console.log(poemSequence);

  });

  $('#Poem8').on('click',function() {

    responsiveVoice.speak("blossomed right before", "UK English Male", {rate: 1}, {volume: 1}); //Play part of poem
    (poemSequence = (poemSequence * 10) + 8); //This is to keep track of whether or not the right sequence is clicked.
    console.log(poemSequence);

  });

  $('#confirm').on('click',function() {

    if(poemSequence == 161823574){ //If the right sequence is played (RIGHT SEQUENCE IS: 6>1>8>2>3>5>7>4>CONFIRM)

      puzzleOne = 1; //Check that the player has completed room 1
      console.log("CODE1ACCEPTED!");
      worldPass = worldPass + puzzleOne; //Increment global score to keep track of player's total progress
      responsiveVoice.speak("You Solved a Puzzle!", "UK English Male", {rate: 0.5}, {volume: 1});  //Voice indication of success

    }

  });

  //This clears the variable that keeps track of what the player clicks. Just in case if the player enters the wrong sequence
  $('#Clear').on('click',function() {

    poemSequence = 1;

  });
  //Blast.js on diary to show the word/answer Beautiful when clicking the text.
  $('#diary').on('click',function() {

    $("#diary").blast({
      search: "beautiful"
    });

  });

  //These are responsiveVoice prompts to listen to the story/narration of the killer
  $('#Story3').on('click',function() {

    responsiveVoice.speak("Esther was the love of my life. We had great times together and we shared so much. We had the same job. I met her on the first day of the job. She helped me out with the first exercise. I was useless. She was a genius. We were bomb defusers. ", "UK English Male", {rate: 1}, {volume: 1});

  });

  $('#Story5').on('click',function() {

    responsiveVoice.speak("We had a job one day. I. I couldn’t do it. I approached the bomb and I just couldn’t do it. I didn’t know where to start and. I. I don’t know. I hesitated and I was scared. My team tried to calm me down and encourage me. You got this! They said. It’s just like the other bombs. Just think and solve, that is our job. I was frozen. Esther’s team was sent to take over. That day was the biggest and saddest regret of my life.", "UK English Male", {rate: 1}, {volume: 1});

  });

  $('#Story6').on('click',function() {

    responsiveVoice.speak("After that day. Police still couldn't arrest the people that did it. After Esther passed. My hands hesitate and crumble. Some days I am okay. I try to tune it out. But I can’t tune her out. My hesitation affected my job. I was given 6 months to recover. To figure and reassemble my brain. You need time off. I’m sorry. You’ve been through a lot and we can’t risk the lives of hundreds or thousands. I’m sorry. Said the team manager. I went home to rest but I couldn’t. Those people… They weren’t people. What they did to Esther. They need to pay.", "UK English Male", {rate: 1}, {volume: 1});

  });

  $('#Story8').on('click',function() {

    responsiveVoice.speak("I’m sorry Esther. I found them. I want to make things right. Right for me. Right for you. Maybe if I was completely there. that day. you could be here today. I’m sorry. Forgive me for my sins. Tomorrow, I will avenge you. Just one more night. One more sleep. And it will all be over. I want. to see you soon.", "UK English Male", {rate: 1}, {volume: 1});

  });


  //  var timer = setInterval(function () { 
  //  counter = counter - 1;
  //$('#counter').text(counter);


  //  },updateInterval);

  //These control what happens when we enter a room... (Buttons for Rooms 1 to 8)
  $('#room1').on('click',function(e) { //Ex. Click to enter Room 1
    e.preventDefault(); //Stop default behaviour that is to refresh the page when clicking
    console.log("Entered: Room 1");
    $('#roomOne').show(); //Show the appropriate room. In this case it is room 1
    $('#map').hide(); //Hide map.
    //responsiveVoice.speak("Welcome to room 1", "Australian Female", {rate: 1}, {volume: 1});

  });

  $('#room2').on('click',function(e) {
    e.preventDefault();
    console.log("Entered: Room 2");
    $('#roomTwo').show();
    $('#map').hide();
    //responsiveVoice.speak("Welcome to room 1", "Australian Female", {rate: 1}, {volume: 1});

  });

  $('#room3').on('click',function(e) {
    e.preventDefault();
    console.log("Entered: Room 3");
    $('#roomThree').show();
    $('#map').hide();


  });

  $('#room4').on('click',function(e) {
    e.preventDefault();
    console.log("Entered: Room 4");
    $('#roomFour').show();
    $('#map').hide();
    //responsiveVoice.speak("Welcome to room 1", "Australian Female", {rate: 1}, {volume: 1});

  });

  $('#room5').on('click',function(e) {
    e.preventDefault();
    console.log("Entered: Room 5");
    $('#roomFive').show();
    $('#map').hide();


  });

  $('#room6').on('click',function(e) {
    e.preventDefault();
    console.log("Entered: Room 6");
    $('#roomSix').show();
    $('#map').hide();


  });

  $('#room7').on('click',function(e) {
    e.preventDefault();
    console.log("Entered: Room 7");
    $('#roomSeven').show();
    $('#map').hide();
    //responsiveVoice.speak("Welcome to room 1", "Australian Female", {rate: 1}, {volume: 1});

  });


  $('#room8').on('click',function(e) {
    e.preventDefault();
    console.log("Entered: Room 8");
    $('#roomEight').show();
    $('#map').hide();


  });


});
