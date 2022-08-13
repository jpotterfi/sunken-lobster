import { placeBattleship } from "./computerFns/placeBattleship";
import { placeCarrier } from "./computerFns/placeCarrier";
import { placeDestroyer } from "./computerFns/placeDestroyer";
import { placePatrolboat } from "./computerFns/placePatrolboat";
import { placeSubmarine } from "./computerFns/placeSubmarine";
import { gameboardFactory } from "./gameboardFactory";
import { gameLoop } from "./gameLoop";
import { shipFactory } from "./shipFactory";
import "./style.css";
import { randomAttack } from "./computerFns/randomAttack";

let isSettingUp = true;

const draggables = document.querySelectorAll(".draggable");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    console.log("drag start");
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});
//first value is the row, second value is the column

// let gameboard = gameboardFactory();
// console.table(gameboard);
// gameboard.placeShip(0, 0, 5, "destroyer");
// gameboard.receiveAttack(0, 0);
// gameboard.receiveAttack(0, 1);
// gameboard.receiveAttack(0, 2);
// gameboard.receiveAttack(0, 3);
// gameboard.receiveAttack(0, 4);

//first parameter is the index (of the array) within coordinate array
//second parameter is the index (of the value) within the index (of the array)

gameLoop();
// let board = gameboardFactory();

// for (let i = 0; i < 10; i++) {
//   randomAttack(board);
// }
// console.table(board.coordinates);

// placeCarrier(computerBoard);
// placeCarrier(computerBoard);
// placeCarrier(computerBoard);
// placeCarrier(computerBoard);

// gameLoop();
// let board = gameboardFactory();
// board.placeShip(0, 0, 5, "destroyer");
// board.receiveAttack(0, 0);
// board.receiveAttack(0, 1);
// board.receiveAttack(0, 2);
// board.receiveAttack(0, 3);
// board.receiveAttack(0, 4);
// console.log(board.isOver());
