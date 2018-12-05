//Enemy.js

//Set up aval space for enemies
AvalibleSpace = [200, 350, 500];

//Set up the class
class Enemy{
  constructor(ctx, id, right){
    //Set context
    this.ctx = ctx;

    //Set the x cord
    this.x = Math.floor(Math.random() * 1700);

    //Set the y cord
    this.y =  AvalibleSpace[AvalibleSpace.length - 1]; //Takes out the last item in the list, and puts it as the y coordinate

    //Update space
    AvalibleSpace.splice(AvalibleSpace.length - 1, AvalibleSpace.length - 1)

    //Randomize movement
    this.goright =  Math.floor(Math.random() * 2) + 1;
    if(this.goright == 1){
      this.goright = true;
    }else{
      this.goright = false;
    }

    //Set it to go right
    this.GoingRight = this.goright;

    this.right = right;

    this.enemybox = document.createElement("div");
    this.enemybox.style.color = "white";
    this.enemybox.style.fontSize = "20px";
    this.enemybox.style.position = "absolute";

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
  var IsOneTrue = false;
  for(var num = 0; num < NumberOfEnemies; num++){
    var right = 1;
    if(IsOneTrue == false){
      right = 0;
      IsOneTrue = true;
    }
    window.renderObjects.Enemy[num] = new Enemy(ctx, num, right);

  }

}
