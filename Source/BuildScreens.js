function BuildWinScreen(){
  var ReturnDiv = document.createElement("div");
  ReturnDiv.className = "GameOverScreens"

  var Title = document.createElement("div");
  Title.innerHTML = "G A M E    O V E R";
  Title.style.marginTop = "5%";
  Title.style.fontSize = "40";

  var SubTitle = document.createElement("div");
  SubTitle.innerHTML = "Y O U    W O N";
  SubTitle.style.marginTop = "10%";
  SubTitle.style.fontSize = "20";
  SubTitle.style.color = "red";

  var Tickets = document.createElement("div");
  Tickets.innerHTML = "You got 2 Tickets! Press any button to continue";
  Tickets.style.marginTop = "13%";
  Tickets.style.fontSize = "20";
  Tickets.style.color = "red";

  //Append
  ReturnDiv.appendChild(Title);
  ReturnDiv.appendChild(SubTitle);
  ReturnDiv.appendChild(Tickets);

  //Return
  return ReturnDiv

}


function BuildLossScreen(){
  var ReturnDiv = document.createElement("div");
  ReturnDiv.className = "GameOverScreens"

  //Design

  if(window.CurrentQuestion == 0){
    RIGHTANW = '"He was as fast as a lightning bolt" is a Simile!'
  }
  if(window.CurrentQuestion == 1){
    RIGHTANW = '"He was a walking dictionary" is a Metaphor!'
  }
  if(window.CurrentQuestion == 2){
    RIGHTANW = '"Boom" is a Onomatopoeia!'
  }
  if(window.CurrentQuestion == 3){
    RIGHTANW = '"Break a leg" is a "Idiom"!'
  }

  if(window.CurrentQuestion == 4){
    RIGHTANW = '"He was as fast as a lightning bolt" is a Simile!'
  }
  LOSTTEXT = "Y O U    L O S T ";


  var Title = document.createElement("div");
  Title.innerHTML = "G A M E    O V E R";
  Title.style.fontSize = "40";
  Title.style.marginTop = "5%";

  var LostText = document.createElement("div");
  LostText.innerHTML = RIGHTANW  + " Click any button to continue";
  LostText.style.fontSize = "20";
  LostText.style.marginTop = "7%";

  var SubTitle = document.createElement("div");
  SubTitle.innerHTML = LOSTTEXT;
  SubTitle.style.marginTop = "10%";
  SubTitle.style.fontSize = "20";
  SubTitle.style.color = "red";

  //Append
  ReturnDiv.appendChild(Title);
  ReturnDiv.appendChild(SubTitle);
  ReturnDiv.appendChild(LostText);

  //return
  return ReturnDiv

}
