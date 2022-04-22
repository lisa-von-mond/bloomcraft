import styled, { css } from 'styled-components';
import { Galaxy } from './galaxy';
import { useState } from 'react';

export function Scape({ galaxy, chargeStatus, destination, charge, goal }) {
  const [xShift, setXShift] = useState(50); // for shifting layout in x direction
  const [yShift, setYShift] = useState(50); // for shifting layout in y direction

  function shiftLeft() {
    setXShift(xShift + 10);
  }

  function shiftRight() {
    setXShift(xShift - 10);
  }

  function shiftUp() {
    setYShift(yShift - 10);
  }

  function shiftDown() {
    setYShift(yShift + 10);
  }

  function shiftNow() {
    console.log('this function will come');
  }

  return (
    <>
      <ScapeInner>
        <WholeGalaxy x={xShift} y={yShift} onKeyPress={shiftNow}>
          <Galaxy
            galaxy={galaxy}
            chargeStatus={chargeStatus}
            destination={destination}
            charge={charge}
            goal={goal}
          />
        </WholeGalaxy>
        <ArrLeft onClick={shiftLeft}></ArrLeft>
        <ArrUp onClick={shiftUp}></ArrUp>
        <ArrDown onClick={shiftDown}></ArrDown>
        <ArrRight onClick={shiftRight}></ArrRight>
      </ScapeInner>
    </>
  );
}

const ScapeInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
`;

const WholeGalaxy = styled.div`
  height: 10px;
  width: 10px;
  position: absolute;
  bottom: ${props => props.y}%;
  left: ${props => props.x}%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    transform: scale(90%, 90%);
  }

  @media only screen and (max-width: 600px) {
    transform: scale(70%, 70%);
  }
`;

const ArrLeft = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid var(--layout);
  position: absolute;
  transform: translate(0px, -5px);
  top: 50%;
  left: 0;
  border-radius: 5px;
`;
const ArrUp = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid var(--layout);
  position: absolute;
  transform: translate(-5px, 0);
  left: 50%;
  top: 0;
  border-radius: 5px;
`;
const ArrRight = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid var(--layout);
  position: absolute;
  top: 50%;
  transform: translate(0px, -5px);
  right: 0;
  border-radius: 5px;
`;
const ArrDown = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid var(--layout);
  position: absolute;
  transform: translate(-5px, 0);
  left: 50%;
  bottom: 0;
  border-radius: 5px;
`;
