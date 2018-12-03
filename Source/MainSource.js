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
  SetUpQuestions();
  DrawMainScreen();


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
    y : (parseInt(Canvas.style.height) / 4) * 3,
    a : 90

  }

  console.log("[ -- Our PlayerPos is: "+PlayerPos.x+", "+PlayerPos.y+" --]");


  window.renderObjects = {
    "Player" : true,
    "Stars" : true,
    "Enemies" : true,
    "Enemy" : {}
    }

  //enemy = new Enemy(ctx);
  for(var num = 0; num < 4; num++){
    window.renderObjects.Enemy[num] = new Enemy(ctx, num)
    //console.log(window.renderObjects.Enemy)
  }

  AddkeyBoardListener();
  var loop =
    setInterval(
      function(){
        LoopFunct(Canvas, PlayerPos, ctx);
      },
      10
    );

}

/**
** Movement
**/

function UpdatePosition(PlayerPos){
  return PlayerPos
}

function CheckMovement(){
  //Move the player
  var PlayerSpeed = 10;

  if(KeyPressed.a != "a"){
      //Left Movement
      PlayerPos.x = PlayerPos.x + PlayerSpeed;
  }

  if(KeyPressed.d != "d"){
      //Right Movement
      PlayerPos.x = PlayerPos.x - PlayerSpeed;
  }


}

function AddkeyBoardListener(){
  document.addEventListener("keydown",function(e){
      var key = e.keyCode;

      if(key == 65){
        KeyPressed.a = "a";
      }

      if(key == 68){
          KeyPressed.d = "d";
      }
    }
  );
  document.addEventListener("keyup",function(e){
      var key = e.keyCode;

      if(key == 65){
        KeyPressed.a = "";
      }

      if(key == 68){
          KeyPressed.d = "";
      }
    }
  );


}

// Have everything start running after the resources are loaded
document.addEventListener("DOMContentLoaded", function(){
  Start();
});
