//*************** VARIABLES *******************
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var background = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


//*************** PAGE LOAD FUNCTIONS *******************
initial();

function initial(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6
      reset();
    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!"
        changeColors(clickedColor);
        background.style.background = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        //compare color to picked color
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}


//*************** EVENT LISTENERS ****************

for(var i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6
    reset();
  });
}


resetButton.addEventListener("click", function(){
  reset();
});



//*************** LOOP *******************
for(var i = 0; i < squares.length; i++){
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      background.style.background = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      //compare color to picked color
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

//*************** OTHER FUNCTIONS *******************
function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  background.style.backgroundColor = "steelblue";
}


function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor= color;
  }
}

function pickColor(){
  //pick a random number
  var random = Math.floor(Math.random() * colors.length);
  //use number to access color
  return colors[random];
}

function generateRandomColors(num){
  //make array
  var arr = [];
  // add num to array
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor(){
 //pick a red
  var r = Math.floor(Math.random() * 256);
  //pick a green
  var g = Math.floor(Math.random() * 256);
  //pick a blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
