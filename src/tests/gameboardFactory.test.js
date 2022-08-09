import { gameboardFactory } from "../gameboardFactory";

test("ship is sunk after all of its hit locations have been targeted", () => {
  let gameboard = gameboardFactory();
  gameboard.placeShip(0, 0, 5, "destroyer");
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  gameboard.receiveAttack(0, 2);
  gameboard.receiveAttack(0, 3);
  expect(gameboard.receiveAttack(0, 4)).toBe(true);
});
test("ship is not sunk if only some of its locations have been hit", () => {
  let gameboard = gameboardFactory();
  gameboard.placeShip(0, 0, 5, "destroyer");
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 3);
  gameboard.receiveAttack(0, 5);
  expect(gameboard.receiveAttack(0, 4)).toBe(false);
});
test("isOver returns true when all ship objects return true from isSunk() ", () => {
  let gameboard = gameboardFactory();
  gameboard.placeShip(0, 0, 5, "destroyer");
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  gameboard.receiveAttack(0, 2);
  gameboard.receiveAttack(0, 3);
  gameboard.receiveAttack(0, 4);
  expect(gameboard.isOver()).toBe(true);
});
test("isOver returns false when only some ship objects return true from isSunk() ", () => {
  let gameboard = gameboardFactory();
  gameboard.placeShip(0, 0, 5, "destroyer");
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  gameboard.receiveAttack(0, 2);
  gameboard.receiveAttack(0, 3);
  expect(gameboard.isOver()).toBe(false);
});
