// Begin your app by creating the Ship factory function.

// Your ‘ships’ will be objects that include their length, where they’ve been hit and whether or not they’ve been sunk.

// REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.

// Ships should have a hit() function that takes a number and then marks that position as ‘hit’.

// isSunk() should be a function that calculates it based on their length and whether all of their positions are ‘hit’.

function shipFactory(length, name, orientation, row, column) {
  let shipLocation = [];

  if (orientation == "horizontal") {
    for (let i = 0; i < length; i++) {
      shipLocation.push([row, column + i]);
    }
  } else if (orientation == "vertical") {
    for (let i = 0; i < length; i++) {
      shipLocation.push([row + i, column]);
    }
  }

  function hit(coordArray) {
    for (let i = 0; i < this.length; i++) {
      if (JSON.stringify(this.shipLocation[i]) == JSON.stringify(coordArray)) {
        this.shipLocation[i] = ["hit", "hit"];
        console.log("hit");
      } else if (
        JSON.stringify(this.shipLocation[i]) == JSON.stringify(["hit", "hit"])
      ) {
        console.log("hit previously hit location");
      }
    }
  }

  function isSunk() {
    let sunk = true;
    for (let i = 0; i < length; i++) {
      if (this.shipLocation[i][0] != "hit") {
        sunk = false;
      }
    }
    if (sunk) {
      return true;
    } else {
      return false;
    }
  }

  return { length, shipLocation, hit, isSunk, name };
}
export { shipFactory };
