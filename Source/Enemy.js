
class Enemy{
  constructor(ctx, id){
    //Set context
    this.ctx = ctx;

    //Set the x cord
    this.x = Math.floor(Math.random() * 1700);

    //Set the y cord
    this.y =  Math.floor(Math.random() * 400) + 100;


    this.goright =  Math.floor(Math.random() * 2) + 1;
    if(this.goright == 1){
      this.goright = true;
    }else{
      this.goright = false;
    }
    //Set it to go right
    this.GoingRight = this.goright;

    this.enemybox = document.createElement("div");

    this.speed = Math.floor(Math.random() * 4) + 1;
    this.enemybox.innerHTML = id;
  }

  Draw(){
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 100, this.y + 50);
    this.ctx.lineTo(this.x - 100, this.y +  50);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 100, this.y + 50);
    this.ctx.lineTo(this.x + 100, this.y - 50);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x - 100, this.y - 50);
    this.ctx.lineTo(this.x + 100, this.y - 50);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x - 100, this.y + 50);
    this.ctx.lineTo(this.x - 100, this.y - 50);
    this.ctx.stroke();
  }

  UpdatePosition(){
    let EnemySpeed = this.speed;
    this.enemybox.style.marginLeft = this.x - 45;
    this.enemybox.style.marginTop = this.y - 5;

    if(this.x > window.GameWidth - 110){
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


function SetUpEnemies(NumberOfEnemies, ctx){

  for(var num = 0; num < NumberOfEnemies; num++){

    window.renderObjects.Enemy[num] = new Enemy(ctx, num);

  }

}
