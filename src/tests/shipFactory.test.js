import { shipFactory } from "../shipFactory";

// test("shipFactory takes in a length and returns an object with a length, hitLocations array, hit(), and isSunk()", () => {
//   expect(shipFactory(5)).toEqual({ length: 5 });
// });

test("ship object that is partially hit returns a value of false when isSunk is called", () => {
  let ship = shipFactory(5, "destroyer");
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  expect(ship.isSunk()).toBe(false);
});

test("ship object that is hit at every value in array (determind by length) returns a value of true when isSunk is called", () => {
  let ship = shipFactory(5, "destroyer");
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  ship.hit(4);
  expect(ship.isSunk()).toBe(true);
});
