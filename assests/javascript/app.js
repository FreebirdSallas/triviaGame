var timeLeft = 30;
var elem = document.getElementById("countDown");
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}
function doSomething() {
    alert("Alright, pencils down, and Submit!");
}

function showResults(){
  $(button).on("click", showResults);
  var correct = 0;
  var question1 = document.quiz.q1.value;
  var question2 = document.quiz.q2.value;
  var question3 = document.quiz.q3.value;

    if(question1 === "a" || question2 === "a" || question3 === "a"){
        correct++;
    }
  $("#after-submit").style.visibility = "visible";
  $("#number_correct").innerHTML = correct
}
