// Begin your app by creating the Ship factory function.

// Your ‘ships’ will be objects that include their length, where they’ve been hit and whether or not they’ve been sunk.

// REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.

// Ships should have a hit() function that takes a number and then marks that position as ‘hit’.

// isSunk() should be a function that calculates it based on their length and whether all of their positions are ‘hit’.

function shipFactory(length, name) {
  let hitLocations = [];

  for (let i = 0; i < length; i++) {
    hitLocations.push(i);
  }

  function hit(num) {
    this.hitLocations[num] = "hit";
  }

  function isSunk() {
    let sunk = true;
    for (let j = 0; j < this.length; j++) {
      if (this.hitLocations[j] != "hit") {
        sunk = false;
      }
    }
    if (sunk) {
      return true;
    } else {
      return false;
    }
  }

  return { length, hitLocations, hit, isSunk, name };
}
export { shipFactory };
