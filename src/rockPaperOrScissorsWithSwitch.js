function rockPaperOrScissorsWithSwitch(player1, player2) {

  if (player1 === player2) return "Player1 and Player2 are tie";

  if (player1 === "rock" && player2 === "scissors") {
    winner = "player 1";
    winnerOption = player1;
  } else if (player1 === "paper" && player2 === "scissors") {
    winner = "player 2";
    winnerOption = player2;
  } else if (player1 === "scissors" && player2 === "rock") {
    winner = "player 2";
    winnerOption = player2;
  } else if (player1 === "scissors" && player2 === "paper") {
    winner = "player 1";
    winnerOption = player1;
  } else if (player1 === "paper" && player2 === "rock") {
    winner = "player 1";
    winnerOption = player1;
  } else if (player1 === "rock" && player2 === "paper") {
    winner = "player 2";
    winnerOption = player2;
  }

  return `The winner is ${winner} with ${winnerOption} option`;
}

export default rockPaperOrScissorsWithSwitch;
