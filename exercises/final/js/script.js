/*

Blast.js template
Pippin Barr


*/


$(document).ready(function() {
  var counter = 300;
  var updateInterval = 1000;
  var poemSequence = 1;
  var puzzleOne = 0;
  var passTwo = $('#passcode').val();

  $('#roomOne').hide();
  $('#roomTwo').hide();
  $('#roomThree').hide();
  $('#roomFour').hide();
  $('#roomFive').hide();
  $('#roomSix').hide();
  $('#roomSeven').hide();
  $('#roomEight').hide();

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

  $('#Poem1').on('click',function() {

    responsiveVoice.speak("flower. you", "UK English Male", {rate: 1}, {volume: 1});

    (poemSequence = (poemSequence * 10) + 1);
    console.log(poemSequence);

  });

  $('#Poem2').on('click',function() {

    responsiveVoice.speak("my very eyes", "UK English Male", {rate: 1}, {volume: 1});
    (poemSequence = (poemSequence * 10) + 2);
      console.log(poemSequence);

  });

  $('#Poem3').on('click',function() {

    responsiveVoice.speak("Like a true", "UK English Male", {rate: 1}, {volume: 1});
    (poemSequence = (poemSequence * 10) + 3);
      console.log(poemSequence);

  });

  $('#Poem4').on('click',function() {

    responsiveVoice.speak("Goodbye.", "UK English Male", {rate: 1}, {volume: 1});
    (poemSequence = (poemSequence * 10) + 4);
      console.log(poemSequence);

  });

  $('#Poem5').on('click',function() {

    responsiveVoice.speak("friend, the hardest", "UK English Male", {rate: 1}, {volume: 1});
    (poemSequence = (poemSequence * 10) + 5);
      console.log(poemSequence);

  });

  $('#Poem6').on('click',function() {

    responsiveVoice.speak("Like a delicate", "UK English Male", {rate: 1}, {volume: 1});
    (poemSequence = (poemSequence * 10) + 6);
      console.log(poemSequence);

  });

  $('#Poem7').on('click',function() {

    responsiveVoice.speak("part is saying", "UK English Male", {rate: 1}, {volume: 1});
    (poemSequence = (poemSequence * 10) + 7);
      console.log(poemSequence);

  });

  $('#Poem8').on('click',function() {

    responsiveVoice.speak("blossomed right before", "UK English Male", {rate: 1}, {volume: 1});
    (poemSequence = (poemSequence * 10) + 8);
      console.log(poemSequence);

  });

  $('#confirm').on('click',function() {

    if(poemSequence == 161823574){

      puzzleOne = 1;
      console.log("CODE1ACCEPTED!");

    }

  });


  $('#Clear').on('click',function() {

    poemSequence = 1;

  });





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


  var timer = setInterval(function () { 
    counter = counter - 1;
    $('#counter').text(counter);


  },updateInterval);

  $('#room1').on('click',function(e) {
    e.preventDefault();
    console.log("Entered: Room 1");
    $('#roomOne').show();
    $('#map').hide();
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
