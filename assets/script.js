var timerEl=document.querySelector("#timer")
var introEl=document.querySelector("#intro")
var startButtonEl=document.querySelector(".start-button")
var questionsEl=document.querySelector("#questions")
var initalEl=document.querySelector("#inital")
var highScoreEl=document.querySelector("#high-score")
var timeRemaining=75
var clockId=null

var questionarry=[
    {
    questionTitle:"Questions 1",
    choices:["Choice 1","Choice 2", "Choice 3", "Choice 4"],
    answer:"Choice 1",

},
{
    questionTitle:"Questions 2",
    choices:["Choice 1","Choice 2", "Choice 3", "Choice 4"],
    answer:"Choice 3",

},
{
    questionTitle:"Questions 3",
    choices:["Choice 1","Choice 2", "Choice 3", "Choice 4"],
    answer:"Choice 2",

},
{
    questionTitle:"Questions 4",
    choices:["Choice 1","Choice 2", "Choice 3", "Choice 4"],
    answer:"Choice 4",

},
{
    questionTitle:"Questions 5",
    choices:["Choice 1","Choice 2", "Choice 3", "Choice 4"],
    answer:"Choice 1",

},

]



startButtonEl.addEventListener("click",function(){
    introEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    clockId=setInterval(countdown,1000);
})

function countdown(){
    timerEl.innerHTML=timeRemaining;
    timeRemaining=timeRemaining-1;
}
