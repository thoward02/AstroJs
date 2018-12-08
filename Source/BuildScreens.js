function BuildWinScreen(){
  var ReturnDiv = document.createElement("div");
  ReturnDiv.className = "GameOverScreens"

  var Title = document.createElement("div");
  Title.innerHTML = "G A M E    O V E R";
  Title.style.marginTop = "5%";
  Title.style.marginLeft = "45%";
  Title.style.fontSize = "40";

  var SubTitle = document.createElement("div");
  SubTitle.innerHTML = "Y O U    W O N";
  SubTitle.style.marginTop = "10%";
  SubTitle.style.marginLeft = "50%";
  SubTitle.style.fontSize = "20";
  SubTitle.style.color = "red";

  //Append
  ReturnDiv.appendChild(Title);
  ReturnDiv.appendChild(SubTitle);

  //Return
  return ReturnDiv

}


function BuildLossScreen(){
  var ReturnDiv = document.createElement("div");
  ReturnDiv.className = "GameOverScreens"

  //Design
  var Title = document.createElement("div");
  Title.innerHTML = "G A M E    O V E R";
  Title.style.fontSize = "40";
  Title.style.marginTop = "5%";
  Title.style.marginLeft = "45%";

  var SubTitle = document.createElement("div");
  SubTitle.innerHTML = "Y O U    L O S T";
  SubTitle.style.marginTop = "10%";
  SubTitle.style.marginLeft = "50%";
  SubTitle.style.fontSize = "20";
  SubTitle.style.color = "red";

  //Append
  ReturnDiv.appendChild(Title);
  ReturnDiv.appendChild(SubTitle);

  //return
  return ReturnDiv

}
