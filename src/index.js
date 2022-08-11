import { placeCarrier } from "./computerFns/placeCarrier";
import { gameboardFactory } from "./gameboardFactory";
import { gameLoop } from "./gameLoop";
import { shipFactory } from "./shipFactory";
import "./style.css";

let arr = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
];
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

let computerBoard = gameboardFactory();
placeCarrier(computerBoard);
placeCarrier(computerBoard);
placeCarrier(computerBoard);
console.table(computerBoard.coordinates);
// computerBoard.placeShip(0, 0, 5, "battleship");
// computerBoard.placeShip(2, 0, 5, "battleship");
// computerBoard.placeShip(4, 0, 5, "battleship");
// computerBoard.placeShip(6, 0, 5, "battleship");

// placeCarrier(computerBoard);
// placeCarrier(computerBoard);
// placeCarrier(computerBoard);
// placeCarrier(computerBoard);

// console.table(computerBoard.coordinates);

// gameLoop();
// let board = gameboardFactory();
// board.placeShip(0, 0, 5, "destroyer");
// board.receiveAttack(0, 0);
// board.receiveAttack(0, 1);
// board.receiveAttack(0, 2);
// board.receiveAttack(0, 3);
// board.receiveAttack(0, 4);
// console.log(board.isOver());
