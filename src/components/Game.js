function Game(userChoice, houseChoice) {
  const result = userChoice.substring(0, 1) + houseChoice.substring(0, 1);
  switch (result) {
    case "rs":
    case "pr":
    case "sp":
      return "WON";
    case "rr":
    case "pp":
    case "ss":
      return "DRAW";
    case "sr":
    case "rp":
    case "ps":
      return "LOSE";
    default:
      return null;
  }
}

export default Game;
