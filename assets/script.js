// var jsQuizDiv = document.querySelector("#js-quiz");
// var startBtn = document.querySelector("#start-button");
// var quesCont = document.querySelector("#questions-container");
// var timer =document.querySelector("#timer-count");
//present user start button if they want to start quiz


var questions = [
    {
        question: "A JavaScript Boolean represents one of how many values:?",
        choices: ["one", "two", "three", "four"],
        correctAnswer: 1
    },
    {
        question: "If you put two commas in a row in an array literal, the value will eaqual what?",
        choices: ["true", "NaN", "null", "undefined"],
        correctAnswer: 2 
    },
    {
        question: "A for loop repeats until a specific condition evaluates to what?",
        choices: ["true", "false", "undefined", "return"],
        correctAnswer: 0
    },
    {
        question: "A string is enclosed what type of punctuation?",
        choices: ["period", "quotation-mark", "brackets", "semicolon"],
        correctAnswer: 1
    },
    {
        question: "The Modulus arithmetic operator is written with which symbol?",
        choices: ["/", "*", "%", "()"],
        answer: 2
    },

];

//if user clicks start - start quiz and timer

//render questions for user to answer
function renderQuestion (arrObj) {
    for (var i=0; i < arrObj.length; i++) {
        
    }
}

//check user answers for true or false, save responses, deduct time if applicable

// document.querySelector("#js-quiz").addEventListener("click", function() {

// })

//check user answers for true or false, save responses, deduct time if applicable

//if all questions are answered or time runs out - game over

//user is presented score and is prompted to enter name

//user info is stored in highscores



