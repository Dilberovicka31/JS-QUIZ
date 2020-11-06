//Getting all required elements

var startButton = document.getElementById("button-start");
var timer = document.getElementById("timer");
var start = document.getElementById("start-quiz");
var quiz = document.getElementById("quiz");
startButton.addEventListener("click", startQuiz);
var index = 0;
var score = 0;
countdown = 75;
var timerEl;

// var answer = "checkAnswer";


//When the quiz starts hide the first page and display the questions
function startQuiz(){

   start.style.display = "none";
   quiz.style.display = "block";
   
   timeStart();
   renderQuestions();
}

//Rendering questions
function renderQuestions(){
   var questionsIndexLength = questions.length - 1;
   if (index <= questionsIndexLength) {
      document.getElementById("question").innerHTML = questions[index].title;
      renderQuestionChoices();
   } else{
      clearInterval(timerEl);
   }

}
//Options 
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


//Checking for correct answer
function checkAnswer(question, answer) {
   let correctAnswer = questions[question].answer;
   let userAnswer = questions[question].choices[answer];
   var resultEl =  document.getElementById("result");
   index = index + 1;
   if (userAnswer === correctAnswer) {
      resultEl.innerHTML = " Correct";
   
   }

   else {
      
       score = score - 10;
       score.innerHTML = "";
       resultEl.innerHTML = "Wrong"; 
     

       console.log(score);
       console.log("Next question: ", index);
      console.log ("Incorrect");
       
   }
   resultEl.style.display = "block";
   function timeOut() {
      resultEl.style.display = "none";

   } 
   setTimeout(timeOut, 500);

   clearQuestionDiv()
   renderQuestions();
    
    }


   function clearQuestionDiv() {
      document.getElementById("question-choices").innerHTML = "";
      
  }

  function quizEnd() {


     
  }
  
//Start the timer 
function timeStart () {
   timerEl = setInterval(function() {
      countdown--;
      timer.textContent = countdown+ " Seconds left before the quiz ends ";
      if (countdown === 0){
         clearInterval(timerEl);
         //Display page with input initials
         
      }

   },1000)
   
}


// WHEN the answer is wrong seconds need to be subtracted
//When all questions are answered the timer needs to stop
//All done needs to be presented after the questions have been answered = score
//Input initials to save score to local storage 



   


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
