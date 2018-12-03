//Player File


function RenderPlayer(PlayerPos, ctx){

  ctx.strokeStyle = "white"; //style

  ctx.beginPath();
  ctx.moveTo(PlayerPos.x + 25, PlayerPos.y);
  ctx.lineTo(PlayerPos.x - 25, PlayerPos.y);
  ctx.stroke();

  //--Portside--
  ctx.beginPath();
  ctx.moveTo(PlayerPos.x + 25, PlayerPos.y);
  ctx.lineTo(PlayerPos.x , PlayerPos.y - 25)
  ctx.stroke();

  //--Starboard--
  ctx.beginPath();
  ctx.moveTo(PlayerPos.x - 25, PlayerPos.y);
  ctx.lineTo(PlayerPos.x , PlayerPos.y - 25)
  ctx.stroke();


}
