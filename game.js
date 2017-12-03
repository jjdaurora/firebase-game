// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];
// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var playerOneGuess = event.key;
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var playerTwoGuess = event.key;
  // Reworked our code from last step to use "else if" instead of lots of if statements.
  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  if ((playerOneGuess === "r") || (playerOneGuess === "p") || (playerOneGuess === "s")) {
    if ((playerOneGuess === "r") && (playerTwoGuess === "s")) {
      wins++;
    } else if ((playerOneGuess === "r") && (playerTwoGuess === "p")) {
      losses++;
    } else if ((playerOneGuess === "s") && (playerTwoGuess === "r")) {
      losses++;
    } else if ((playerOneGuess === "s") && (playerTwoGuess === "p")) {
      wins++;
    } else if ((playerOneGuess === "p") && (playerTwoGuess === "r")) {
      wins++;
    } else if ((playerOneGuess === "p") && (playerTwoGuess === "s")) {
      losses++;
    } else if (playerOneGuess === playerTwoGuess) {
      ties++;
    }
    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
      "<p>You chose: " + playerOneGuess + "</p>" +
      "<p>The computer chose: " + playerTwoGuess + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>ties: " + ties + "</p>";
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
  }
};