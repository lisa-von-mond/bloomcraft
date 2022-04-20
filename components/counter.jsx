import styled, { css } from 'styled-components';

export function GlobalCounter({ hand, globalCount, max, thisLevel }) {
  return (
    <CounterFix hand={hand}>
      <Counter>
        {globalCount} / {max}
      </Counter>
      <Counter>Level {thisLevel}</Counter>
    </CounterFix>
  );
}

const CounterFix = styled.div`
  position: fixed;
  top: 2rem;
  left: 2rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  font-size: 16px;

  ${props =>
    props.hand === true &&
    css`
      left: 5vw;
    `}

  ${props =>
    props.hand === false &&
    css`
      right: 5vw;
    `}
`;

const Counter = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 20px;
`;
