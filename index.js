class Square {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.validMoves = [];
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

createSquares();
addValidMoves();
console.log(board);
