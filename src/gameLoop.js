import { computerPlaceShips } from "./computerFns/computerPlaceShip";
import { placeBattleship } from "./computerFns/placeBattleship";
import { placeCarrier } from "./computerFns/placeCarrier";
import { placeDestroyer } from "./computerFns/placeDestroyer";
import { placePatrolboat } from "./computerFns/placePatrolboat";
import { placeSubmarine } from "./computerFns/placeSubmarine";
import { displayBoard } from "./displayBoard";
import { gameboardFactory } from "./gameboardFactory";
import { player } from "./player";

function gameLoop() {
  let playerBoard = gameboardFactory();
  placeCarrier(playerBoard);
  placeBattleship(playerBoard);
  placeDestroyer(playerBoard);
  placeSubmarine(playerBoard);
  placePatrolboat(playerBoard);
  let computerBoard = gameboardFactory();
  computerPlaceShips(computerBoard);
  console.table(playerBoard.coordinates);
  console.table(computerBoard.coordinates);
}
export { gameLoop };
