function shipFactory(length, name, orientation, row, column) {
  let shipLocation = {};

  if (orientation == "horizontal") {
    for (let i = 0; i < length; i++) {
      shipLocation[JSON.stringify([row, column + i])] = false;
    }
  } else if (orientation == "vertical") {
    for (let i = 0; i < length; i++) {
      shipLocation[JSON.stringify([row + i, column])] = false;
    }
  }

  function hit(coordArray) {
    for (const property in shipLocation) {
      if (JSON.stringify(coordArray) == property) {
        shipLocation[property] = true;
      }
    }
  }

  function isSunk() {
    let sunk = true;
    for (const property in shipLocation) {
      if (shipLocation[property] == false) {
        sunk = false;
      }
    }
    return sunk;
  }
  return { length, shipLocation, hit, isSunk, name };
}
export { shipFactory };
