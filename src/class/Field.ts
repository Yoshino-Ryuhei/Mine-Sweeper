import { getRandomInt } from '../function/getRandomInt';
import { Cell } from './Cell';

export class Field {
  public width: number;
  public height: number;
  public numOfBom: number;
  public field: Array<Array<Cell>>;

  constructor(width: number, height: number, numOfBom: number) {
    this.width = width;
    this.height = height;
    this.numOfBom = numOfBom;
    this.field = (function () {
      let field: Array<Array<Cell>> = [[]];
      for (let h = 0; h < height; h++) {
        field.push([]);
        for (let w = 0; w < width; w++) {
          field[h].push(new Cell(false, false));
        }
      }
      return field;
    })();
    this.setBom();
  }

  public setBom = () => {
    for (let n = 0; n <= this.numOfBom; n++) {
      let x = getRandomInt(0, this.width);
      let y = getRandomInt(0, this.height);
      this.field[y][x].isBom = true;
      console.log(x, y);
    }
  };

  // 周辺のボムの個数を調べる
  public searchBom = (x: number, y: number): number => {
    let numBom: number = 0;
    for (let col = -1; col <= 1; col++) {
      for (let row = -1; row <= 1; row++) {
        if (
          col + y < 0 ||
          col + y >= this.height ||
          row + x < 0 ||
          row + x >= this.width
        ) {
          continue;
        }

        if (this.field[col + y][row + x].isBom) {
          numBom += 1;
        }
      }
    }
    this.field[y][x].numOfAroundBom = numBom;
    return numBom;
  };

  public openNotBomCell = (x: number, y: number) => {
    for (let col = -1; col <= 1; col++) {
      for (let row = -1; row <= 1; row++) {
        if (
          col + y < 0 ||
          col + y >= this.height ||
          row + x < 0 ||
          row + x >= this.width
        ) {
          continue;
        }
        if (!this.field[col + y][row + x].isBom) {
          this.searchBom(row + x, col + y);
          this.field[col + y][row + x].isOpen = true;
        }
      }
    }
  };
}
