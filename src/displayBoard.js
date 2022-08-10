import { gameboardFactory } from "./gameboardFactory";

function displayBoard(player, computer) {
  displayPlayerBoard(player);
  displayComputerBoard(computer);
  function displayPlayerBoard(player) {
    let board = document.getElementById("boardOne");
    for (let i = 0; i < 10; i++) {
      let row = document.createElement("div");
      row.id = "row" + i;
      row.className = "row";
      for (let j = 0; j < 10; j++) {
        let box = document.createElement("div");
        box.id = "playerbox" + i + "" + j;
        box.className = "box";
        row.appendChild(box);
      }
      board.appendChild(row);
    }
    let playerBoard = player;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof playerBoard.coordinates[i][j] === "object") {
          if (playerBoard.coordinates[i][j].name == "destroyer") {
            let destroyer = document.getElementById("playerbox" + i + "" + j);
            destroyer.style.backgroundColor = "blue";
            destroyer.innerText = "d";
            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              console.log("found a hit location at" + i + "" + j);
              destroyer.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "submarine") {
            let submarine = document.getElementById("playerbox" + i + "" + j);
            submarine.style.backgroundColor = "green";
            submarine.innerText = "s";
          }
        } else if (playerBoard.coordinates[i][j] == "miss") {
          let miss = document.getElementById("playerbox" + i + "" + j);
          miss.innerText = "x";
        }
      }
    }
  }
  function displayComputerBoard(computer) {
    let board = document.getElementById("boardTwo");
    for (let i = 0; i < 10; i++) {
      let row = document.createElement("div");
      row.id = "row" + i;
      row.className = "row";
      for (let j = 0; j < 10; j++) {
        let box = document.createElement("div");
        box.id = "computerbox" + i + "" + j;
        box.className = "box";
        row.appendChild(box);
      }
      board.appendChild(row);
    }
    let computerBoard = computer;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof computerBoard.coordinates[i][j] === "object") {
          if (computerBoard.coordinates[i][j].name == "destroyer") {
            let destroyer = document.getElementById("computerbox" + i + "" + j);
            destroyer.style.backgroundColor = "blue";
            destroyer.innerText = "d";
          } else if (computerBoard.coordinates[i][j].name == "submarine") {
            let submarine = document.getElementById("computerbox" + i + "" + j);
            submarine.style.backgroundColor = "green";
            submarine.innerText = "s";
          }
        }
      }
    }
  }
}
export { displayBoard };
