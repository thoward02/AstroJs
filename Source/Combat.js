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
    if(this.currenty <= 0){
      delete window.renderObjects.Bullet[this.id];
    }
  }

  Render(ctx){
    this.currenty =   this.currenty -  this.SPEED;

    this.checkForHit();

    this.Draw(ctx);
  }

}
