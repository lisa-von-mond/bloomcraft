import styled, { css } from 'styled-components';

export function Cockpit({
  add,
  addTwo,
  cpStatus,
  addThree,
  set,
  del1,
  del2,
  commandLine,
  tempArr,
  move,
  cockpitCount,
  maxCount,
}) {
  const tempCount = tempArr.length;

  function addRight() {
    add('right');
  }
  function addLeft() {
    add('turn');
  }
  function addOut() {
    add('out');
  }
  function addIn() {
    add('in');
  }

  function sparksInfo(x) {
    if (x <= 1) {
      return 'waiting for commands';
    } else {
      if (x > maxCount) {
        return 'energy not available';
      } else {
        return 'this operation will take ' + x + ' dashes';
      }
    }
  }

  const sparks = sparksInfo(cockpitCount);

  return (
    <>
      <CPFrame>
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
        <CpCounter1
          cpStatus={cpStatus}
          maxCount={maxCount}
          cockpitCount={cockpitCount}
        >
          {sparks}
        </CpCounter1>
        <CpCounter2 cpStatus={cpStatus} tempCount={tempCount}>
          {tempCount} / 4
        </CpCounter2>
        <Keyboard>
          <CommandLineRow>
            <Key
              colorvar="mint"
              onClick={addOut}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              maxCount={maxCount}
              cpStatus={cpStatus}
            >
              out
            </Key>
            <Key
              colorvar="mint"
              onClick={addIn}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              maxCount={maxCount}
              cpStatus={cpStatus}
            >
              in
            </Key>
            <Key
              colorvar="mint"
              onClick={addLeft}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              maxCount={maxCount}
              cpStatus={cpStatus}
            >
              turn
            </Key>
            {/* <Key
              colorvar="mint"
              onClick={addRight}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              maxCount={maxCount}
              cpStatus={cpStatus}
            >
              right
            </Key> */}
            <div>
              <DelKey1
                cpStatus={cpStatus}
                onClick={del1}
                cockpitCount={cockpitCount}
              >
                del
              </DelKey1>
              <DelKey2 cpStatus={cpStatus} onClick={del2}>
                del
              </DelKey2>
            </div>
          </CommandLineRow>
          <CommandLineRow>
            <Key
              colorvar="sky"
              onClick={addTwo}
              cpStatus={cpStatus}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              maxCount={maxCount}
            >
              2
            </Key>
            <Key
              colorvar="sky"
              onClick={addThree}
              cpStatus={cpStatus}
              tempCount={tempCount}
              cockpitCount={cockpitCount}
              maxCount={maxCount}
            >
              3
            </Key>
            <Key
              colorvar="pink"
              cpStatus={cpStatus}
              onClick={move}
              cockpitCount={cockpitCount}
              maxCount={maxCount}
            >
              GO
            </Key>
          </CommandLineRow>
        </Keyboard>
      </CPFrame>
    </>
  );
}

// keyboard

const CPFrame = styled.div`
  border-radius: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
const Keyboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  @media only screen and (orientation: portrait) {
    flex-wrap: nowrap;
  }
  @media only screen and (max-width: 370px) {
    flex-wrap: wrap;
  }
`;

const CommandLineRow = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;
const Key = styled.div`
  font-size: 14px;
  padding: 0.5rem;
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
  cursor: pointer;

  ${props =>
    props.colorvar === 'mint' &&
    props.cockpitCount >= props.maxCount &&
    css`
      filter: brightness(50%);
      cursor: default;
    `}

  ${props =>
    props.colorvar === 'mint' &&
    props.tempCount >= 4 &&
    css`
      filter: brightness(50%);
      cursor: default;
    `}

${props =>
    props.colorvar === 'mint' &&
    props.cpStatus > 1 &&
    css`
      background-color: var(--sky);
    `}

${props =>
    props.colorvar === 'sky' &&
    props.cpStatus > 1 &&
    css`
      filter: brightness(50%);
      cursor: default;
    `}

${props =>
    props.colorvar === 'sky' &&
    props.cockpitCount >= props.maxCount &&
    css`
      filter: brightness(50%);
      cursor: default;
    `}
    
${props =>
    props.colorvar === 'sky' &&
    props.tempCount >= 4 &&
    css`
      filter: brightness(50%);
      cursor: default;
    `}

${props =>
    props.colorvar === 'pink' &&
    props.cpStatus > 1 &&
    css`
      filter: brightness(50%);
      cursor: default;
    `}

  ${props =>
    props.colorvar === 'pink' &&
    props.cockpitCount > props.maxCount &&
    css`
      filter: brightness(50%);
      cursor: default;
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
  border-radius: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 0.5rem;
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
  animation: cmd 0.3s;

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
  border: 2px solid black;
  cursor: pointer;
  color: black;
  animation: cmd 0.3s;

  ${props =>
    props.tempCount <= 1 &&
    css`
      display: none;
    `}

  ${props =>
    props.cpStatus === 1 &&
    css`
      filter: brightness(30%);
      cursor: default;
    `}
`;

const CpCounter2 = styled.div`
  display: flex;
  border-radius: 50px;
  color: white;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0.5rem;

  ${props =>
    props.tempCount >= 4 &&
    css`
      color: hotpink;
      animation: blinker 1s linear infinite;
    `}

  ${props =>
    props.cpStatus === 1 &&
    css`
      display: none;
    `}
`;
const DelKey2 = styled.div`
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0.5rem;
  cursor: pointer;
  background-color: var(--neutral);
  border: 2px solid black;
  color: black;

  ${props =>
    props.cpStatus === 1 &&
    css`
      display: none;
    `}
`;
const DelKey1 = styled.div`
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0.5rem;
  cursor: pointer;
  color: black;
  border: 2px solid black;
  background-color: var(--neutral);
  animation: cmd 0.3s;

  ${props =>
    props.cpStatus > 1 &&
    css`
      display: none;
    `}

  ${props =>
    props.cockpitCount === 0 &&
    css`
      display: none;
    `}
`;
const CpCounter1 = styled.div`
  height: 30px;
  display: flex;
  border-radius: 50px;
  color: white;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0.5rem;

  ${props =>
    props.cockpitCount >= props.maxCount &&
    css`
      color: hotpink;
      animation: blinker 1s linear infinite;
    `}

  ${props =>
    props.cpStatus > 1 &&
    css`
      display: none;
    `}
`;
