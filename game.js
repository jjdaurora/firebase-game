var config = {
    apiKey: "AIzaSyBrDGyqdOgGEajfTjrkc5_UX1TGa5QPAV8",
    authDomain: "rps-game-eb91f.firebaseapp.com",
    databaseURL: "https://rps-game-eb91f.firebaseio.com",
    projectId: "rps-game-eb91f",
    storageBucket: "rps-game-eb91f.appspot.com",
    messagingSenderId: "1051895724929"
};

firebase.initializeApp(config);

// firebase reference variables
var database = firebase.database();
var playersRef = database.ref("players")
var playerTurn = database.ref("turn")
var playerNum; 
var playerOneData = null;
var playerTwoData = null; 

// game variables 
var gameTurn = null; 
var playerOneGuess;
var playerTwoGuess;


$(".game-icons-one").on("click", "i", function () {
    playerOneGuess = $(this).attr("id");
    console.log(playerOneGuess);
    playerNum = 1;
    var playerRefNum = database.ref("/players/" + playerNum)

    playerRefNum.set({
      name: "",
      wins: 0,
      losses: 0
    });

    playerTurn.transaction(function (turn) {
        return turn + 1; 
    });

  gamePlay();

});

$(".game-icons-two").on("click", "i", function () {
    playerTwoGuess = $(this).attr("id");
    console.log(playerTwoGuess);
    playerNum = 2;
    
    var playerRefNum = database.ref("/players/" + playerNum)
    
    playerRefNum.set({
      name: "",
      wins: 0,
      losses: 0
    });

    playerTurn.transaction(function (turn) {
        return turn + 1; 
    });

  gamePlay();

});

playerTurn.on("value", function(snapshot) {

  gameTurn = snapshot.val();

  // game message: indicate player's turn 

  if (gameTurn == 3) {
   
    gamePlay();
    gameTurn == 1; 
    playerTurn.set(1);
  
  }               

});


playersRef.on("value", function(snapshot) {

  // Player data objects
  playerOneData = snapshot.child("1").val();
  playerTwoData = snapshot.child("2").val();

});

function playerOneWins () {
  playersRef.child("1").child("wins").set(playerOneData.wins + 1);
  playersRef.child("2").child("losses").set(playerTwoData.losses + 1);

}

function playerTwoWins () {
  playersRef.child("2").child("wins").set(playerTwoData.wins + 1);
  playersRef.child("1").child("losses").set(playerOneData.losses + 1);
  
}

function ties () {
  // need to figure out how to display this result
}

function gamePlay () {
    
    if ((playerOneGuess === "r") && (playerTwoGuess === "s")) {
      playerOneWins();
    } else if ((playerOneGuess === "r") && (playerTwoGuess === "p")) {
      playerTwoWins();
    } else if ((playerOneGuess === "s") && (playerTwoGuess === "r")) {
      playerTwoWins();
    } else if ((playerOneGuess === "s") && (playerTwoGuess === "p")) {
      playerOneWins();
    } else if ((playerOneGuess === "p") && (playerTwoGuess === "r")) {
      playerOneWins();
    } else if ((playerOneGuess === "p") && (playerTwoGuess === "s")) {
      playerTwoWins();
    } else if (playerOneGuess === playerTwoGuess) {
      ties();
    }
};


