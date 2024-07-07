import { Square } from "./square.js";

export class Board {
  constructor() {
    this.squares = [];

    const createSquares = () => {
      const numRows = 8;
      const numColumns = 8;
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numColumns; j++) {
          const square = new Square(i, j);
          this.squares.push(square);
        }
      }
    };

    createSquares();
  }

  addValidMoves() {
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
    this.squares.forEach((square) => {
      knightMovements.forEach((knightMovement) => {
        const [currentRow, currentColumn] = [square.row, square.column];
        const movedRow = currentRow + knightMovement[0];
        const movedColumn = currentColumn + knightMovement[1];
        const isValidMove = this.checkBoardBounds(movedRow, movedColumn);
        if (isValidMove) {
          const foundSquare = this.findSquare(movedRow, movedColumn);
          if (foundSquare) {
            square.validMoves.push(foundSquare);
          }
        }
      });
    });
  }

  checkBoardBounds(row, column) {
    if (row < 0 || column < 0) {
      return false;
    } else if (row > 7 || column > 7) {
      return false;
    }
    return true;
  }

  findSquare(row, column) {
    let foundSquare = null;
    this.squares.forEach((square) => {
      if (square.row === row && square.column === column) {
        foundSquare = square;
      }
    });
    return foundSquare;
  }
}
