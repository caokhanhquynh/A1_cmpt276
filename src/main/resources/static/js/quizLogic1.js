var section1 = document.getElementsByClassName("welcome")[0];
var section2 = document.getElementsByClassName("ready")[0];
var section3 = document.getElementsByClassName("questions")[0];
var section4 = document.getElementsByClassName("summary")[0];
section2.style.display = "none";
section3.style.display = "none";
section4.style.display = "none";

const answer_list = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
const correct_answer_list = ["a. Mitochondria", "c. Carbon dioxide", "d. H2O", "b. Mars", "c. Stapes", "a. Au", "c. Carbon dioxide", "a. Transporting oxygen", "d. Pacific Ocean", "a. Iron", "c. Hormone regulation", "c. Chloroplast"];
var question_index = 0;

//transitionn
function welcomeToReady() {
    section1.style.display = "none";
    section2.style.display = "block";
}
function start(){
    var ready = document.getElementById("READY");
    ready.style.display = "none";
    section3.style.display = "block";
    displayQuestion(0);
}
//Hide the rest questions
var Question = document.getElementsByClassName("question");
for (var i = 0; i < Question.length; i++){
    Question[i].style.display = "none";
}
//Display question
function displayQuestion(index) {
    Question[index].style.display = "block";
    document.getElementsByClassName("continue")[index].style.display = "none";
}
function showNextQuestion(){
    if (question_index < Question.length - 1) {
        Question[question_index].style.display = "none";
        question_index = question_index + 1;
        displayQuestion(question_index);
    }
    else {
        section3.style.display = "none";
        section4.style.display = "block";
        finalScore();
    }
}
function showPreviousQuestion(){
    Question[question_index].style.display = "none";
    question_index = question_index - 1;
    displayQuestion(question_index);
}
//seclect answers
var answers = document.getElementsByClassName("answer");
for (var i = 0; i < answers.length; i++) {
    (function(index) {
        answers[index].addEventListener("click", function(){
            answer_list[question_index] = answers[index].innerText;
            document.getElementsByClassName("continue")[question_index].style.display = "block";
            console.log(answer_list)
        });
    })(i);  
}
//summary
var score = 0;
var ques = document.getElementsByClassName("q");
function finalScore() {
    for (var i = 0; i < ques.length; i++) {
        var current_ques = ques[i].innerText;
        console.log("h1");
        document.getElementsByClassName("review_question")[i].innerHTML = current_ques;
        console.log("h2");
        if (answer_list[i] === correct_answer_list[i]){
            score = score + 10;
            document.getElementsByClassName("previous_answer")[i].style.color = "green";
            document.getElementsByClassName("previous_answer")[i].innerHTML = "You answer: " + answer_list[i];
        }
        else{
            document.getElementsByClassName("previous_answer")[i].style.color = "red";
            document.getElementsByClassName("previous_answer")[i].innerHTML = "You answer: " + answer_list[i];
            document.getElementsByClassName("correct_answer")[i].innerHTML = "Correct answer: " + correct_answer_list[i];
        }
    }
    document.getElementById('finalScore').innerHTML = score + "/120";
}

var button = document.querySelector('input[value="SUBMIT"]')
button.addEventListener('click', function(evt){
    evt.preventDefault()
    var text = document.getElementById('fname').value
    document.getElementsByClassName('name')[0].innerHTML = text
})
