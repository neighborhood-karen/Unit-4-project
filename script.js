let choice1_1 = document.querySelector("#choice1_1");
let question2_1 = document.querySelector("#question2-1");
let question1 = document.querySelector("#question1");
let choice1_2 = document.querySelector("#choice1_2");
let question2_2 = document.querySelector("#question2-2");
let result1 = document.querySelector(".result1");
let result = document.querySelector(".result");
let questions = document.querySelector(".questions")
let q2buttons = document.querySelector(".q2button")
let choice2_1_1 = document.querySelector("#choice2_1_1")


choice1_1.value=0;
choice1_2.value=0;

choice1_1.addEventListener('click', function() {
    question2_1.style.display= "block";
    question1.style.display= "none";
    choice1_1.value=1;
});

choice1_2.addEventListener('click', function() {
    question2_2.style.display= "block";
    question1.style.display= "none";
    choice1_2.value=1;
});

q2buttons.addEventListener('click', function() {
    questions.style.display= "none";
    console.log(result1.value)
});
function blah (){
if (choice1_1 == 1 && choice1_2 == 1) {
    result1.style.display="block";
    result.style.display="block";
}};