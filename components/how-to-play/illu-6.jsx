import styled, { css } from 'styled-components';

export function IlluSix() {
  return (
    <Squares>
      <Square type="left">
        <Arr></Arr>
      </Square>
      <Square type="up">
        <Arr></Arr>
      </Square>
      <Square type="down">
        <Arr></Arr>
      </Square>
      <Square type="right">
        <Arr></Arr>
      </Square>
    </Squares>
  );
}

const Squares = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  display: grid;
  grid-template-rows: 2rem 1rem 2rem 1rem 2rem;
  grid-template-columns: 2rem 1rem 2rem 1rem 2rem;
`;

const Square = styled.div`
  height: 2rem;
  width: 2rem;
  border: 2px solid var(--layout);
  position: absolute;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.type === 'left' &&
    css`
      grid-row: 1/1;
      grid-column: 3/3;
      transform: rotate(90deg);
    `}

  ${props =>
    props.type === 'up' &&
    css`
      grid-row: 3/3;
      grid-column: 1/1;
    `}

      ${props =>
    props.type === 'right' &&
    css`
      grid-row: 5/5;
      grid-column: 3/3;
      transform: rotate(-90deg);
    `}

        ${props =>
    props.type === 'down' &&
    css`
      grid-row: 3/3;
      grid-column: 5/5;
      transform: rotate(180deg);
    `}
`;

const Arr = styled.div`
  width: 10px;
  height: 10px;
  border-left: 2px solid var(--layout);
  border-bottom: 2px solid var(--layout);
  transform: rotate(45deg);
`;
