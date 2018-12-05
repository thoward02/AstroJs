//This will control the basic questions <3

questions = [
  "He was as fast as a lightning bolt",
  "He was a walking dictionary",
  "Boom",
  "Break a leg"
]

anw = [
  "Simile",
  "Metaphore",
  "Onomatopoeia",
  "Idiom"
]

Cquestions = questions;
Canw = anw;

function SetUpQuestions(){

  //Set The box var
  QBox = document.getElementById("question");

  //Set up the question
  CurrentQuestionId = Math.floor(Math.random() * questions.length);
  CurrentQuestion = Cquestions[CurrentQuestionId];
  QBox.innerHTML = 'What figure of speech is this: "' + CurrentQuestion + '" ?';
  ListOfAnw = Canw;
  ListOfAnw.splice(CurrentQuestionId, 1)

  //Set up Anwsers
  for(var num in window.renderObjects.Enemy){

    if(window.renderObjects.Enemy[num].right == 0){
      window.renderObjects.Enemy[num].enemybox.innerHTML = anw[CurrentQuestionId];
      console.log(CurrentQuestionId + anw)
      document.body.appendChild(window.renderObjects.Enemy[num].enemybox);
    }else{
      console.log("y")
      anwId = Math.floor(Math.random() * ListOfAnw.length)
      anwS = ListOfAnw[anwId];
      ListOfAnw.splice(anwId, 1);

      window.renderObjects.Enemy[num].enemybox.innerHTML = anwS;
      document.body.appendChild(window.renderObjects.Enemy[num].enemybox);



    }
  }

}

function GetRidOfQuestion(Question){
  //Question should be question ID

  //Remove Question
  Cquestions.splice(Question, Question);

}
