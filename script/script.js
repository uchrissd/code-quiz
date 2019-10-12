window.onload = function() {
  console.log("starting");
};

//Variables for index, countdown, score

var index = 0;
var countDown = 15;
var score = 0;

//DOM variables

//Button text

//Iniate the quiz on click of the start button and remove the hidden class from the first group of divs

document.getElementById("start-button").addEventListener("click", event => {
  console.log("hello");
  document.getElementById("start-quiz").classList.add("d-none");
  document.getElementById("quiz-questions").classList.remove("d-none");
  renderQuestions();
});
//When user submits the correct answer, promt them with the next question
if (document.getElementsByClassName("answer")) {
  addEventListener("click", event => {
    // console.log(index);
    //Do something
  });
}
//When the user submits the wrong answer, alert them and re-prompt them with the current question
if (document.getElementsByClassName("not-answer")) {
  addEventListener("click", event => {
    alert;
    //Do something else
  });
}
//This function renders the questions from the question array to the HTML page

function renderQuestions() {
  var questionsIndexLength = questions.length - 1;
  if (index <= questionsIndexLength) {
    document.getElementById("question").innerHTML = questions[index].title;
    renderQuestionChoices();
  }
}

//This function renders the multiple-choice options on the HTML page as buttons
function renderQuestionChoices() {
  var questionChoicesArray = questions[index].choices;
  for (var i = 0; i < questionChoicesArray.length; i++) {
    // console.log(i);
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
