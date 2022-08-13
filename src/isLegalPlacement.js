function isLegalPlacement(row, column, ship, orientation, board) {
  let isLegal = true;
  if (ship == "carrier") {
    if (orientation == 0) {
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isLegal = false;
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + 2][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + 2][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + 2][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 2][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 2][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 2][column + i] === "object") {
            isLegal = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column < 5) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 2] === "object") {
            isLegal = false;
          }
        } else if (column == 5) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 2] === "object") {
            isLegal = false;
          }
        } else if (column > 5) {
          isLegal = false;
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isLegal = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column + 2] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column + 2] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column + 2] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 2] === "object") {
            isLegal = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 2] === "object") {
            isLegal = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 2] === "object") {
            isLegal = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row < 5) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 2][column] === "object") {
            isLegal = false;
          }
        } else if (row == 5) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 2][column] === "object") {
            isLegal = false;
          }
        } else if (row > 5) {
          isLegal = false;
        } //row will never be greater than length (5 for carrier)
      }
    }
    //   } else if (ship == "battleship") {
    //   } else if (ship == "destroyer") {
    //   } else if (ship == "submarine") {
    //   } else if (ship == "patrolboat") {
    //   }
    return isLegal;
  }
}
export { isLegalPlacement };
