// Countdown date
var countDownDate = new Date("Jun 18, 2005 18:32:00").getTime();
var flashToggle = false;

var countdownEl = document.getElementById("countdown");
var PreOrdBtn = document.getElementById("preOrderBtn");

// Set up smooth fade for reverting only
document.body.style.transition = "background-color 0.5s ease";
countdownEl.style.transition = "color 0.5s ease";
	
//check if EDM2 is out already
if (new Date().getTime() >= countDownDate) {
	CountDownFinished();
}
	
// Update every second
var x = setInterval(function(){

  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Time calculations
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display countdown
  countdownEl.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // flash1
  flashToggle = !flashToggle;
  if(flashToggle){
	document.body.style.transition = "none"; // transition b4 flash
	document.body.style.backgroundColor = "rgba(255, 240, 240, 0.9)";
	countdownEl.style.transition = "none";
	countdownEl.style.color = "rgba(240, 240, 240, 1)";
  }else{
	document.body.style.transition = "none";
	document.body.style.backgroundColor = "rgba(240, 240, 240, 0.9)";
	countdownEl.style.transition = "none";
	countdownEl.style.color = "rgba(240, 240, 240, 1)";
  }

  // fade out back to normal
  setTimeout(() => {
	document.body.style.transition = "background-color 0.5s ease";
	countdownEl.style.transition = "color 0.05s ease";
	document.body.style.backgroundColor = "";
	countdownEl.style.color = "";
  }, 50); // small delay before easing

  // Countdown finished
  if (distance < 0) {
	clearInterval(x);
	CountDownFinished();
  }
}, 1000);
	
function CountDownFinished(){
	countdownEl.innerHTML = "EDM 2";
	PreOrdBtn.innerHTML = "Get the CD!";
	document.body.style.backgroundColor = "";
	countdownEl.style.color = "";
}