import styled, { css } from 'styled-components';
import { Galaxy } from './galaxy';
import { useState } from 'react';
import { unstable_createPortal } from 'react-dom';

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
        <Square type="left" onClick={shiftLeft}>
          <Arr></Arr>
        </Square>
        <Square type="up" onClick={shiftUp}>
          <Arr></Arr>
        </Square>
        <Square type="down" onClick={shiftDown}>
          <Arr></Arr>
        </Square>
        <Square type="right" onClick={shiftRight}>
          <Arr></Arr>
        </Square>
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

const Square = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid var(--layout);
  position: absolute;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props =>
    props.type === 'left' &&
    css`
      transform: translate(0px, -5px);
      top: 50%;
      left: 0;
    `}

  ${props =>
    props.type === 'up' &&
    css`
      transform: translate(-5px, 0) rotate(90deg);
      left: 50%;
      top: 0;
    `}

      ${props =>
    props.type === 'right' &&
    css`
      top: 50%;
      transform: translate(0px, -5px) rotate(180deg);
      right: 0;
    `}

        ${props =>
    props.type === 'down' &&
    css`
      transform: translate(-5px, 0) rotate(-90deg);
      left: 50%;
      bottom: 0;
    `}
`;

const Arr = styled.div`
  width: 10px;
  height: 10px;
  border-left: 2px solid var(--layout);
  border-bottom: 2px solid var(--layout);
  transform: rotate(45deg);
`;
