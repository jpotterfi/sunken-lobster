import { shipFactory } from "./shipFactory";

function gameboardFactory() {
  let coordinates = [
    ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
    ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
    ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
    ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
    ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"],
    ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10"],
    ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10"],
    ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10"],
    ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10"],
    ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10"],
  ];

  function placeShip(row, column, length, name, orientation) {
    let ship = shipFactory(length, name, orientation, row, column);

    if (orientation == 0) {
      //horizontal placement
      for (let i = 0; i < length; i++) {
        coordinates[row][column + i] = ship;
      }
    } else if (orientation == 1) {
      //vertical placement
      for (let i = 0; i < length; i++) {
        coordinates[row + i][column] = ship;
      }
    }
  }

  function receiveAttack(row, column) {
    if (typeof coordinates[row][column] === "object") {
      coordinates[row][column].hit([row, column]);
      return coordinates[row][column].isSunk();
    } else {
      coordinates[row][column] = "miss";
      return false;
    }
  }

  function isOver() {
    let isOver = true;
    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        if (typeof coordinates[row][column] === "object") {
          if (coordinates[row][column].isSunk() == false) {
            isOver = false;
          }
        }
      }
    }
    return isOver;
  }

  return { coordinates, placeShip, receiveAttack, isOver };
}
export { gameboardFactory };

// let arr = [
//   ["A1", "A2", "A3"],
//   ["B1", "B2", "B3"],
// ];
// //first value is the row, second value is the column
// console.log(arr[0][0]);

// //first parameter is the index (of the array) within coordinate array
// //second parameter is the index (of the value) within the index (of the array)

// console.log(arr[0][0]); //horizontal placement
// console.log(arr[0][0]);
// console.log(arr[0][1]);
// console.log(arr[0][2]);
// console.log(arr[0][3]);
// console.log(arr[0][4]);
// //increase value of second array up to ship's length to place horizontal
