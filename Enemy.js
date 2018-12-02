class Enemy{
  constructor(ctx){
    this.ctx = ctx;
    this.x = Math.floor(Math.random() * 1700);
    this.y = Math.floor(Math.random() * 400) + 50; //Between 50 and 500, this way the object doesn't leave the play field
    this.GoingRight = true
    this.enemybox = document.getElementById("enemy");
  }

  Draw(){
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 50, this.y + 50);
    this.ctx.lineTo(this.x - 50, this.y +  50);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 50, this.y + 50);
    this.ctx.lineTo(this.x + 50, this.y - 50);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x - 50, this.y - 50);
    this.ctx.lineTo(this.x + 50, this.y - 50);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x - 50, this.y + 50);
    this.ctx.lineTo(this.x - 50, this.y - 50);
    this.ctx.stroke();
  }
  UpdatePosition(){
    let EnemySpeed = 1;
    this.enemybox.style.marginLeft = this.x - 49;
    this.enemybox.style.marginTop = this.y  - 49;

    if(this.x > window.GameWidth - 60){
      this.GoingRight = false;
    }

    if(this.x < 60){
      this.GoingRight = true;
    }

    if(this.GoingRight == true){
      this.x = this.x + EnemySpeed;
    }

    if(this.GoingRight == false){
      this.x = this.x - EnemySpeed;
    }
  }

};
