import { FC, memo, useState } from 'react';
import { Game } from '../../class/Game';
import { MineSweeperField } from '../organisms/MineSweeperField';
import { Cell } from '../../class/Cell';

const game = new Game(10, 20, 9);
export const MineSweeper: FC = memo(() => {
  const [newfield, setNewField] = useState(game.field.field);

  const setField = (): void => {
    let array: Array<Array<Cell>> = [];
    game.field.field.forEach((y) => {
      array.push([...y]);
    });
    setNewField(array);
  };

  const onClickCell = (x: number, y: number): void => {
    game.field.field[y][x].isOpen = true;
    console.log(x, y);
    game.field.openNotBomCell(x, y);
    setField();
  };
  return <MineSweeperField field={newfield} onClickCell={onClickCell} />;
});
