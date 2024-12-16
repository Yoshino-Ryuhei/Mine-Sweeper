export class Cell {
  public isOpen: boolean;
  public isBom: boolean;
  public numOfAroundBom: number;

  constructor(isOpen: boolean, isBom: boolean) {
    this.isOpen = isOpen;
    this.isBom = isBom;
    this.numOfAroundBom = 0;
  }
}
