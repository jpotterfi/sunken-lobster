import { gameboardFactory } from "../gameboardFactory";

function placeCarrier(board) {
  let length = 5;
  let isFound = false;
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);

  while (isFound == false) {
    row = Math.floor(Math.random() * 10);
    column = Math.floor(Math.random() * 6);
    let orientation = Math.floor(Math.random() * 2);
    isFound = true;

    if (orientation == 0 || orientation == 1) {
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isFound = false;
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + 2][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + 2][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + 2][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 2][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 2][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 2][column + i] === "object") {
            isFound = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column + 2] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column + 2] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column + 2] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 2] === "object") {
            isFound = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 2] === "object") {
            isFound = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 2] === "object") {
            isFound = false;
          }
        }
      }
    }
  }
  console.log(row, column);
}
export { placeCarrier };
