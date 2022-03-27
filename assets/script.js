var timerEl=document.querySelector("#timer")
var introEl=document.querySelector("#intro")
var startButtonEl=document.querySelector(".start-button")
var questionsEl=document.querySelector("#questions")
var initialEl=document.querySelector("#initial")
var highScoreEl=document.querySelector("#high-score")
var timeRemaining=5
var clockId=null


var questionTitelEl=document.querySelector("#question-title")
var choice1El=document.querySelector("#Choice1")
var choice2El=document.querySelector("#Choice2")
var choice3E1=document.querySelector("#Choice3")
var choice4E1=document.querySelector("#Choice4")
var nameEl=document.querySelector("#name")
var saveButtonEl=document.querySelector("#save")


// add questions for quiz with their answers
// make them clickable
var questionarry=[
    {
    questionTitle:"Commonly used data types DO NOT include",
    choices:["1. Strings","2. Booleans", "3. Alerts", "4.Numbers"],
    answer:"4.",

},
{
    questionTitle:"The condition in an if/else statement is enclosed with ______________.",
    choices:["1. Quotes","2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
    answer:"3.",

},
{
    questionTitle:"Arrys in JavaScript can be used to store _____________________.",
    choices:["1. Numbers and Strings","2. Other Arrays", "3. Boolenans", "4. All the above"],
    answer:"4.",

},
{
    questionTitle:"A very useful tool used during development and debuggging for printing content to the debugger is:",
    choices:["1. JavaScript","2. Termnal/Bash", "3. For Loops", "4. Console.log"],
    answer:"4.",

},


]

var index=0

var scorearry = []

function selectAnswer() {

}

//Be able to click the start button
startButtonEl.addEventListener("click",function(){
    introEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    showQuestion()
    clockId=setInterval(countdown,1000);
    
})

choice1El.addEventListener("click", nextQuestion)
choice2El.addEventListener("click", nextQuestion)
choice3E1.addEventListener("click", nextQuestion)
choice4E1.addEventListener('click', nextQuestion)

function nextQuestion () {
    index++
    if(index<questionarry.length){
        showQuestion()
    }else {
        clearInterval(clockId)
        initialEl.classList.remove("hide")
        questionsEl.classList.add("hide")
    }
}

function showQuestion () {
    questionTitelEl.textContent=questionarry[index].questionTitle
    choice1El.textContent=questionarry[index].choices[0]
    choice2El.textContent=questionarry[index].choices[1]
    choice3E1.textContent=questionarry[index].choices[2]
    choice4E1.textContent=questionarry[index].choices[3]
}

saveButtonEl.addEventListener("click",function(){
    var name=nameEl.value 
    var score=timeRemaining
    scorearry.push({name,score})
    localStorage.setItem("score", JSON.stringify(scorearry))
    initialEl.classList.add("hide")
    highScoreEl.classList.remove("hide")
})


//Be able to see the countdown

function countdown(){
    timerEl.innerHTML=timeRemaining;
    timeRemaining=timeRemaining-1;
    if (timeRemaining === 0){
        console.log
        clearInterval(timerEl)
    }
};

