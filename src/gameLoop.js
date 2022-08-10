import { displayBoard } from "./displayBoard";
import { gameboardFactory } from "./gameboardFactory";
import { player } from "./player";

function gameLoop() {
  let playerBoard = gameboardFactory();
  playerBoard.placeShip(0, 0, 5, "destroyer");
  playerBoard.placeShip(2, 0, 3, "submarine");
  playerBoard.receiveAttack(0, 0);
  playerBoard.receiveAttack(0, 1);
  playerBoard.receiveAttack(0, 6);

  let computerBoard = gameboardFactory();
  computerBoard.placeShip(5, 3, 5, "destroyer");
  computerBoard.placeShip(3, 5, 3, "submarine");

  displayBoard(playerBoard, computerBoard);
  for (let i = 0; i < 5; i++) {}
}
export { gameLoop };
