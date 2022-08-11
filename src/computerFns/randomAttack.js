import { gameboardFactory } from "../gameboardFactory";

//(board, row, column)
function randomAttack(board) {
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);

  if (isLegal(row, column)) {
    console.log(row, column, "legal attack");
    board.receiveAttack(row, column);
  } else {
    console.log(row, column, "not legal attack");
    randomAttack(board);
  }

  //else, repeat function

  function isLegal(row, column) {
    let isLegal = true;
    if (board.coordinates[row][column] == "miss") {
      isLegal = false;
    } else if (typeof board.coordinates[row][column] === "object") {
      if (
        board.coordinates[row][column].shipLocation[
          JSON.stringify([row, column])
        ] == true
      ) {
        isLegal = false;
      }
    }
    return isLegal;
  }
}
export { randomAttack };
