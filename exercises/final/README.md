Title: DeactivateFour by Kevin Lam

Concept
-------
DeactivateFour is a Time Bomb narrative game. You find yourself in a dark room and soon realize that you are not alone. There is a time bomb with you! The goal of the game is to roam around the mysterious exitless house, unlock the four puzzles to deactivate the bomb and discover who the culprit is. All of which you must do before you are blown to smithereens.
The idea behind the game’s design is escape rooms. I wanted to recreate a smaller scale version of puzzles that you would find in escape rooms and develop a thrilling and on-the-edge-of-your-seat experience.  

Implementation
-------
The web-based game is heavily click reliant and it allows me to mix and match various libraries and technical notions we have learned in class (ex. blast.js, ResponsiveVoice, Buttons, Input Fields, etc.) 
The player can enter many different rooms by clicking on the map. While it appears as though the game is laid out in many pages, it is actually just one page. By using click events I am able to hide and show the relevant information on the page depending on what the player is doing. I made it like this to make progress tracking easier. 
In terms of progress tracking, there are four variables that are originally set to 0. Once the player succeeds at solving a puzzle, that variable is then set to 1. If all four variables are set to 1, then that is when we move onto the winning scene of the game.
As for the puzzles, they are generally made up of the various libraries we have tackled during the semester. These puzzles utilize the libraries to create interactive riddles or mini-games that the player must play to solve. 
The most effective aspect of the whole project that ties in everything is the ticking timer. It creates stress and pace within the game. This is done through a counter variable that is constantly updated to countdown. 

Behind The Killer’s Mask
-------
[Spoilers] – The point of the game was to tap into a psychopath’s mindset and be immersed into his or her world/point of view. As the player progresses into the game, he/she discovers the horrific and traumatic life of the culprit behind the time bomb. The narrative is set up to make everything seem like a dream. That is because it is! We are the culprit and this game takes place during that “One Last Sleep” that the murderer mentions before he seeks revenge and commits an act of crime. Basically, if you win the game, you discover that you wake up from a dream and you were the culprit all along. Everything is made to enforce the idea of “we’re all just having a nightmare”. From the surreal floor plan having no visual door or exit to the overly dramatic narration and storyline, all of it ties in to make an over-the-top world that is odd and mysterious. The time bomb scenario mirrors the killer’s plan for revenge that he will put into works as he awakens.
