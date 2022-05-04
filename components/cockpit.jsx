import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

export function Cockpit({
  add,
  cpStatus,
  addNumber,
  set,
  del,
  commandLine,
  tempArr,
  move,
  cockpitCount,
  thisLevel,
  remCount,
}) {
  const tempCount = tempArr.length;

  function addLeft() {
    add('turn');
  }
  function addOut() {
    add('out');
  }
  function addIn() {
    add('in');
  }

  function addThree() {
    addNumber(3);
  }
  function addTwo() {
    addNumber(2);
  }

  function sparksInfo(x) {
    if (x <= 1) {
      return 'waiting for commands';
    } else {
      if (x > remCount) {
        return 'energy not available';
      } else {
        return 'this operation will take ' + x + ' energy units';
      }
    }
  }

  const sparks = sparksInfo(cockpitCount);

  return (
    <>
      <CPFrame>
        <ThisLevelInfo color="puremint">Level {thisLevel}</ThisLevelInfo>
        <CommandLine cpStatus={cpStatus}>
          {commandLine.map((element, index) => (
            <Command key={index} cpStatus={cpStatus}>
              {element}
            </Command>
          ))}
          <CommandLineTemp cpStatus={cpStatus}>
            {tempArr.map((element, index) => (
              <CommandTemp key={index} content={element}>
                {element}
              </CommandTemp>
            ))}
          </CommandLineTemp>
          <SetKey tempCount={tempCount} cpStatus={cpStatus} onClick={set}>
            set
          </SetKey>
        </CommandLine>
        <DashCounter
          cpStatus={cpStatus}
          remCount={remCount}
          cockpitCount={cockpitCount}
        >
          {sparks}
        </DashCounter>
        <TempCounter cpStatus={cpStatus} tempCount={tempCount}>
          {tempCount} / 5
        </TempCounter>
        <Keyboard>
          <KeyRow>
            <Key
              colorvar="mint"
              darkvar="darkmint"
              onClick={addOut}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              remCount={remCount}
              cpStatus={cpStatus}
            >
              out
            </Key>
            <Key
              colorvar="mint"
              darkvar="darkmint"
              onClick={addIn}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              remCount={remCount}
              cpStatus={cpStatus}
            >
              in
            </Key>
            <Key
              colorvar="mint"
              darkvar="darkmint"
              onClick={addLeft}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              remCount={remCount}
              cpStatus={cpStatus}
            >
              turn
            </Key>
            <div>
              <DelKey
                cpStatus={cpStatus}
                onClick={del}
                cockpitCount={cockpitCount}
              >
                del
              </DelKey>
            </div>
          </KeyRow>
          <KeyRow>
            <Key
              colorvar="sky"
              darkvar="darksky"
              onClick={addTwo}
              cpStatus={cpStatus}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              remCount={remCount}
            >
              2
            </Key>
            <Key
              colorvar="sky"
              darkvar="darksky"
              onClick={addThree}
              cpStatus={cpStatus}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              remCount={remCount}
            >
              3
            </Key>
            <GoKey
              colorvar="pink"
              darkvar="darkpink"
              cpStatus={cpStatus}
              onClick={move}
              cockpitCount={cockpitCount}
              remCount={remCount}
            >
              GO
            </GoKey>
          </KeyRow>
        </Keyboard>
      </CPFrame>
    </>
  );
}

// keyboard

const CPFrame = styled.div`
  width: 100%;
  border-radius: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Keyboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.7rem;
  font-weight: 600;

  @media only screen and (orientation: portrait) {
    flex-wrap: nowrap;
  }
  @media only screen and (max-width: 370px) {
    flex-wrap: wrap;
  }
`;

const KeyRow = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
`;

const Key = styled.div`
  font-size: 14px;
  min-width: 2.7rem;

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
  text-align: center;
  justify-content: center;
  padding: 0.5rem;
  background: var(--${props => props.colorvar});
  box-shadow: 3px 3px var(--${props => props.darkvar});
  cursor: pointer;
  &:hover {
    animation: buttonwow 0.5s;
  }
  &:active {
    transform: scale(90%);
    filter: brightness(150%);
  }

  ${props =>
    props.colorvar === 'mint' &&
    props.tempCount >= 5 &&
    css`
      filter: brightness(50%);
      cursor: default;
      &:hover,
      &:active {
        transform: none;
        animation: none;
        filter: brightness(50%);
      }
    `}

  ${props =>
    props.colorvar === 'mint' &&
    props.cpStatus > 1 &&
    css`
      background: var(--sky);
      box-shadow: 3px 3px var(--darksky);
    `}

${props =>
    props.colorvar === 'sky' &&
    props.cpStatus > 1 &&
    css`
      filter: brightness(50%);
      cursor: default;
      &:hover,
      &:active {
        transform: none;
        animation: none;
        filter: brightness(50%);
      }
    `}

