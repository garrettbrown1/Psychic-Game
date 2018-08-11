//Variable Alphabet (array)

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Variables tracking score for wins and losses. Begins @ 0. 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedSoFar = [];
var playerGuess = [];

//User Guess
document.onkeyup = function(event){
    var playerGuess = event.key;


//Computer random selector
var computerGuess = Math.floor(Math.random() * computerChoices.length);
console.log ("Computer Guess:" + computerGuess);
    
    //---If User Guess equates to computerChoice...//
    
    
    if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++; 
        guessesLeft = 9;
        guessedSoFar.length = 0;
        computerGuess.length = 0;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        alert ("You Won!");
    }

    //--If User Guess does not but keep guessing
    else if ((playerGuess !== computerGuess [0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft-1;
    }
    //--If User Guess losses 
    else {
        losses++;
        guessesLeft = 9;
        guessedSoFar.length = 0;
        computerGuess.length= 0;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        alert ("You lost! Play again!");
    }
}
//show text

var guessedSoFar = document.getElementById("Guesses So Far");
