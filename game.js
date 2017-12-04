var config = {
  apiKey: "AIzaSyBrDGyqdOgGEajfTjrkc5_UX1TGa5QPAV8",
  authDomain: "rps-game-eb91f.firebaseapp.com",
  databaseURL: "https://rps-game-eb91f.firebaseio.com",
  projectId: "rps-game-eb91f",
  storageBucket: "rps-game-eb91f.appspot.com",
  messagingSenderId: "1051895724929"
};

firebase.initializeApp(config);


var database = firebase.database();

var playerOneExists = false;
var playerTwoExists = false;

var playerExists = new Firebase("https://rps-game-eb91f.firebaseio.com/players")
ref.once("value", function(snapshot) {
     
     var playerSnapshot = snapshot.child(playerNum);
     
});

// var playerNum = 
  
//     if (playerOneExists) {
//       playerNum == 2  
//     }

//     else {
//       playerNum == 1 
//     }


var playerRef = database.ref("/players/" + playerNum);

// Creates player object. 'choice' is unnecessary here, but I left it in to be as complete as possible
playerRef.set({
  name: username,
  wins: 0,
  losses: 0,
  choice: null
});

$(document).on("click", function() { 
  console.log("test");
  playerRef.push({
      choice: 1//choice variable ,
      wins: 1, //wins variable
      losses: 1, //losses variable
      name: 1 //names variable,
      // dateAdded: firebase.ServerValue.TIMESTAMP
  });
}

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

// push results to firebase 


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