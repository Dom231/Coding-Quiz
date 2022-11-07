// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");
timeEl.textContent = "Time : 0"

var secondsLeft = 3;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time:" + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

//One time reaches zero, message will display Game Over
function sendMessage() {
  timeEl.textContent = " ";
  mainEl.textContent =" ";
  mainEl.setAttribute("style", "text-align: center; padding: 100px;");
  var ulEl = document.createElement("ul");
  ulEl.setAttribute("style", "font-size: 250px; font-weight: bold;text-align: center");
  ulEl.textContent = "Game Over";
  mainEl.appendChild(ulEl);

}

// setTime();
