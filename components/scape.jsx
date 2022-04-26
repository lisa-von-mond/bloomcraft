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
        <SquareLeft>
          <ArrLeft onClick={shiftLeft}></ArrLeft>
        </SquareLeft>
        <SquareUp>
          <ArrUp onClick={shiftUp}></ArrUp>
        </SquareUp>
        <SquareDown>
          <ArrDown onClick={shiftDown}></ArrDown>
        </SquareDown>
        <SquareRight>
          <ArrRight onClick={shiftRight}></ArrRight>
        </SquareRight>
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

const SquareLeft = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid var(--layout);
  position: absolute;
  transform: translate(0px, -5px);
  top: 50%;
  left: 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SquareUp = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid var(--layout);
  position: absolute;
  transform: translate(-5px, 0);
  left: 50%;
  top: 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SquareRight = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid var(--layout);
  position: absolute;
  top: 50%;
  transform: translate(0px, -5px);
  right: 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SquareDown = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid var(--layout);
  position: absolute;
  transform: translate(-5px, 0);
  left: 50%;
  bottom: 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrLeft = styled.div`
  width: 10px;
  height: 10px;
  border-left: 2px solid var(--layout);
  border-bottom: 2px solid var(--layout);
  transform: rotate(45deg);
`;
const ArrUp = styled.div`
  width: 10px;
  height: 10px;
  border-top: 2px solid var(--layout);
  border-left: 2px solid var(--layout);
  transform: rotate(45deg);
`;
const ArrRight = styled.div`
  width: 10px;
  height: 10px;
  border-right: 2px solid var(--layout);
  border-top: 2px solid var(--layout);
  transform: rotate(45deg);
`;
const ArrDown = styled.div`
  width: 10px;
  height: 10px;
  border-bottom: 2px solid var(--layout);
  border-right: 2px solid var(--layout);
  transform: rotate(45deg);
`;
