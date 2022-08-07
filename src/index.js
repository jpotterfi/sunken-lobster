import { gameboardFactory } from "./gameboardFactory";
import { shipFactory } from "./shipFactory";

let arr = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
];
//first value is the row, second value is the column
console.log(arr[1][1]);

let gameboard = gameboardFactory();
console.table(gameboard);
gameboard.placeShip(0, 0, 5, "destroyer");

//first parameter is the index (of the array) within coordinate array
//second parameter is the index (of the value) within the index (of the array)
