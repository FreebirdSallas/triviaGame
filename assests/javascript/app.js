var timeLeft = 25;
var elem = document.getElementById("countDown");
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
        showResults();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}
function doSomething() {
    alert("Alright, pencils down, and Submit!");
}
$('.btn-success').on("click", showResults);
function showResults(){
 
  var correct = 0;
  var question1 = $("input:radio[name=q1]:checked").val()
  var question2 = $("input:radio[name=q2]:checked").val()
  var question3 = $("input:radio[name=q3]:checked").val()
console.log(question1);
    if(question1 === "a"){
        correct++
    }
    if(question2 === "a"){
        correct++;
    }
    if(question3 === "a"){
        correct++;
    }
  number_correct.innerHTML = correct;
};
showResults();
