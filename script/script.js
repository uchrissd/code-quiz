window.onload = function() {
  console.log("starting");
};

//Variables for index, countdown, score

var index = 0;
var countDown = 15;
var score = 0;

//DOM variables

//Button text

//Iniate the quiz on click of the start button

document.getElementById("start-button").addEventListener("click", event => {
  console.log("hello");
  document.getElementById("start-quiz").classList.add("d-none");
  document.getElementById("quiz-questions").classList.remove("d-none");
  renderQuestions();
});

document.getElementByClass("answer").addEventListener("click", event => {
  //Do something
});
document.getElementByClass("not-answer").addEventListener("click", event => {
  //Do something else
});
//Loop through array to grab questions from object and present them to screen with buttons for the multiple choices

function renderQuestions() {
  var questionsIndexLength = questions.length - 1;
  if (index <= questionsIndexLength) {
    document.getElementById("question").innerHTML = questions[index].title;
    renderQuestionChoices();
  }
}

function renderQuestionChoices() {
  var questionChoicesArray = questions[index].choices;
  for (var i = 0; i < questionChoicesArray.length; i++) {
    console.log(i);
    var questionChoicesEl = document.getElementById("question-choices");
    var options = document.createElement("button");
    options.innerHTML = questionChoicesArray[i].text;
    if (questionChoicesArray[i].answer == true) {
      options.classList.add("answer");
    } else {
      options.classList.add("not-answer");
    }
    questionChoicesEl.append(options);
  }
}

function goToNextQuestion() {}

//I need a function that creates buttons
//I need a function that captures the events
// I need a function that prompts the questions and redraws the buttons
//I need a function that prompts correct or not
//
