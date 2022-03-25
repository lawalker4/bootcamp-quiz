var timerEl=document.querySelector("#timer")
var introEl=document.querySelector("#intro")
var startButtonEl=document.querySelector(".start-button")
var questionsEl=document.querySelector("#questions")
var initalEl=document.querySelector("#inital")
var highScoreEl=document.querySelector("#high-score")
var timeRemaining=75
var clockId=null

// add questions for quiz with their answers
// make them clickable
var questionarry=[
    {
    questionTitle:"Questions 1",
    choices:["1. Strings","2. Booleans", "3. Alerts", "4.Numbers"],
    answer:"4. Numbers",

},
{
    questionTitle:"Questions 2",
    choices:["1. Quotes","2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
    answer:"3. Parenthesis",

},
{
    questionTitle:"Questions 3",
    choices:["1. Numbers and Strings","2. Other Arrays", "3. Boolenans", "4. All the above"],
    answer:"4. All the above",

},
{
    questionTitle:"Questions 4",
    choices:["1. JavaScript","2. Termnal/Bash", "3. For Loops", "4. Console.log"],
    answer:"4. Console.log",

},
{
    questionTitle:"Questions 5",
    choices:["1. Commas","2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
    answer:"3. Quotes",

},

]
//Be able to click the start button
startButtonEl.addEventListener("click",function(){
    introEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    clockId=setInterval(countdown,1000);
})

//Be able to see the countdown

function countdown(){
    timerEl.innerHTML=timeRemaining;
    timeRemaining=timeRemaining-1;
}

questionsEl.on('click', function () {

});