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

createSquares();
console.log(board);
