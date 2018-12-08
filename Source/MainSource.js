//MainSource.js

/**
** GLOBAL VARS
**/
var KeyPressed = {
  "a" : "",
  "d" : ""
};

var PlayerPos = {};

/**
*SET UP
**/

function Start(){

  SetUpCanvas(); //First we're gonna set the size and width of the canvas to the size and width of our browser window
  DrawMainScreen();
  SetUpQuestions();

}

function SetUpCanvas(){

  console.log("[ -- Setting up Canvas -- ]");

  //Set Canvas
  var Canvas = document.getElementById("GameBody");

  //Get the X and Y len of window
  let x = parseInt(window.screen.width);
  let y = parseInt(window.screen.height) * 0.9;
  window.GameWidth = x;
  window.GameHeight = y;

  console.log("[ -- Working at X: "+x+"  and Y: "+y+" -- ]");

  //Set canvas X and Y
  Canvas.width = x;
  Canvas.height = y;
  Canvas.style.width = x;
  Canvas.style.height = y;
  Canvas.style.background = "black";

}

function DrawMainScreen(){

  var Canvas = document.getElementById("GameBody");
  var ctx = Canvas.getContext("2d");
  //Set up loop

  PlayerPos = {
    x : parseInt(Canvas.style.width) / 2,
    y : (parseInt(Canvas.style.height) / 4) * 4,
    a : 90

  }

  console.log("[ -- Our PlayerPos is: "+PlayerPos.x+", "+PlayerPos.y+" --]");

  //Set objects to be rendered
  window.renderObjects = {
    "Render" : true,
    "Player" : true,
    "Stars" : true,
    "Enemies" : true,
    "Enemy" : {},
    "Bullets" : true,
    "BulletNum" : 0,
    "Bullet" : {}
    }

  //Set up enemies
  SetUpEnemies(3, ctx);

  //Set up keyboard
  AddkeyBoardListener();

  var loop =
    setInterval(
      function(){
        LoopFunct(Canvas, PlayerPos, ctx);
      },
      10
    );

}


function DisplayWonScreen(){

  //Stop rendering
  window.renderObjects.Render = false;

  //Hide canvas
  GameSpace = document.getElementById("GameSpace");
  GameSpace.style.display = "none";

  //Display screen
  DisplayScreen = BuildWinScreen();
  document.body.appendChild(DisplayScreen);
}

function DisplayLossScreen(){

  //Stop rendering
  window.renderObjects.Render = false;

  //Hide Canvas
  GameSpace = document.getElementById("GameSpace");
  GameSpace.style.display = "none";

  //Display Screen
  DisplayScreen = BuildLossScreen();
  document.body.appendChild(DisplayScreen);

}







// Have everything start running after the resources are loaded
document.addEventListener("DOMContentLoaded", function(){
  Start();
});
