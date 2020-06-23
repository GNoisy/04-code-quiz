var jsQuizDiv = document.querySelector("#js-quiz");
var startBtn = document.querySelector("#start-button");
var quesCont = document.querySelector("#questions-container");
var timer =document.querySelector("#timer-count");
//present user start button if they want to start quiz

//create list of questions for the user to answer
// if (userQuestions[0].choices.b === userQuestions[0].answer) {
//     //run this code
// }

var userQuestions = [
    {
        question: "JavaScript currently has this many number of variable declarations?",
        choices: {
            a: "One",
            b: "Two",
            c: "Three",
            d: "four",
        },
        answer: "Two",
    },
    {
        question: "If you put two commas in a row in an array literal, the value will eaqual what?",
        choices: {
            a: "True",
            b: "NaN",
            c: "Null",
            d: "Undefined",
        },
        answer: "Null", 
    },
    {
        question: "A for loop repeats until a specific condition evaluates to what?",
        choices: {
            a: "True",
            b: "False",
            c: "Undefined",
            d: "Return",
        },
        answer: "True",
    },
    {
        question: "A string is enclosed what type of punctuation?",
        choices: {
            a: "Period",
            b: "Quotation-mark",
            c: "Brackets",
            d: "Semicolon",
        },
        answer: "Quotation-mark",
    },
    {
        question: "The Modulus arithmetic operator is written with which symbol?",
        choices: {
            a: "/",
            b: "*",
            c: "%",
            d: "()",
        },
        answer: "%",
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



