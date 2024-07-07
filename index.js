import { Board } from "./board.js";

function knightMoves(start, end) {
  const board = new Board();
  board.addValidMoves();

  const startSquare = board.findSquare(start[0], start[1]);
  startSquare.path.push([startSquare.row, startSquare.column]);
  const endSquare = board.findSquare(end[0], end[1]);

  const queue = [];
  queue.push(startSquare);

  const visitedSquares = [];
  while (queue.length > 0) {
    const currentSquare = queue.shift();

    if (currentSquare === endSquare) {
      break;
    }

    if (!visitedSquares.includes(currentSquare)) {
      visitedSquares.push(currentSquare);
      currentSquare.validMoves.forEach((square) => {
        square.path = currentSquare.path.concat([[square.row, square.column]]);
        queue.push(square);
      });
    }
  }

  const numMoves = endSquare.path.length - 1;
  console.log(`=> You made it in ${numMoves} moves!  Here's your path:`);
  endSquare.path.forEach((square) => {
    console.log(square);
  });
}

// knightMoves([0, 0], [1, 2]);
// knightMoves([0, 0], [3, 3]);
// knightMoves([3, 3], [0, 0]);
// knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);
