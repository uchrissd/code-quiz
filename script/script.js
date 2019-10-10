window.onload = function() {
  console.log("starting");
};

//Variables for index, countdown, score

// import exportQuestions  from "questions.js";
// var questions = exportQuestions.exportQuestions();
// console.log(questions);

var index = 0;
var countDown = 15;
var score = 0;

//Iniate the quiz on click of the start button

document.getElementById("start-button").addEventListener("click", event => {
  console.log("hello");
});

//Write the for loop to loop through the array

function questionLoop() {
  for (var i = 0; i < questions.length; i++) {
    console.log(i);
  }
}

//I need a function that creates buttons
//I need a function that captures the events
// I need a function that prompts the questions and redraws the buttons
//I need a function that prompts correct or not
//
