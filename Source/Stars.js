//Stars.js


function RenderStars(Quantity, ctx){

  for(var x = 0; x < Quantity; x ++){

    x = Math.floor(Math.random() * 1720);
    y = Math.floor(Math.random() * 1080);

    DrawStar(x, y, ctx);
  }

}

function DrawStar(x, y, ctx){
  ctx.beginPath();
  ctx.moveTo(x, y + 20);
  ctx.lineTo(x, y);
  ctx.stroke();
}
