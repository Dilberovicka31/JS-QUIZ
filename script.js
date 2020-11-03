//Getting all required elements

var startButton = document.getElementById("button-start");
var timer = document.getElementById("timer");
var highscore = document.getElementById("highscore");
var start = document.getElementById("start-quiz");
var quiz = document.getElementById("quiz");
startButton.addEventListener("click", startQuiz);
var index = 0;
var score = 0;
countdown = 75;



function startQuiz(){
   start.style.display = "none";
   quiz.style.display = "block";
   timeStart();
   renderQuestions();
  
   

}


function renderQuestions(){
   var questionsIndexLength = questions.length - 1;
   if (index <= questionsIndexLength) {
      document.getElementById("question").innerHTML = questions[index].title;
      renderQuestionChoices();
   }

}
function renderQuestionChoices(){
      var question = questions[index].choices;
      for( var option = 0; option < question.length;option++) {
         var questionOptionDiv = document.getElementById("question-choices");
         var questionButton = document.createElement("button");
         questionButton.className = "btn btn-primary";
         questionButton.innerHTML = question[option];
         questionButton.setAttribute(
            "onclick", 
            "checkAnswer(" + index + "," + option + ");"
        );


         questionOptionDiv.append(questionButton);
      }
}
function checkAnswer(question, answer) {
   let correctAnswer = questions[question].answer;
   let userAnswer = questions[question].choices[answer];
   if (userAnswer == correctAnswer) {
       index = index + 1;
   }
   
   else {
       index = index + 1;
       score = score - 15;
       console.log(score);
       console.log("Next question: ", index);
       console.log("Incorrect");
   }
   clearQuestionDiv()
   renderQuestions();
}

   function clearQuestionDiv() {
      document.getElementById("question-choices").innerHTML = "";
  }



function timeStart () {
   var timerEl = setInterval(function() {
      countdown--;
      timer.textContent = countdown+ " Seconds left before the quiz ends ";
      if (countdown === 0){
         clearInterval(timerEl);
      }


   },1000)
   
}






   


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

