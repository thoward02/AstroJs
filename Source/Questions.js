//This will control the basic questions <3

window.questions = [
  "He was as fast as a lightning bolt",
  "He was a walking dictionary",
  "BOOM",
  "Break a leg",
  "POW",
  "That kid in class is as funny as a clown",
  "That's the way the cookie crumbles",
  "I am so hungry I could eat a horse",
  "I told you to clean your room a hundred times"
  "The sky turned dreary as the glum clouds enveloped it",
  "Peter piper picked a peck of pickled peppers",
  "Sally sells seashells by the seashore",
  "Don’t go bacon my heart",
  "You wanna pizza me"
]

window.anw = [
  "Simile",
  "Metaphor",
  "Onomatopoeia",
  "Idiom",
  "Onomatopoeia",
  "Simile",
  "Idiom",
  "Hyperbole",
  "Hyperbole",
  "Personification",
  "Personification",
  "Alliteration",
  "Alliteration",
  "Pun",
  "Pun"
]

Cquestions = window.questions;
Canw = window.anw;

function SetUpQuestions(){

  //Set The box var
  QBox = document.getElementById("question");

  //Set up the question
  CurrentQuestionId = Math.floor(Math.random() * window.questions.length);
  CurrentQuestion = Cquestions[CurrentQuestionId];

  QBox.innerHTML = 'What figure of speech is this: "' + CurrentQuestion + '" ?';

  //Set up Anwsers
  for(var num in window.renderObjects.Enemy){

    if(window.renderObjects.Enemy[num].right == 0){
      window.renderObjects.Enemy[num].enemybox.innerHTML = Canw[CurrentQuestionId];
      window.CurrentQuestion = CurrentQuestionId;
      //Take out the Anwser
      Canw.splice(CurrentQuestionId, CurrentQuestionId)

      //Append
      document.getElementById("GameSpace").appendChild(window.renderObjects.Enemy[num].enemybox);

    }else{
      //If this block isnt the anw


      NonAnwserId = CurrentQuestionId;

      //This is to prevent the anwser from appearing
      while(NonAnwserId == CurrentQuestionId){

        NonAnwserId = Math.floor(Math.random() * Canw.length);

      }

      anwS = Canw[NonAnwserId];
      //Remove fake anwser
      Canw.splice(NonAnwserId, NonAnwserId);


      window.renderObjects.Enemy[num].enemybox.innerHTML = anwS;
      document.getElementById("GameSpace").appendChild(window.renderObjects.Enemy[num].enemybox);



    }
  }

}

function CheckIfCorrect(Question){

  //Get the enemy
  var Enemy = window.renderObjects.Enemy[Question];

  if(Enemy.right == 0){
    //User got the right anw
    return true;
  }else{
    return false;
  }

}
