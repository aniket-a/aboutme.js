
var readlineSync = require("readline-sync");
var userName = readlineSync.question("may have ur name please? ");
console.log(" welcome  "  + userName );
score = 0;
var ans = readlineSync.question("DO YOU KNOW ANIKET? ");
var ans = "yes";
if(ans === "yes")
{
  console.log(" WELCOME TO THIS QUIZ LET'S START!!!!!");
}
else{
  console.log(" WELCOME TO THE QUIZ LET'S START!!!!!");
}
console.log("------------------------");
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  score = 0;
  if(userAnswer === answer)
  {
    console.log("RIGHT!!");
    score = score + 1;
    console.log("current score is " +score );
    console.log("------------------");
  }else{
    console.log("WRONG");
    console.log("current score is " +score );
    console.log("----------------------------------------------");
  }
  console.log("you are smart dear" + userName);
}

var questions= [{
    question: "[1] where do ANIKET live ",
    answer: "dombivli"
  },
  {
  question: "[2] aniket's faouvrite cricket team? ",
    answer: " mumbai indians"
  },
  {
  question: "[3] which movies addition aniket like the most? ",
    answer: "marvels"
  },
  {
  question: "[4] what is ANIKET's nick name? ",
    answer: "andya"
  },
  {
  question: "[5] How old ANIKET? ",
    answer: "24"
  },
  {
  question: "[6] what is ANIKET's hobbie? ",
    answer: "swimming"
  },
  {
  question: "[7] what is anikets faouvrite colour? ",
    answer: "black"
  },
  {
  question: "[8] aniket's faouvrite song? ",
    answer: "seniorita"
  },
  {
  question: "[9] aniket's faouvrite sports game? ",
    answer: "football"
  },
  {
  question: "[10] aniket's faouvrite food? ",
    answer: "pizza"
  },


];

for(var i=0; i<=questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}











