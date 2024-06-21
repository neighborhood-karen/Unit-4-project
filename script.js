let choice1_1 = document.querySelector("#choice1_1");
let question2_1 = document.querySelector("#question2-1");
let question1 = document.querySelector("#question1");
let choice1_2 = document.querySelector("#choice1_2");
let question2_2 = document.querySelector("#question2-2");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result4");
let result = document.querySelector(".result");
let questions = document.querySelector(".questions")
let q2buttons = document.querySelector(".q2button")
let choice2_1_1 = document.querySelector("#choice2_1_1")
let submit1 = document.querySelector("#submit1");
let choice2_1radio = document.querySelector("#choice2_1radio");
let choice2_2radio = document.querySelector("#choice2_2radio");
let choice2_2_1radio = document.querySelector("#choice2_2_1radio");
let choice2_2_2radio = document.querySelector("#choice2_2_2radio");
let choice1_1radio = document.querySelector("#choice1_1radio");
let choice1_2radio = document.querySelector("#choice1_2radio");

choice1_1.addEventListener('click', function() {
    question2_1.style.display= "block";
    question1.style.display= "none";

});

choice1_2.addEventListener('click', function() {
    question2_2.style.display= "block";
    question1.style.display= "none";

});

submit1.addEventListener('click', function() {
    questions.style.display= "none";
    question2_1.style.display= "none";
    if (choice2_1radio.checked == true) {
        result.style.display= "block";
        result1.style.display= "block";
    } else if (choice2_2radio.checked == true){
        result.style.display= "block";
        result2.style.display= "block";
    }
});

submit2.addEventListener('click', function() {
    questions.style.display= "none";
    question2_2.style.display= "none";
    if (choice2_2_1radio.checked == true){
        result.style.display= "block";
        result3.style.display= "block";
    } else if (choice2_2_2radio.checked == true){
        result.style.display= "block";
        result4.style.display= "block";
    };
});