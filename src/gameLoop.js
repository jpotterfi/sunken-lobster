import { computerPlaceShips } from "./computerFns/computerPlaceShip";
import { placeBattleship } from "./computerFns/placeBattleship";
import { placeCarrier } from "./computerFns/placeCarrier";
import { placeDestroyer } from "./computerFns/placeDestroyer";
import { placePatrolboat } from "./computerFns/placePatrolboat";
import { placeSubmarine } from "./computerFns/placeSubmarine";
import { randomAttack } from "./computerFns/randomAttack";
import { displayBoard } from "./displayBoard";
import { gameboardFactory } from "./gameboardFactory";
import { player } from "./player";

function gameLoop() {
  let playerBoard = gameboardFactory();
  let computerBoard = gameboardFactory();
  // computerPlaceShips(playerBoard);
  computerPlaceShips(computerBoard);

  // while (playerBoard.isOver() == false && computerBoard.isOver == false) {
  //   //play game
  // }
  // for (let i = 0; i < 25; i++) {
  //   randomAttack(playerBoard);
  // }

  displayBoard(playerBoard, computerBoard);
  console.table(playerBoard.coordinates);
  console.table(computerBoard.coordinates);
}
export { gameLoop };
