import { gameboardFactory } from "./gameboardFactory";

function displayBoard() {
  let board = document.getElementById("boardOne");
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.id = "row" + i;
    row.className = "row";
    for (let j = 0; j < 10; j++) {
      let box = document.createElement("div");
      box.id = "box" + i + "" + j;
      box.className = "box";
      row.appendChild(box);
    }
    board.appendChild(row);
  }
  let sampleBoard = gameboardFactory();
  sampleBoard.placeShip(0, 0, 5, "destroyer");
  sampleBoard.placeShip(2, 0, 3, "submarine");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (typeof sampleBoard.coordinates[i][j] === "object") {
        if (sampleBoard.coordinates[i][j].name == "destroyer") {
          console.log("destroyer here");
          let destroyer = document.getElementById("box" + i + "" + j);
          destroyer.style.backgroundColor = "blue";
          destroyer.innerText = "d";
        } else if (sampleBoard.coordinates[i][j].name == "submarine") {
          let submarine = document.getElementById("box" + i + "" + j);
          submarine.style.backgroundColor = "green";
          submarine.innerText = "s";
        }
      }
    }
  }
}
export { displayBoard };
