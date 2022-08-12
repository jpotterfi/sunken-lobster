import { randomAttack } from "./computerFns/randomAttack";
import { gameboardFactory } from "./gameboardFactory";
import { getDifficulty } from "./gameDifficulty";

function displayBoard(player, computer) {
  createPlayerBoard();
  updatePlayerBoard(player);
  createComputerBoard();
  function createPlayerBoard() {
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
  }
  function updatePlayerBoard(player) {
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
            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              console.log("found a hit location at" + i + "" + j);
              submarine.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "carrier") {
            let carrier = document.getElementById("playerbox" + i + "" + j);
            carrier.style.backgroundColor = "grey";
            carrier.innerText = "c";
            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              console.log("found a hit location at" + i + "" + j);
              carrier.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "battleship") {
            let battleship = document.getElementById("playerbox" + i + "" + j);
            battleship.style.backgroundColor = "orange";
            battleship.innerText = "b";
            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              console.log("found a hit location at" + i + "" + j);
              battleship.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "patrolboat") {
            let patrolboat = document.getElementById("playerbox" + i + "" + j);
            patrolboat.style.backgroundColor = "purple";
            patrolboat.innerText = "p";
            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              console.log("found a hit location at" + i + "" + j);
              patrolboat.style.backgroundColor = "red";
            }
          }
        } else if (playerBoard.coordinates[i][j] == "miss") {
          let miss = document.getElementById("playerbox" + i + "" + j);
          miss.innerText = "x";
        }
      }
    }
  }
  function createComputerBoard() {
    let board = document.getElementById("boardTwo");
    for (let i = 0; i < 10; i++) {
      let row = document.createElement("div");
      row.id = "row" + i;
      row.className = "row";
      for (let j = 0; j < 10; j++) {
        let box = document.createElement("div");
        box.id = JSON.stringify([i, j]);
        box.className = "box";
        box.addEventListener("click", function () {
          let arr = JSON.parse(box.id);
          let arrRow = arr[0];
          let arrColumn = arr[1];
          //turn id into coordinates
          let computerBoard = computer;
          if (computerBoard.isOver() != true) {
            computerBoard.receiveAttack(arrRow, arrColumn);
            updateComputerBoard(computer);
            if (getDifficulty() == "easy") {
              if (playerBoard.isOver() != true) {
                let playerBoard = player;
                randomAttack(playerBoard);
                updatePlayerBoard(player);
              }
            }
          }
        });
        row.appendChild(box);
      }
      board.appendChild(row);
    }
  }
  function updateComputerBoard(computer) {
    let computerBoard = computer;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof computerBoard.coordinates[i][j] === "object") {
          if (
            computerBoard.coordinates[i][j].shipLocation[
              JSON.stringify([i, j])
            ] == true
          ) {
            let hitBox = document.getElementById(JSON.stringify([i, j]));
            hitBox.style.backgroundColor = "red";
          }
        } else if (computerBoard.coordinates[i][j] == "miss") {
          let missBox = document.getElementById(JSON.stringify([i, j]));
          missBox.style.backgroundColor = "#ADD8E6";
        }
      }
    }
  }
}
export { displayBoard };
