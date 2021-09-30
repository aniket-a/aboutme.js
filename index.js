var readlineSync=require("readline-sync");
var chalk=require('chalk');

console.clear();
console.log(chalk.bgMagenta("------HOW WELL DO YOU KNOW ABIUT ME-------"));

var name=readlineSync.question(chalk.yellowBright("\nSo, What's your name: "));
var score=0;
var count=0;

console.log(chalk.yellow("\nWelcome to the game,",name,"\nLet's begin with..."));
console.log(chalk.black.bgGreenBright.bold("\nLEVEL 1"))


//function to add questions
function play(question,options,answer){
  console.log(chalk.cyanBright(question));

  var userAns=readlineSync.keyInSelect(options,"Select your options to lock: ");

  if(options[userAns]===answer){
      console.log(chalk.green("\nSahi jawab...."));
      score+=1;
    console.log(chalk.black.bgYellowBright.bold("AAPKA SCORE HOTA HAI:"),chalk.yellowBright.bold(score))

  }
  else{
    console.log(chalk.red("\nAfsos,Galat jawab"));
    console.log(chalk.black.bgYellowBright.bold("AAPKA SCORE HOTA HAI:"),chalk.yellowBright.bold(score))

  }
  count+=1;
  

}

optionSet1=["Thane","Dombivli","mumbai"];
optionSet2=["CSK","KKR","mumbai indians"];
optionSet3=["black","green","Yellow"];
optionSet4=["23","24","25"];
optionSet5=["franki","pani puri","pizza"];
optionSet6=["reading","swimming","chess"];
optionSet7=["Seniorita","Perfect","Beliver"];
optionSet8=["snake lader","chess","business"];
optionSet9=["dark-knight","iron man 3","iron man 2"];
optionSet10=["BAJAJ","KTM","YAMAHA"];

//question 1
play("\nWhere do Aniket live?: ",optionSet1,"Dombivli");
//question 2
play("\naniket favourite cricket team?: ",optionSet2,"mumbai indians");
//question 3
play('\nAnikets favourite color?: "',optionSet3,"black");
//question 4
play("\nHow old aniket is?: ",optionSet4,"24");
//question 5
play('\nWhich fast food aniket like the most?: ',optionSet5,"pizza");
//question 6
play("\nAnikets favourite hobbie?: ",optionSet6,"swimming");
//question 7
play("\nAnikets favourite song?: ",optionSet7,"Seniorita");
//question 8
play("\nAnikets favourite game?: ",optionSet8,"chess");
//question 9
play("\nanikets favourite movie ?: ",optionSet9,"iron man 2");
//question 10
play("\nWhich biket brand aniket like?: ",optionSet10,"YAMAHA");


if(count<10){
        console.log(chalk.black.bgYellowBright.bold("\nBetter luck next time...") )       
    
  }


