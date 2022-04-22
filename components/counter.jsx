import styled, { css } from 'styled-components';

export function GlobalCounter({ hand, globalCount, max, life }) {
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
  const lifeDots = visualCount(life);

  return (
    <CounterFix hand={hand}>
      <CounterInfo color="purepink">dashes left:</CounterInfo>
      <DotContainer>
        {counterDots.map((element, index) => (
          <Dot color="pink" key={'pink' + index}></Dot>
        ))}
      </DotContainer>
      <CounterInfo color="puremint">lives left:</CounterInfo>
      <DotContainer>
        {lifeDots.map((element, index) => (
          <Dot color="mint" key={'green' + index}></Dot>
        ))}
      </DotContainer>
    </CounterFix>
  );
}

const CounterFix = styled.div`
  position: fixed;
  top: 2rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  font-size: 0.8rem;
  gap: 0.8rem;
  border-radius: 1rem;
  padding: 0;
  font-weight: 600;

  ${props =>
    props.hand === true &&
    css`
      left: 2rem;
    `}

  ${props =>
    props.hand === false &&
    css`
      right: 2rem;
      align-items: flex-end;
    `}
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
  background: var(--${props => props.color});
`;

const CounterInfo = styled.div`
  color: var(--${props => props.color});
`;
