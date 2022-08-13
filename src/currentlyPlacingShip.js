let currentShip = "";

function setCurrentlyPlacingShip(ship) {
  currentShip = ship;
}

function getCurrentlyPlacingShip() {
  return currentShip;
}
export { setCurrentlyPlacingShip, getCurrentlyPlacingShip };
