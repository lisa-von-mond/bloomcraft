import styled, { css } from 'styled-components';

export function GlobalCounter({ hand, globalCount, max, thisLevel }) {
  function visualCount(number) {
    if (number === 0) {
      return [0];
    } else {
      const dot = '%dot'.repeat(number - 1);
      const arr = ('dot' + dot).split('%');
      return arr;
    }
  }

  const counterDots = visualCount(max - globalCount);

  return (
    <CounterFix hand={hand}>
      <LevelInfo>Level {thisLevel}</LevelInfo>
      <DotContainer>
        {counterDots.map((element, index) => (
          <Dot color="purepink" key={index}></Dot>
        ))}
      </DotContainer>
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
  align-items: flex-start;
  color: white;
  font-size: 16px;
  gap: 0.8rem;

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

const LevelInfo = styled.div`
  color: var(--puremint);
  text-transform: uppercase;
`;

const DotContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;

const Dot = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  background-color: var(--pink);
`;
