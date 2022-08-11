import { placeBattleship } from "./placeBattleship";
import { placeCarrier } from "./placeCarrier";
import { placeDestroyer } from "./placeDestroyer";
import { placePatrolboat } from "./placePatrolboat";
import { placeSubmarine } from "./placeSubmarine";

function computerPlaceShips(computerBoard) {
  placeCarrier(computerBoard);
  placeBattleship(computerBoard);
  placeDestroyer(computerBoard);
  placeSubmarine(computerBoard);
  placePatrolboat(computerBoard);
}
export { computerPlaceShips };
