var number= 6;
var colors = generateRandomColors(number);
var squares=document.querySelectorAll(".square");
var picked=pickcolor();
var colorDisplay=document.getElementById("colorDisplay");
var h1=document.querySelector("h1");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  number=3;
  colors=generateRandomColors(number);
  picked=pickcolor();
  colorDisplay.textContent=picked;
  for(var i=0;i<squares.length;i++)
  {
    if(colors[i])
    squares[i].style.backgroundColor=colors[i];
    else {
      squares[i].style.display="none";    //IMPORTANT
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  number=6;
  colors=generateRandomColors(number);
  picked=pickcolor();
  colorDisplay.textContent=picked;
  for(var i=0;i<squares.length;i++)
  {
    squares[i].style.backgroundColor=colors[i];
      squares[i].style.display="block"; //IMPORTANT
  }
});

resetButton.addEventListener("click",function(){
  //generate new random colors
  colors=generateRandomColors(number);
  //pick a random color from array
  //change colordisplay to matcht he picked color
  picked=pickcolor();
   colorDisplay.textContent=picked;
  //change color of the squares
  for(var i=0;i<colors.length;i++){
    squares[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor="steelblue";
  messageDisplay.textContent="";
  this.textContent="NEW COLORS";
});

colorDisplay.textContent=picked;

for(var i=0;i<squares.length;i++){
  // add inital colors to squares
  squares[i].style.backgroundColor=colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function () {
     //grab the clicked color
     var clicked=this.style.backgroundColor;
     //compare it to the picked color
     if(clicked===picked){
       messageDisplay.textContent="Correct!";
       changeColors(picked);
       h1.style.backgroundColor=picked;
       resetButton.textContent="PLAY AGAIN?";
     }
     else {
       this.style.backgroundColor= "#232323";
       messageDisplay.textContent="Try Again";
     }
  });
}

function changeColors(color) {
  //loop through all squares to change and match color
  for(var i=0;i<colors.length;i++)
  squares[i].style.backgroundColor=color;
}

function pickcolor() {
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //create arr of colors
  var arr=[];
  for(var i=0;i<num;i++){
    arr.push(randomColors());
  }
  return arr;
}

function randomColors() {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb("+r+", "+g+", "+b+")";
  //IMPORTANT
  //on setting the background color of an element css or dom automatically sets
  //spaces between the number and comma ex: (0, 0, 0) so apply those spaces here
  //to prevent mismatch even though the picked and clicked are same
}
