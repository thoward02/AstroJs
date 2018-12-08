//For the combat


class Bullet{

  constructor(id, x, y, SPEED){
    this.SPEED = SPEED;

    this.startingX = x;
    this.startingY = y;
    this.currenty = y;

    window.renderObjects.BulletNum = window.renderObjects.BulletNum + 1;

    this.id = id;
  }


  Draw(ctx){
    ctx.strokeStyle = 'red';
    ctx.lineWidth = "10";
    ctx.beginPath();
    ctx.moveTo(this.startingX,   this.currenty + 20);
    ctx.lineTo(this.startingX,   this.currenty);
    ctx.stroke();
    ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = "1";
  }

  checkForHit(){
    if(this.currenty <= -50){
      delete window.renderObjects.Bullet[this.id];
    }


  }

  Render(ctx){
    this.currenty =   this.currenty -  this.SPEED;

    //console.log(this.currenty)
    this.BuildEnemyAreas();
    this.checkForHit();

    this.Draw(ctx);
  }

  BuildEnemyAreas(){
    for(var enemies in window.renderObjects.Enemy){

      var CurrentBox = window.renderObjects.Enemy[enemies];

      var CurrentPosition = [CurrentBox.x, CurrentBox.y + 25];

      var LRSides = [CurrentBox.x - 55, CurrentBox.x + 55];

      if(this.currenty <= CurrentPosition[1] && this.startingX > LRSides[0] && this.startingX < LRSides[1]){
        var check = CheckIfCorrect(enemies); // Enemies == enemy id smile

        if(check == true){
          console.log("[ -- Player Won -- ]");
          DisplayWonScreen();
        }else{
          console.log("[ -- Player Loss -- ]");
          DisplayLossScreen();
        }
      }

    }

  }
}
