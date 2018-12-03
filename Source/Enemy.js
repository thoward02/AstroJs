
boxY = []
class Enemy{
  constructor(ctx, id){
    //Set context
    this.ctx = ctx;

    //Set the x cord
    this.x = Math.floor(Math.random() * 1700);

    //Set the y cord

    console.log("BOX ID:" + id)
    this.IsMatch = false;
    this.loopnum = 0
    //Loop
      while(this.IsMatch == false){
        console.log("-LOOP NUM : " + this.loopnum)
        this.PotY = Math.floor(Math.random() * 400) + 100;
        console.log("--POTENTIAL NUM: " + this.PotY)
        this.Nums = [];
        this.Count = 0;

        console.log("--CREATING LIST OF NUMBERS")
        for(var num in boxY){
          this.Nums[this.Count] = this.PotY - boxY[num]
        }

        this.PotMatch = true;

        console.log("--CHECKING NUMBERS")
        for(var stuff in this.Nums){

          this.number = Math.abs(this.Nums[stuff]);
          console.log("--THIS NUMBER IS: " + this.number + " On number " + stuff + " of "+ this.Nums);

          if(this.number < 150){
            //Box is not a match
            this.PotMatch = false;
            console.log("--- y is not a match --");
          }

        }
        if(this.PotMatch == true){
          this.IsMatch = true;
        }
        this.Count = this.Count++;
        //End of while loop If it is a match this.y will become potential Y
        this.loopnum = this.loopnum + 1


    }
    boxY[boxY.length] = this.PotY;
    console.log(boxY)
    this.y = this.PotY;
    console.log("The y distance for this box is now " + this.y)


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
