var timer = 60;
var score = 0;
var currentScore = document.querySelector("#current-score");
var scores = [];
var hiScoresEl = document.getElementById("hi-scores");
var currentQuestion = 0;
var startTimer;

var questions = [
  {
    question: "A JavaScript Boolean represents one of how many values:?",
    choices: ["one", "two", "three", "four"],
    correctAnswer: 1,
  },
  {
    question:
      "If you put two commas in a row in an array literal, the value will eaqual what?",
    choices: ["true", "NaN", "null", "undefined"],
    correctAnswer: 2,
  },
  {
    question:
      "A for loop repeats until a specific condition evaluates to what?",
    choices: ["true", "false", "undefined", "return"],
    correctAnswer: 0,
  },
  {
    question: "A string is enclosed what type of punctuation?",
    choices: ["period", "quotation-mark", "brackets", "semicolon"],
    correctAnswer: 1,
  },
  {
    question: "The Modulus arithmetic operator is written with which symbol?",
    choices: ["/", "*", "%", "()"],
    correctAnswer: 2,
  },
];

function createTimer() {
  startTimer = setInterval(function () {
    document.getElementById("timer").innerHTML = timer--;
    // display the updated timer on the screen
    if (timer === 0) {
      console.log("I'm in timer");
      endQuiz();
      stopTimer(); // stops setInterval from running
    }
    // check if timer == 0
    // end the quiz
  }, 1000);
}

function stopTimer() {
  clearInterval(startTimer);
}

function displayQuestion() {
  document.getElementById("question").innerHTML = "";
  document.getElementById("answers").innerHTML = "";
  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = questions[currentQuestion].choices[i];
    button.value = i; // button's value is the number of the answer
    button.addEventListener("click", function (event) {
      // check if the answers is incorrect
      // deduct 10 seconds
      if (
        parseInt(event.target.value) !==
        questions[currentQuestion].correctAnswer
      ) {
        document.getElementById("feedback").innerHTML = "Incorrect!";
        timer -= 10;
      } else {
        document.getElementById("feedback").innerHTML = "Correct!";
        score += 5;
        currentScore.textContent = score;
      }
      if (currentQuestion === questions.length - 1) {
        // finish the quiz
        setTimeout(function () {
          endQuiz();
        }, 1000);
      } else {
        // move onto the next question
        setTimeout(function () {
          currentQuestion += 1;
          document.getElementById("feedback").innerHTML = "";
          displayQuestion();
        }, 1000);
      }
    });
    document.getElementById("answers").appendChild(button);
  }
}

function showScores() {
  hiScoresEl.innerHTML = "";
  for (var i = 0; i < scores.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `player: ${scores[i].init}, score: ${scores[i].score}`;
    hiScoresEl.appendChild(li);
  }
  document.getElementById("hi-score-container").classList.remove("hidden");
}

function endQuiz() {
  // clears the screen
  // ask for the user\'s initials
  stopTimer();
  var initials = prompt("Enter your initials: ");
  // add initials and scores to the scores array
  scores.push({
    init: initials,
    score: score,
  });
  // scores.sort(function (a, b) {
  //   return b.time - a.time;
  // });
  // save their initials and their score in localStorage
  localStorage.setItem("scores", JSON.stringify(scores));
  // use a for loop to display the scores on the screen
  showScores();
}

function loadScores() {
  scores = JSON.parse(localStorage.getItem("scores")) || [];
}

function initialize() {
  document.querySelector("#view-score").addEventListener("click", function () {
    showScores();
  });

  document.getElementById("start").addEventListener("click", function () {
    createTimer();
    currentScore.textContent = score;
    document.getElementById("start").style.display = "none";
    document.getElementById("js-quiz").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("hi-score-container").classList.add("hidden");
    displayQuestion();
  });
  loadScores();
}

initialize();
