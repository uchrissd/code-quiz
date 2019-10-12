window.onload = function() {
  console.log("starting");
};

//Global ariables for index, countdown, score

var index = 0;
var countDown = 75;
var score = 0;
var highScore = 0;

//Iniate the quiz on click of the start button and remove the hidden class from the first group of divs

document.getElementById("start-button").addEventListener("click", event => {
  console.log("hello");
  document.getElementById("start-quiz").classList.add("d-none");
  document.getElementById("quiz-questions").classList.remove("d-none");
  renderQuestions();
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
    // console.log(i);
    var questionOptionsDiv = document.getElementById("question-choices");
    var questionButtons = document.createElement("button");
    questionButtons.innerHTML = question[option];
    //index = question #
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

//This variable sets the time for the quiz by taking in the set time function
var quizTime = setInterval(setTime, 1000);

//This function starts the countdown for the time left clock quiz timer

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
