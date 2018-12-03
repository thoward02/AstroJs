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

  //Set upAnwser
  QAnwser = document.getElementById("enemy");
  QAnwser.innerHTML =  anw[CurrentQuestionId]
  QAnwser.classList.add("Answer");
  QAnwser.style.background = "black";

}

function GetRidOfQuestion(Question){
  //Question should be question ID

  //Remove Question
  Cquestions.splice(Question, Question); 

}
