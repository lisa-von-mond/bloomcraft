import styled, { css } from 'styled-components';
import Image from 'next/image';
import ufo from '../../public/images/future_ufo.svg';
import planet2 from '../../public/images/planets/planet2_overlay.svg';
import planet3 from '../../public/images/planets/planet3_overlay.svg';
import { useState } from 'react';

export function IlluThree() {
  const [ufoPosition, setUfoPosition] = useState(2);
  const [testFocus, setTestFocus] = useState(2.1);

  function ufoIn() {
    if (ufoPosition === 2) {
      null;
    } else {
      setTestFocus(ufoPosition);
      setUfoPosition(2);
    }
  }

  function ufoOut() {
    if (ufoPosition !== 2) {
      null;
    } else {
      setUfoPosition(testFocus);
      setTestFocus(null);
    }
  }

  function ufoTurn() {
    if (testFocus === 2.1) {
      setTestFocus(2.2);
    } else {
      if (testFocus === 2.2) {
        setTestFocus(2.3);
      } else {
        setTestFocus(2.1);
      }
    }
  }

  return (
    <TestLevel>
      <Keyboard>
        <Key onClick={ufoOut}>out</Key>
        <Key onClick={ufoIn}>in</Key>
        <Key onClick={ufoTurn}>turn</Key>
      </Keyboard>

      <VisualHowTo>
        <Planet2 testFocus={testFocus}>
          <Image src={planet2} alt="planet" />2
        </Planet2>

        <Planet21 testFocus={testFocus}>
          <Image src={planet3} alt="planet" />
          2.1
        </Planet21>

        <Planet22 testFocus={testFocus}>
          <Image src={planet3} alt="planet" />
          2.2
        </Planet22>

        <Planet23 testFocus={testFocus}>
          <Image src={planet3} alt="planet" />
          2.3
        </Planet23>

        <Ufo position={ufoPosition}>
          <Image src={ufo} alt="ufo" />
        </Ufo>
      </VisualHowTo>
    </TestLevel>
  );
}

const TestLevel = styled.div`
  display: flex;
  width: 100%;
`;

const VisualHowTo = styled.div`
  position: relative;
  color: white;
  width: 100%;
  display: grid;
  grid template-columns: 1fr 1fr 1fr 1fr;
  grid template-rows: 1fr 1fr 1fr 1fr;
`;

const Planet2 = styled.div`
  position: absolute;
  transform: scale(80%);
  grid-row: 1;
  grid-column: 1;
  justify-self: center;
  align-self: center;
`;

const Planet21 = styled.div`
  transform: scale(80%);
  grid-row: 1;
  grid-column: 1;
  justify-self: center;
  align-self: center;

  ${props =>
    props.testFocus === 2.1 &&
    css`
      animation: blinker 1s linear infinite;
    `}
`;
const Planet22 = styled.div`
  transform: scale(80%);
  grid-row: 2;
  grid-column: 4;
  justify-self: center;
  align-self: center;

  ${props =>
    props.testFocus === 2.2 &&
    css`
      animation: blinker 1s linear infinite;
    `}
`;

const Planet23 = styled.div`
  transform: scale(80%);
  grid-row: 4;
  grid-column: 2;
  justify-self: center;
  align-self: center;

  ${props =>
    props.testFocus === 2.3 &&
    css`
      animation: blinker 1s linear infinite;
    `}
`;

const Ufo = styled.div`
  height: 100px;
  width: 100px;

  ${props =>
    props.position === 2 &&
    css`
      grid-row: 1;
      grid-column: 1;
      animation: ufo 0.5s;
    `}

  ${props =>
    props.position === 2.1 &&
    css`
      grid-row: 1;
      grid-column: 1;
      height: 80px;
      width: 80px;
      animation: ufo 0.5s;
    `}

${props =>
    props.position === 2.2 &&
    css`
      grid-row: 2;
      grid-column: 4;
      height: 80px;
      width: 80px;
      animation: ufo 0.5s;
    `}

${props =>
    props.position === 2.3 &&
    css`
      grid-row: 4;
      grid-column: 2;
      height: 80px;
      width: 80px;
      animation: ufo 0.5s;
    `}
`;

const Keyboard = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: flex-end;
`;

const Key = styled.div`
  font-size: 12px;
  min-width: 2.7rem;
  height: 2rem;

  @media only screen and (max-width: 900px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }

  display: flex;
  color: black;
  border-radius: 100px;
  align-items: center;

  justify-content: center;
  padding: 0.5rem;
  background: var(--puremint);
  box-shadow: 3px 3px var(--darkmint);
  cursor: pointer;
  &:hover {
    animation: buttonwow 0.5s;
  }
  &:active {
    transform: scale(90%);
    filter: brightness(150%);
  }
`;