${props =>
    props.cockpitCount >= props.remCount &&
    css`
      filter: brightness(50%);
      cursor: default;
      &:hover,
      &:active {
        transform: none;
        animation: none;
        filter: brightness(50%);
      }
    `}

${props =>
    props.colorvar === 'sky' &&
    props.tempCount >= 5 &&
    css`
      filter: brightness(50%);
      cursor: default;
      &:hover,
      &:active {
        transform: none;
        animation: none;
        filter: brightness(50%);
      }
    `}
`;

const GoKey = styled.div`
  font-size: 14px;
  min-width: 2.7rem;

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
  text-align: center;
  justify-content: center;
  padding: 0.5rem;
  background: var(--${props => props.colorvar});
  box-shadow: 3px 3px var(--${props => props.darkvar});
  cursor: pointer;

  ${props =>
    props.cpStatus === 1 &&
    props.cockpitCount <= props.remCount &&
    css`
      &:hover {
        animation: buttonwow 0.5s;
      }
      &:active {
        transform: scale(90%);
        filter: brightness(150%);
      }
    `}

  ${props =>
    props.cpStatus > 1 &&
    css`
      filter: brightness(50%);
      cursor: default;
      &:hover,
      &:active {
        transform: none;
        animation: none;
        filter: brightness(50%);
      }
    `}

  ${props =>
    props.cockpitCount > props.remCount &&
    css`
      filter: brightness(50%);
      cursor: default;
      &:hover,
      &:active {
        transform: none;
        animation: none;
        filter: brightness(50%);
      }
    `}
`;

const CommandLine = styled.div`
  min-height: 10rem;
  @media only screen and (max-width: 450px) {
    min-height: 7rem;
  }
  @media only screen and (orientation: portrait) {
    min-height: 7rem;
  }
  border-radius: 2rem;
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 0.8rem;
  gap: 0.5rem;
  flex-wrap: wrap;
  background: black;
  border: 1.5px solid var(--puremint);
  box-shadow: 3px 3px 0 0 var(--puremint);
`;

const Command = styled.div`
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  min-width: 2.3rem;
  padding: 0.5rem;
  color: var(--puremint);
  border: 2px solid var(--puremint);
  animation: cmd 0.6s;

  ${props =>
    props.cpStatus > 1 &&
    css`
      border: 2px solid #445232;
      color: #445232;
    `}
`;
const CommandLineTemp = styled.div`
  min-width: 40px;
  border-radius: 50px;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  color: var(--puresky);
  border: 2px solid var(--puresky);
  animation: blinker 1s linear infinite;

  ${props =>
    props.cpStatus === 1 &&
    css`
      display: none;
    `}
`;

const CommandTemp = styled.div`
  animation: cmd 0.3s;
  display: flex;
  flex-direction: row;

  ${props =>
    props.content > 1 &&
    css`
      filter: brightness(120%);
    `}
`;

const SetKey = styled.div`
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: var(--sky);
  box-shadow: 3px 3px var(--darksky);
  cursor: pointer;
  color: black;
  animation: cmd 0.3s;

  &:active {
    transform: scale(90%);
    filter: brightness(150%);
  }

  ${props =>
    props.tempCount <= 1 &&
    css`
      display: none;
    `}
`;

const DelKey = styled.div`
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0.5rem;
  font-size: 14px;
  cursor: pointer;
  color: black;
  background-color: var(--light);
  box-shadow: 3px 3px var(--darklight);

  &:active {
    transform: scale(90%);
    filter: brightness(150%);
  }
  &:hover {
    animation: buttonwow 0.5s;
  }

  ${props =>
    props.cockpitCount === 0 &&
    css`
      transform: none;
      filter: none;
    `}
`;

const DashCounter = styled.div`
  max-width: 85%;
  text-align: center;
  animation: type 1s;
  color: var(--puremint);
  font-size: 0.8rem;

  @media only screen and (orientation: landscape) and (max-width: 800px) {
    font-size: 0.6rem;
  }

  ${props =>
    props.cockpitCount > props.remCount &&
    css`
      color: var(--purepink);
      animation: blinker 1s linear infinite;
    `}

  ${props =>
    props.cockpitCount === props.remCount &&
    css`
      animation: blinker 1s linear infinite;
    `}

  ${props =>
    props.cpStatus > 1 &&
    css`
      display: none;
    `}
`;

const TempCounter = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  width: auto;
  animation: type 1s;
  color: var(--puresky);

  font-size: 0.8rem;

  @media only screen and (orientation: landscape) and (max-width: 800px) {
    font-size: 0.6rem;
  }

  ${props =>
    props.tempCount >= 5 &&
    css`
      color: var(--purepink);
      animation: blinker 1s linear infinite;
    `}

  ${props =>
    props.cpStatus === 1 &&
    css`
      display: none;
    `}
`;

const ThisLevelInfo = styled.div`
  color: var(--puremint);
  text-transform: uppercase;
  text-align: center;
  font-size: 1.3rem;
  border-bottom: 2px solid var(--puremint);
`;

//*animation: cmd 0.3s;
