var animIterCount = 2;
var velocity = 2;
// var time = 22;
// document.getElementById("time").innerHTML = time;
// document.getElementById("velocity").innerHTML = velocity;

const ball = document.querySelector("#ball");
const start_btn = document.querySelector("#start");

// start_btn.addEventListener("click", test);

function test() {
    setTimeout(drop_ball, 3)
    console.log("DONE")
}
function drop_ball() {
    ball.style.animationIterationCount = animIterCount;
    animIterCount+=2;
 document.getElementById("velocity").innerHTML = velocity;   
}