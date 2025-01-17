// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

//need to get rid of asking the question twice
//need to get the total of scrabble
//@Student - remember the directions say scoringFunction, but the test is looking for scorerFunction.


const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let userWord;

function initialPrompt() {
   
    userWord = input.question("Let's play some scrabble! Enter a word:");
    initialPrompt();      
};
//put prompt inside the function

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += 
         console.log(`Points for '${word[i]}': ${pointValue}\n`);
		 }
 
	  }
	}
	return letterPoints;
 }


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

//simpleScorer: Define a function that takes a word as a parameter and 
//returns a numerical score. Each letter within the word is worth 1 point.
let simpleScorer = function(userWord) {
   return userWord.length;
       
}

let vowelBonusScorer = function (userWord) {
   let score = 0;
   let vowels = 'aeiou';
   userWordArray = userWord.split('');
   for(let i = 0; i < userWord.length; i++){
      if(vowels.includes(userWordArray[i].toLowerCase())){
          score =  score + 3;
      } else{
         score ++
      }
   } return score;
   
} 


let scrabbleScorer = function(userWord) {
   let score = 0;
   for (let i = 0; i < userWord.length; i++){
      score += newPointStructure[userWord[i].toLowerCase()];
   }
   return score;
};

const scoringAlgorithms = [
   {
      name: "Simple",
      description: "One point per character",
      scorerFunction: simpleScorer
   },
   {
      name: "Vowel Bonus",
      description: "Vowels are worth 3 points",
      scorerFunction: vowelBonusScorer
   },
   {
      name: "Scrabble",
      description: "Uses scrabble point system",
      scorerFunction: scrabbleScorer
   }
];
   // Simple scoring
   console.log("algorithm name: ", scoringAlgorithms[0].name);
   console.log("scorerFunction result: ", scoringAlgorithms[0].scorerFunction("JavaScript"));

function scorerPrompt() {
   let selection = input.question(
      `Which scoring algorithm would you like to use?\n
   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system
   Enter 0, 1, or 2:  `
   );
   if(selection === '0'){
      console.log(`score for '${userWord}': is ${simpleScorer(userWord)}`);
         } else if(selection === '1'){
      
      console.log(`score for '${userWord}': is ${vowelBonusScorer(userWord)}`);
   } else if(selection === '2'){
      
      console.log(`score for '${userWord}': is ${oldScrabbleScorer(userWord)}`);
   }else{
      console.log(scorerPrompt());
   }
   
      
} 


function transform(oldPointStructure) {
   let newPointStructure = {};
   for(let pointValue in oldPointStructure){
     
      for (let i = 0; i < oldPointStructure[pointValue].length; i++) {
         //add 'a' lowercase ass a key to newpoint structure, then assign oldPointstructure key
         //let letter = oldPointStructure[pointValue].toLowerCase;
         //newPointStructure[oldPointStructure] = parseInt(pointValue);
         newPointStructure[oldPointStructure[pointValue][i].toLowerCase()] = Number(pointValue);
      } 
      }
      return  newPointStructure;
   };

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   let scorer = scorerPrompt().scorerFunction;
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
