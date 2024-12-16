import { Field } from './Field';

export class Game {
  public width: number;
  public height: number;
  public numOfBom: number;
  public field: Field;

  constructor(width: number, height: number, numOfBom: number) {
    this.width = width;
    this.height = height;
    this.numOfBom = numOfBom;
    this.field = new Field(width, height, numOfBom);
  }
}
