import { gameboardFactory } from "../gameboardFactory";
import { player } from "../player";

test("if a player attacks and sinks all ships on enemy gameboard, return true", () => {
  let opponentBoard = gameboardFactory();
  opponentBoard.placeShip(0, 0, 5, "destroyer");
  expect(player(opponentBoard)).toBe(true);
});

test("if a player attacks and does not sink all ships on enemy gameboard, return false", () => {
  let opponentBoard = gameboardFactory();
  opponentBoard.placeShip(0, 0, 5, "destroyer");
  opponentBoard.placeShip(2, 2, 5, "destroyer");
  expect(player(opponentBoard)).toBe(false);
});
