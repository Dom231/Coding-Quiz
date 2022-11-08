// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");
timeEl.textContent = "Time : 0"

var secondsLeft = 60;
function setQuestion(){
  setTime();
  var questions = ["1.quotes", "2.curly brackets", "3.parenthesis", "4.square brakets"]
  mainEl.textContent = "";
  mainEl.setAttribute("style", "text-align: center; padding: 100px;");
  var h1El = document.createElement("h1");
  h1El.textContent="The condition in an if/else statement is enclosed with _____.";
  mainEl.appendChild(h1El);

  
  for( var i=0; i < questions.length ; i++){
  var ulEl = document.createElement("ul")
  var btnEl = document.createElement("button");
  btnEl.setAttribute("class","btn");  
  btnEl.setAttribute("onclick", "setQuestion2()")
  
  btnEl.textContent=questions[i];
  ulEl.appendChild(btnEl);
  mainEl.appendChild(ulEl);
//return;
}

}
function setQuestion2(){
 
  var questions = ["1.Strings", "2.booleans", "3.alrets", "4.numbers"]
  mainEl.textContent = "";
  mainEl.setAttribute("style", "text-align: center; padding: 100px;");
  var h1El = document.createElement("h1");
  h1El.textContent="Commonly used data types DO NOt include:";
  mainEl.appendChild(h1El);

  
  for( var i=0; i < questions.length ; i++){

  var ulEl = document.createElement("ul")
  var btnEl = document.createElement("button");
  btnEl.setAttribute("class","btn");  
  btnEl.setAttribute("onclick", "setQuestion3()")
 
  btnEl.textContent=questions[i];
  ulEl.appendChild(btnEl);
  mainEl.appendChild(ulEl);
//return;
}

}
function setQuestion3(){
 
  var questions = ["1.commas", "2.curly brackets", "3.quotes", "4.parenthesis"]
  mainEl.textContent = "";
  mainEl.setAttribute("style", "text-align: center; padding: 100px;");
  var h1El = document.createElement("h1");
  h1El.textContent="String Values must be enclosed within ___ when being assigned to variables";
  mainEl.appendChild(h1El);

  
  for( var i=0; i < questions.length ; i++){
  var ulEl = document.createElement("ul")
  var btnEl = document.createElement("button");
  btnEl.setAttribute("class","btn");  
  btnEl.setAttribute("onclick", "setQuestion4()")
 
  btnEl.textContent=questions[i];
  
  ulEl.appendChild(btnEl);
  mainEl.appendChild(ulEl);
//return;
}

}
function setQuestion4(){
 
  var questions = ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"]
  mainEl.textContent = "";
  mainEl.setAttribute("style", "text-align: center; padding: 100px;");
  var h1El = document.createElement("h1");
  h1El.textContent="Arrays in JavaScript can be used to store ____.";
  mainEl.appendChild(h1El);

  
  for( var i=0; i < questions.length ; i++){
  var ulEl = document.createElement("ul")
  var btnEl = document.createElement("button");
  btnEl.setAttribute("class","btn");  
  btnEl.setAttribute("onclick", "setQuestion5()")
 
  btnEl.textContent=questions[i];
  
  ulEl.appendChild(btnEl);
  mainEl.appendChild(ulEl);
//return;
}

}
function setQuestion5(){
 
  var questions = ["1.JavaScript", "2.terminal/bash", "3.for loops", "4.console.log"]
  mainEl.textContent = "";
  mainEl.setAttribute("style", "text-align: center; padding: 100px;");
  var h1El = document.createElement("h1");
  h1El.textContent="A very useful tool used during development and debugging for printing and content to the debugger is:";
  mainEl.appendChild(h1El);

  
  for( var i=0; i < questions.length ; i++){
  var ulEl = document.createElement("ul")
  var btnEl = document.createElement("button");
  btnEl.setAttribute("class","btn");  
  btnEl.setAttribute("onclick", "sendMessage()")
 
  btnEl.textContent=questions[i];
  
  ulEl.appendChild(btnEl);
  mainEl.appendChild(ulEl);
//return;
}

}
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
  ulEl.setAttribute("style", "font-size: 150px; font-weight: bold;text-align: center");
  ulEl.textContent = "Game Over :" + " score ="+ " " + secondsLeft;
  mainEl.appendChild(ulEl);
}

// setTime();
