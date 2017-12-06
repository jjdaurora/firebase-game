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
var data; 

var playObj = {
  
  playerOne: {
    name: 1,
    play: 1,
    wins: 0,
    losses: 0
  },
  playerTwo: {
    name: 1,
    play: 1,
    wins: 0,
    losses: 0 
  },
 
}


$("#submit-name").on("click", function(event) {
  event.preventDefault();
  
  if((data.playerOne.name === 1) && ($('#name-entry').val() !== '')) {
    playObj.playerOne.name = $('#name-entry').val();

    database.ref().push({
      playerOne: {
        name: playObj.playerOne.name,
        play: 1
      
      }
   

   $("#player-one").html("<h3>" + playerName + "</h3>");
   $("#player-two").html("<h3>" + playerName + "</h3>"); 
   $(".message-center").html("<h2>Hi " + playerName + " ! Good luck!</h2>");
    
});
    
  database.ref().push(playerOne).push(playerTwo);


$(document).onkeyup = function(event) {

  var playerOneGuess = event.key;

  var playerTwoGuess = event.key;
  
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
  }
};


