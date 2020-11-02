//Getting all required elements

var startButton = document.getElementById("button-start");
var timer = document.getElementById("timer");
var highscore = document.getElementById("highscore");
var questionOne = document.getElementById("first-question");
var questionTwo = document.getElementById("second-question");
var questionThree = document.getElementById("third-question");
var questionFour = document.getElementById("fourth-question");
var questionFive = document.getElementById("fifth-question");
var setsOfQuestions = document.getElementById("#sets");
var score = 0;


startButton.addEventListener("click", startQuiz);

function startQuiz(){
   countdown = 75
   setsOfQuestions.classList.remove('hide')

}

//setInterval to do the timed functionality 
var countdown = 75; //put it where the function begins  do timeStart =75

function timeStart () {
   countdown = countdown -1;
   if (countdown < 75) {
      timer.innerHTML = countdown;
   }

}
if (countdown < 1) {
   window.clearInterval(update);
}

update = setInterval("timeStart()", 1000);





   


//set starting score and start the interval to begin the startdown

//Start the interval to begin the countdown

//clear interval to stop the timeout

// VAR CurrentScore /timeleft







//Question to loop over, arrays 

//Var pointer/index - Current position in the question  array index will be set ot 0 to start ques 1. 
//event delegation to listen to clicks, == pointer global index and then recall next question 
//VAR QUESTION  = {
   // {
    //"Coding related questions"
                //List of answers 
                //sub array in object
                //correct answer
                //compare property for right answer
   // }
//}

//display and hide elements 
//

