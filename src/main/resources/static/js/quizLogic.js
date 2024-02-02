function offClass() {
    var section1 = document.getElementsByClassName("ready")[0];
    var section2 = document.getElementsByClassName("questions")[0];
    var section3 = document.getElementsByClassName("summary")[0];
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
}

function welcomeToReady() {
    var section1 = document.getElementsByClassName("welcome")[0];
    var section2 = document.getElementsByClassName("ready")[0];

    section1.style.display = "none";
    section2.style.display = "block";
}

function start(){
    var ready = document.getElementById("READY");
    var welcome = document.getElementsByClassName("questions")[0];

    ready.style.display = "none";
    welcome.style.display = "block";

    displayQuestion(0);
}

var section2 = document.getElementsByClassName("questions")[0];
var section3 = document.getElementsByClassName("summary")[0];
function showNextQuestion(){
    var currentQuestionIndex = getCurrentQuestionIndex();
    if (currentQuestionIndex < Question.length - 1) {
        Question[currentQuestionIndex].style.display = "none";
        displayQuestion(currentQuestionIndex + 1);
        document.getElementsByClassName("result")[currentQuestionIndex + 1].innerHTML = "";
    }
    else {
        section2.style.display = "none";
        section3.style.display = "block";
        document.getElementById('finalScore').innerHTML = score;
    }
}

function getCurrentQuestionIndex() {
    for (var i = 0; i < Question.length; i++) {
        if (Question[i].style.display === "block")
            return i;
    }
}
function displayQuestion(index) {
    Question[index].style.display = "block";
}

var result = document.getElementsByClassName("result");
var result_index = 0;
var Question = document.getElementsByClassName("question");
for (var i = 1; i < Question.length; i++){
    Question[i].style.display = "none";
}
var Continue = document.getElementsByClassName("continue");
for (var i = 0; i < Continue.length; i++){
    Continue[i].style.display = "none";
}
var rightElements = document.getElementsByClassName("right");
for (var i = 0; i < rightElements.length; i++) {
    rightElements[i].addEventListener("click", function(){
        result[result_index].innerHTML = "Correct";
        rightElements[result_index].style.backgroundColor = '#00ff00';
        addScore();
        // Continue[result_index].style.display = "block";
        result_index++;
        // for (var j = 0; j < Continue.length; j++) {
        //     Continue[j].addEventListener("click", function(){
        //         showNextQuestion();
        //     });
        // }
        setTimeout(showNextQuestion,1000);
    });
}
var wrongElements = document.getElementsByClassName("wrong");
for (var i = 0; i < wrongElements.length; i++) {
    wrongElements[i].addEventListener("click", function(){
        result[result_index].innerHTML = "Incorrect";
        this.style.background = '#ff0000';
        rightElements[result_index].style.backgroundColor = '#00ff00';
        // Continue[result_index].style.display = "block";
        result_index++;
        // for (var j = 0; j < Continue.length; j++) {
        //     Continue[j].addEventListener("click", function(){
        //         showNextQuestion();
        //     });
        // }
        setTimeout(showNextQuestion,1000);
    });
}

var button = document.querySelector('input[value="SUBMIT"]')
button.addEventListener('click', function(evt){
    evt.preventDefault()
    var text = document.getElementById('fname').value
    document.getElementsByClassName('name')[0].innerHTML = text
})

var score = 0;
function addScore(){
    score = score + 10;
    document.getElementById('score').innerHTML = score;
}