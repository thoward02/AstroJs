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
      if(PlayerPos.x > 51 && PlayerPos.x < 1869){
        PlayerPos.x = PlayerPos.x + PlayerSpeed;
      }
      else{
        if(PlayerPos.x == 50){
          PlayerPos.x = 60;
        }
        if(PlayerPos.x == 1870){
          PlayerPos.x = 1860;
        }
      }
  }

  if(KeyPressed.d != "d"){
      //Right Movement
      if(PlayerPos.x > 51 && PlayerPos.x < 1869){
        PlayerPos.x = PlayerPos.x - PlayerSpeed;
      }
      else{
        if(PlayerPos.x == 50){
          PlayerPos.x = 60;
        }
        if(PlayerPos.x == 1670){
          PlayerPos.x = 1660;
        }
      }
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
  document.addEventListener("keypress", function(e){
    var key = e.keyCode;

    //Key E
    if(key == 101){
      if(window.renderObjects.Render == true){
        window.renderObjects.Bullet[window.renderObjects.BulletNum] = new Bullet(window.renderObjects.BulletNum, PlayerPos.x, PlayerPos.y, 10);
      }else{
        location.reload();
      }
    }

  });

}
