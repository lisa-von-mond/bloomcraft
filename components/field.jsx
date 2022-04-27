import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import { track, Beam1, Beam2, Beam3 } from '../utils/utility-functions';
import { Cockpit } from './cockpit';
import { InfoConsole } from './console';
import { Scape } from './scape';
import { GlobalCounter } from './counter';
import { GreenAlert } from './alerts/greenalert';
import { RedAlert } from './alerts/redalert';
import { OrangeAlert } from './alerts/orangealert';
import { DarkAlert } from './alerts/darkalert';
import { InstrFrame } from './how-to-play/instruction-frame';
import { SimpleButton } from './anybutton';
import { Starry } from './starry';

export function Field({
  level,
  max,
  initialPosition,
  initialFocus,
  initialId,
  initialParent,
  charge,
  goal,
  reset,
  thisLevel,
  nextLevel,
  life,
  setLife,
  galaxyName,
}) {
  const [galaxy, setGalaxy] = useState(level); // general layout
  const [chargeStatus, setChargeStatus] = useState(false); // is true when seeds picked up
  const [destination, setDestination] = useState(false); // is true when destination is reached
  const [globalCount, setGlobalCount] = useState(0); // counts glabal amount of movings
  const [intCount, setIntCount] = useState(0); // counts interval and triggers use effect
  const [myIntId, setMyIntId] = useState(0);
  const [commandLine, setCommandLine] = useState([]); // visible Array of commands in line (for cockpit mapping)
  const [commands, setCommands] = useState([]); // invisible Array of commands in line (for moveNow function)
  const [tempArr, setTempArr] = useState([]); // amount of commands in cockpit console (blue)
  const [cpStatus, setCpStatus] = useState(1); // factor for command line (1, 2 or 3)
  const [thisPlanet, setThisPlanet] = useState(initialPosition); // name of current planet
  const [thisId, setThisId] = useState(initialId); // id of current planet
  const [focusNow, setFocusNow] = useState(initFocus); // current focus position
  const [parentNow, setParentNow] = useState(initParent); // current focus position
  const [hand, setHand] = useState(true); // layout (console and cockpit right or left side)
  const [instr, setInstr] = useState(false); // instruction visibility
  const [systemCrash, setSystemCrash] = useState(false);
  const [fail, setFail] = useState(false);
  const [totalFail, setTotalFail] = useState(false);
  const movingArr = ['ZERO', ...commands.flat(3)];
  const length = movingArr.length;
  const remCount = max - globalCount;

  function oneLifeLess() {
    setLife(life - 1);
  }

  function resolveDashes() {
    if (commandLine.length > 0) {
      const resolved = commandLine.map(element =>
        typeof element === 'string' ? 1 : element.length - 1
      );
      const reducer = (accumulator, curr) => accumulator + curr;
      return resolved.reduce(reducer);
    } else {
      return 0;
    }
  }

  const cockpitCount = resolveDashes() + 1;

  function initFocus() {
    if (initialFocus !== false) {
      return '### beam out to ' + initialFocus;
    } else {
      return '! As far out as possible';
    }
  }

  function initParent() {
    if (initialParent !== false) {
      return '### beam in to ' + initialParent;
    } else {
      return '❤ welcome to base';
    }
  }

  function oneOut() {
    setGalaxy(hopOutNow(galaxy));
  }
  function oneIn() {
    setGalaxy(hopInNow(galaxy));
  }
  function oneTurn() {
    setGalaxy(turnFocusNow(galaxy));
  }

  // moving functions scope

  function hopOutScope(object) {
    const Focus = object.children.find(element => element.focus === true);
    setThisPlanet(Focus.name);
    setThisId(focus.id);

    setParentNow('### beam in to ' + object.name);
    if (chargeStatus === true) {
      if (Focus.name === goal) {
        setDestination(true);
      }
    } else {
      if (Focus.name === charge) {
        setChargeStatus(true);
      }
    }
    const NewSubScope = Focus.children.map((element, index) =>
      index === 0 ? { ...element, focus: true } : element
    );
    const nextFocus = NewSubScope.find(element => element.focus === true);
    if (nextFocus !== undefined) {
      setFocusNow('### beam out to ' + nextFocus.name);
    } else {
      setFocusNow('! as far out as possible');
    }
    const newScope = object.children.map(element =>
      element.focus === true
        ? {
            ...element,
            focus: false,
            active: true,
            tracked: true,
            children: NewSubScope,
          }
        : element
    );
    const newObject = {
      ...object,
      children: newScope,
      active: false,
      seeds: false,
    };
    return newObject;
  }

  function turnFocusScope(objekt) {
    if (objekt.limit === true) {
      setSystemCrash(true);
    } else {
      const scope = objekt.children;
      const FocusIndex = scope.indexOf(
        scope.find(element => element.focus === true)
      );
      console.log(FocusIndex);
      const nextFocusIndex =
        FocusIndex === scope.length - 1 ? 0 : FocusIndex + 1;
      const nextFocus = scope[nextFocusIndex];
      setFocusNow('### beam out to ' + nextFocus.name);
      const scopeA = scope.map(element =>
        element.focus === true ? { ...element, focus: false } : element
      );
      const scopeB = scopeA.map((element, index) =>
        index === nextFocusIndex ? { ...element, focus: true } : element
      );
      return { ...objekt, children: scopeB };
    }
  }

  function hopInScope(object) {
    const Current = object.children.find(element => element.active === true);
    setThisPlanet(object.name);
    setThisId(object.id);
    if (object.id === '0') {
      setParentNow('❤ welcome to base');
    } else {
      setParentNow('### beam in to ' + object.parent);
    }

    if (chargeStatus === true) {
      if (object.name === goal) {
        setDestination(true);
      }
    } else {
      if (object.greens === true) {
        setChargeStatus(true);
      }
    }
    if (Current.limit === true) {
      const newScope = object.children.map(element =>
        element === Current
          ? { ...element, focus: true, active: false, tracked: false }
          : element
      );
      const newObject = { ...object, children: newScope, active: true };
      setFocusNow('### beam out to ' + Current.name);
      return newObject;
    } else {
      const NewSubScope = Current.children.map(element => ({
        ...element,
        focus: false,
      }));
      const newScope = object.children.map(element =>
        element === Current
          ? {
              ...element,
              focus: true,
              active: false,
              tracked: false,
              children: NewSubScope,
            }
          : element
      );
      const newObject = { ...object, children: newScope, active: true };
      setFocusNow('### beam out to ' + Current.name);
      return newObject;
    }
  }

  // moving functions global

  function hopOutNow(y) {
    let Base = y[0];
    if (Base.active === true) {
      return Beam1(hopOutScope, Base);
    } else {
      if (track(Base).limit === true) {
        setSystemCrash(true);
        return y;
      } else {
        if (track(Base).active === true) {
          return Beam2(hopOutScope, Base);
        } else {
          if (
            track(track(Base)).active === true &&
            track(track(Base)).limit !== true
          ) {
            return Beam3(hopOutScope, Base);
          } else {
            setSystemCrash(true);
            return y;
          }
        }
      }
    }
  }

  function turnFocusNow(y) {
    let Base = y[0];
    if (Base.active === true) {
      return Beam1(turnFocusScope, Base);
    } else {
      if (track(Base).limit === true) {
        setSystemCrash(true);
        return y;
      } else {
        if (track(Base).active === true) {
          return Beam2(turnFocusScope, Base);
        } else {
          if (
            track(track(Base)).active === true &&
            track(track(Base)).limit !== true
          ) {
            return Beam3(turnFocusScope, Base);
          } else {
            setSystemCrash(true);
            return y;
          }
        }
      }
    }
  }

  function hopInNow(y) {
    let Base = y[0];
    if (Base.active === true) {
      setSystemCrash(true);
      return y;
    } else {
      if (track(Base).active === true) {
        return Beam1(hopInScope, Base);
      } else {
        if (track(track(Base)).active === true) {
          return Beam2(hopInScope, Base);
        } else {
          return Beam3(hopInScope, Base);
        }
      }
    }
  }

  // cockpit functions

  function add(direction) {
    if (cpStatus === 1) {
      if (cockpitCount < remCount) {
        setCommandLine([...commandLine, direction]);
        setCommands([...commands, direction]);
      }
    } else {
      if (tempArr.length <= 4) {
        setTempArr([...tempArr, direction]);
      }
    }
  }

  function addNumber(number) {
    if (cpStatus === 1 && cockpitCount < remCount) {
      setTempArr([number]);
      setCpStatus(number);
    }
  }

  function del() {
    if (cpStatus === 1) {
      setCommandLine(commandLine.slice(0, -1));
      setCommands(commands.slice(0, -1));
    } else {
      setTempArr(tempArr.slice(0, -1));
      if (tempArr.length === 1) {
        setCpStatus(1);
      }
    }
  }

  function set() {
    if (tempArr.length > 1) {
      setCommandLine([...commandLine, tempArr]);
      setTempArr([]);
      setCpStatus(1);
      setCommands([...commands, resolve(tempArr)]);
    } else {
      console.log('not possible');
    }
  }

  function resolve(array) {
    const moves = array.slice(1);
    if (cpStatus === 2) {
      const newArray2 = [...moves, ...moves];
      return newArray2.flat(3);
    } else {
      const newArray3 = [...moves, ...moves, ...moves];
      return newArray3.flat(3);
    }
  }

  useEffect(() => {
    const hereNow = movingArr[intCount];
    if (hereNow === 'turn') {
      oneTurn();
    } else {
      if (hereNow === 'out') {
        oneOut();
      } else {
        if (hereNow === 'in') {
          oneIn();
        }
      }
    }
  }, [intCount]);

  const move = () => {
    if (cpStatus !== 1) {
      null;
    } else {
      if (cockpitCount > remCount) {
        null;
      } else {
        const myInt = setInterval(() => {
          setIntCount(prevCount => prevCount + 1);
        }, 500);
        setMyIntId(myInt);
      }
    }
  };

  if (intCount === length || systemCrash === true) {
    if (myIntId) {
      clearInterval(myIntId);
      setMyIntId(0);
      setIntCount(0);
      setCommandLine([]);
      setGlobalCount(prev => prev + cockpitCount);
      if (
        systemCrash === false &&
        cockpitCount > remCount - 2 &&
        destination === false
      ) {
        setFail(true);
      }
      setCommands([]);
    }
  }

  function changeHand() {
    setHand(!hand);
  }

  function instrToggle() {
    setInstr(!instr);
  }

  return (
    <>
      <BGFrame hand={hand}>
        <Starry />
        <SCFrame>
          <Scape
            galaxy={galaxy}
            chargeStatus={chargeStatus}
            destination={destination}
            hand={hand}
            charge={charge}
            goal={goal}
          />
        </SCFrame>

        <CTRLFrame>
          <Cockpit
            move={move}
            addNumber={addNumber}
            add={add}
            del={del}
            set={set}
            cpStatus={cpStatus}
            commandLine={commandLine}
            tempArr={tempArr}
            cockpitCount={cockpitCount}
            remCount={remCount}
            thisLevel={thisLevel}
          />
          <CSFrame>
            <InfoConsole
              globalCount={globalCount}
              thisPlanet={thisPlanet}
              chargeStatus={chargeStatus}
              thisId={thisId}
              destination={destination}
              focusNow={focusNow}
              parentNow={parentNow}
              charge={charge}
              goal={goal}
              galaxyName={galaxyName}
            />
          </CSFrame>
        </CTRLFrame>
      </BGFrame>
      <NoteFrame hand={hand}>
        <SimpleButton
          click={changeHand}
          color="layout"
          text="switch layout"
          fontsize="0.6"
        />
        <SimpleButton
          click={instrToggle}
          color="layout"
          text="how to play"
          fontsize="0.6"
        />
      </NoteFrame>
      <GlobalCounter hand={hand} remCount={remCount} life={life} />
      <GreenAlert
        destination={destination}
        nextLevel={nextLevel}
        remCount={remCount}
        setLife={setLife}
        life={life}
      />
      <OrangeAlert
        reset={reset}
        systemCrash={systemCrash}
        setSystemCrash={setSystemCrash}
        oneLifeLess={oneLifeLess}
        setTotalFail={setTotalFail}
        life={life}
      />
      <RedAlert
        globalCount={globalCount}
        max={max}
        destination={destination}
        reset={reset}
        oneLifeLess={oneLifeLess}
        fail={fail}
        life={life}
        setFail={setFail}
        remCount={remCount}
        setTotalFail={setTotalFail}
      />
      <DarkAlert totalFail={totalFail} life={life} />
      <InstrFrame instr={instr} instrToggle={instrToggle} />
    </>
  );
}

const BGFrame = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: canter;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
  background: var(--darkbg);
  @media only screen and (orientation: landscape) {
    flex-direction: row;
    ${props =>
      props.hand === false &&
      css`
        flex-direction: row-reverse;
        background: var(--darkbgrev);
      `}
  }

  @media only screen and (orientation: portrait) {
    flex-direction: column;
  }
`;

const CTRLFrame = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 1rem;

  @media only screen and (orientation: landscape) {
    width: 30%;
    height: 100%;
  }

  @media only screen and (orientation: portrait) {
    heigth: 30%;
    width: 100%;
  }
`;

const SCFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (orientation: portrait) {
    heigth: 70%;
    width: 100%;
  }

  @media only screen and (orientation: landscape) {
    width: 70%;
    height: 100%;
  }
`;

const CSFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (orientation: portrait) {
    display: none;
  }
  @media only screen and (max-height: 600px) {
    display: none;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const NoteFrame = styled.div`
  position: fixed;
  bottom: 2rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    display: none;
  }

  ${props =>
    props.hand === true &&
    css`
      left: 2rem;
    `}

  ${props =>
    props.hand === false &&
    css`
      right: 2rem;
    `}
`;
