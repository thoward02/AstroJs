//Render.js

/**
** Renderer and Loop
**/

function LoopFunct(Canvas, PlayerPos, ctx){
  if(window.renderObjects.Render == true){
    //Clear Screen
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);

    //render
    //If we want to render the player set to true
    if(window.renderObjects.Player == true){
      //Check For Movement
      CheckMovement();

      //Calc Pos
      var NewPosition = UpdatePosition(PlayerPos);
      RenderPlayer(NewPosition, ctx);
    }

    //If we want to render Enemies set to true
    if(window.renderObjects.Enemies == true){
      for(var items in window.renderObjects.Enemy){
        //Get pos then draw
        var NewEnemyPos = window.renderObjects.Enemy[items].UpdatePosition();
        window.renderObjects.Enemy[items].Draw();
      }

    }

    //If we want to render Stars
    if(window.renderObjects.Stars == true){
      RenderStars(1000, ctx);
    }

    //If we want to render Bullets
    if(window.renderObjects.Bullets = true){
      //Update bullet count
      LenBullets = 0;
      for(var items in window.renderObjects.Bullet){
        LenBullets = LenBullets + 1;
      }
      window.renderObjects.BulletNum = LenBullets;

      //Render Bullets
      for(var items in window.renderObjects.Bullet){
        window.renderObjects.Bullet[items].Render(ctx)
      }

    }
  }
}
