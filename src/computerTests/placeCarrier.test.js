import { placeCarrier } from "../computerFns/placeCarrier";

test("placeCarrier generates a number between (including) 0 and 9", () => {
  expect(placeCarrier()).toBe(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9);
});
