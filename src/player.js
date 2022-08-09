import { gameboardFactory } from "./gameboardFactory";

function player(opponentBoard) {
  opponentBoard.receiveAttack(0, 0);
  opponentBoard.receiveAttack(0, 1);
  opponentBoard.receiveAttack(0, 2);
  opponentBoard.receiveAttack(0, 3);
  opponentBoard.receiveAttack(0, 4);
  return opponentBoard.isOver();
}
export { player };
