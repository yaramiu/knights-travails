export class Square {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.validMoves = [];
    this.path = [];
  }
}
