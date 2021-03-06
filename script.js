//Getting all required elements

var startButton = document.getElementById("button-start");
var timer = document.getElementById("timer");
var start = document.getElementById("start-quiz");
var quiz = document.getElementById("quiz");
startButton.addEventListener("click", startQuiz);
var questionEl = document.getElementById("question");
var questionChoicesEl = document.getElementById("question-choices");
var scoreEl = document.getElementById("scorefinal");
var initialsEl = document.getElementById("initials");
var submitScore = document.getElementById("initials-submit");
submitScore.addEventListener("click", storeHighscore);
var doneEl = document.getElementById("done");
var finishEl = document.getElementById("highscores");
var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");



var index = 0;
var score = 0;
countdown = 75;
var timerEl;
var userInp = [];


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
//Adding questions options 
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
      function questionsDone(){
         question.style.display = "none";
      }
}


//Checking for correct answer
function checkAnswer(question, answer) {
   let correctAnswer = questions[question].answer;
   let userAnswer = questions[question].choices[answer];
   var resultEl =  document.getElementById("result");
   index++;

   if (userAnswer === correctAnswer) {
      resultEl.innerHTML = " Correct";
   }

   else {
      
      ;
       countdown = countdown - 10;
       score = countdown--;
       score.innerHTML = "";
       resultEl.innerHTML = "Wrong"; 
     

       console.log(score);
       console.log("Next question: ", index);
       console.log ("Incorrect");
       localStorage.setItem("score", "100");
       
   }
   resultEl.style.display = "block";
   function timeOut() {
      resultEl.style.display = "none";
      

   } 
   setTimeout(timeOut, 500);
   if (index < questions.length) {

   
   clearQuestionDiv()
   renderQuestions();
   
} else quizEnd();
    
    }


   function clearQuestionDiv() {
      document.getElementById("question-choices").innerHTML = "";
      
  }
  function storeHighscore (){
    
      doneEl.style.display = "none";
      finishEl.style.display = "block"
      
  }

//End quiz
  function quizEnd() {
   doneEl.style.display = "block";
   clearInterval(timerEl);
   quiz.style.display = "none";
   questionChoicesEl.style.display = "none";
   questionEl.style.display = "none";
   backBtn.addEventListener("click", goBack);

   function goBack() {
      location.reload();
      return;
   }
   
   
   

  }
   
  
//Start the timer 
function timeStart () {
   timerEl = setInterval(function() {
      countdown--;
      timer.textContent = countdown+ " Seconds left before the quiz ends ";
      if (countdown === 0){
         
         quizEnd();
         //Display page with input initials
         
      }

   },1000)
   
}


