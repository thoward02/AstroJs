//Movement.js
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
