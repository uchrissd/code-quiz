window.onload = function() {
  console.log("starting");
};

//Global ariables for index, countdown, score

var index = 0;
var countDown = 75;
var score = 0;
var highScore = 0;
var quizTime;

//Iniate the quiz on click of the start button and remove the hidden class from the first group of divs

document.getElementById("start-button").addEventListener("click", event => {
  console.log("hello");
  document.getElementById("start-quiz").classList.add("d-none");
  document.getElementById("quiz-questions").classList.remove("d-none");
  setTime();
  renderQuestions();
  quizTime = setInterval(setTime, 1000);
});

//This fucntion renders the questions
function renderQuestions() {
  var questionsIndexLength = questions.length - 1;
  if (index <= questionsIndexLength) {
    document.getElementById("question").innerHTML = questions[index].title;
    renderQuestionChoices();
  }
}

//This function renders the multiple-choice options on the HTML page as buttons
function renderQuestionChoices() {
  var question = questions[index].choices;
  console.log(question);
  for (var option = 0; option < question.length; option++) {
    var questionOptionsDiv = document.getElementById("question-choices");
    var questionButtons = document.createElement("button");
    questionButtons.className = "btn btn-primary d-flex justify-content-around";
    questionButtons.innerHTML = question[option];
    //index = question #
    //This fires the check answer function when the user clicks a question choices button
    questionButtons.setAttribute(
      "onclick",
      "checkAnswer(" + index + "," + option + ");"
    );
    questionOptionsDiv.append(questionButtons);
  }
}

function clearQuestionDiv() {
  console.log("About to clear html");
  document.getElementById("question-choices").innerHTML = "";
}

function checkAnswer(question, answer) {
  console.log("question: ", question);
  console.log("asnwer: ", answer);
  let correctAnswer = questions[question].answer;
  let userAnswer = questions[question].choices[answer];
  if (userAnswer == correctAnswer) {
    index = index + 1;
    score = score + 1;
    console.log(score);
    console.log("Next question: ", index);
    clearQuestionDiv();
    renderQuestions();

    console.log("Correct");
  } else alert("Uh oh! That's the wrong answer. Try again!");

  console.log("Incorrect");
}

//This function starts the countdown for the time left clock quiz timer when the user clicks the start button

function setTime() {
  document.getElementById("quiz-time").innerHTML = countDown + "sec left";
  countDown--;
  if (countDown == -1) {
    clearInterval(quizTime);
    alert("Time out!!");
  }
}

function userScore() {}

//I need a function that creates buttons
//I need a function that captures the events
// I need a function that prompts the questions and redraws the buttons
//I need a function that prompts correct or not
//
