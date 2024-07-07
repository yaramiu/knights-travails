class Square {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.validMoves = [];
    this.path = [];
  }
}

const board = [];

function createSquares() {
  const numRows = 8;
  const numColumns = 8;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      const square = new Square(i, j);
      board.push(square);
    }
  }
}

function checkBoardBounds(row, column) {
  if (row < 0 || column < 0) {
    return false;
  } else if (row > 7 || column > 7) {
    return false;
  }
  return true;
}

function findSquare(row, column) {
  let foundSquare = null;
  board.forEach((square) => {
    if (square.row === row && square.column === column) {
      foundSquare = square;
    }
  });
  return foundSquare;
}

function addValidMoves() {
  const knightMovements = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  board.forEach((square) => {
    knightMovements.forEach((knightMovement) => {
      const [currentRow, currentColumn] = [square.row, square.column];
      const movedRow = currentRow + knightMovement[0];
      const movedColumn = currentColumn + knightMovement[1];
      const isValidMove = checkBoardBounds(movedRow, movedColumn);
      if (isValidMove) {
        const foundSquare = findSquare(movedRow, movedColumn);
        if (foundSquare) {
          square.validMoves.push(foundSquare);
        }
      }
    });
  });
}

function knightMoves(start, end) {
  const startSquare = findSquare(start[0], start[1]);
  startSquare.path.push([startSquare.row, startSquare.column]);
  const endSquare = findSquare(end[0], end[1]);

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

createSquares();
addValidMoves();
// knightMoves([0, 0], [1, 2]);
// knightMoves([0, 0], [3, 3]);
// knightMoves([3, 3], [0, 0]);
// knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);
