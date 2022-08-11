import { gameboardFactory } from "../gameboardFactory";

function placeSubmarine(board) {
  let length = 3;
  let isFound = false;
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);
  let orientation = Math.floor(Math.random() * 2);

  while (isFound == false) {
    orientation = Math.floor(Math.random() * 2);
    row = Math.floor(Math.random() * 10);
    column = Math.floor(Math.random() * 10);
    isFound = true;

    //horizontal
    if (orientation == 0) {
      column = Math.floor(Math.random() * 8);
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
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column < 7) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 2] === "object") {
            isFound = false;
          }
        } else if (column == 7) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 2] === "object") {
            isFound = false;
          }
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      row = Math.floor(Math.random() * 8);
      column = Math.floor(Math.random() * 10);
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isFound = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column + 2] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column + 2] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column + 2] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 2] === "object") {
            isFound = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 2] === "object") {
            isFound = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 2] === "object") {
            isFound = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row < 7) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 2][column] === "object") {
            isFound = false;
          }
        } else if (row == 7) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 2][column] === "object") {
            isFound = false;
          }
        } //row will never be greater than length (5 for carrier)
      }
    }
  }
  console.log(row, column, orientation, "submarine");
  board.placeShip(row, column, length, "submarine", orientation);
}
export { placeSubmarine };
