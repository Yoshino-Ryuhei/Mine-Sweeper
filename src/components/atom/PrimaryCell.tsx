import { memo } from 'react';
import { Cell } from '../../class/Cell';
import { SBlock } from '../../styles/SBlock';

type Props = {
  cell: Cell;
  x: number;
  y: number;
  onClick: (x: number, y: number) => void;
  children?: string;
};

export const PrimaryCell = memo((props: Props) => {
  const { cell, x, y, onClick, children } = props;
  return (
    <SBlock
      isOpen={cell.isOpen}
      isBom={cell.isBom}
      numOfAroundBom={cell.numOfAroundBom}
      children={children}
      onClick={() => onClick(x, y)}
    />
  );
});
