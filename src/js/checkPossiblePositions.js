import commonDataGame from './commonDataGame';

export default function checkPossiblePositions() {
  const userPossiblePositions = [];
  const computerPossiblePositions = [];
  const boardSize = commonDataGame.boardSize;
  const board = boardSize * boardSize;
  for(let i = 0; i < board; i += 1) {
    if( i % boardSize === 0 ){
      userPossiblePositions.push(i);
      userPossiblePositions.push(i + 1);
      computerPossiblePositions.push(i - 2);
      computerPossiblePositions.push(i - 1);
    }
  }
  const possiblePositions = {
    user: userPossiblePositions,
    computer: computerPossiblePositions.filter(i => i > 0),
  }
  return possiblePositions;
}