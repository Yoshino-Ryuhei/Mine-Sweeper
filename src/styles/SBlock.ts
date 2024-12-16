import styled from 'styled-components';

interface StyleProps {
  isOpen: boolean;
  isBom: boolean;
  numOfAroundBom: number;
}

export const SBlock = styled.div<StyleProps>`
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border: 3px outset gray;
    position: relative;
    ${(props) => {
      return props.isOpen
        ? `&::before{z-index:1;content:"${props.numOfAroundBom}";`
        : `&::before{z-index:1;content:"n";}`;
    }}
    ${(props) => {
      return props.isBom ? `background-color:red` : `background-color:aqua`;
    }}
`;
