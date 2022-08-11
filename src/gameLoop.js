import { computerPlaceShips } from "./computerFns/computerPlaceShip";
import { displayBoard } from "./displayBoard";
import { gameboardFactory } from "./gameboardFactory";
import { player } from "./player";

function gameLoop() {
  let playerBoard = gameboardFactory();
  let computerBoard = gameboardFactory();
  computerPlaceShips(computerBoard);
  console.table(computerBoard.coordinates);
}
export { gameLoop };
