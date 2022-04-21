import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import { track, Beam1, Beam2, Beam3 } from '../utils/utility-functions';
import { Cockpit } from './cockpit';
import { InfoConsole } from './console';
import { Scape } from './scape';
import { GlobalCounter } from './counter';
import { GreenAlert } from './greenalert';
import { RedAlert } from './redalert';
import { OrangeAlert } from './orangealert';
import { InstrFrame } from './how-to-play/instruction-frame';
import { SimpleButton } from './anybutton';

export function Field({
  level,
  max,
  initialPosition,
  initialFocus,
  initialId,
  charge,
  goal,
  reset,
  thisLevel,
  nextLevel,
  life,
  oneLifeLess,
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
  const [hand, setHand] = useState(true); // layout (console and cockpit right or left side)
  const [instr, setInstr] = useState(false); // instruction visibility
  const [systemCrash, setSystemCrash] = useState(false);
  const movingArr = ['ZERO', ...commands.flat(3)];
  const length = movingArr.length;
  const maxCount = max - globalCount;

  function resolveSparks() {
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

  const cockpitCount = resolveSparks() + 1;

  function initFocus() {
    if (initialFocus !== false) {
      return 'Beam further to ' + initialFocus;
    } else {
      return 'As far out as possible';
    }
  }

  function up() {
    setGalaxy(hopUpNow(galaxy));
  }
  function down() {
    setGalaxy(hopDownNow(galaxy));
  }
  function right() {
    setGalaxy(turnFocusRightNow(galaxy));
  }
  function left() {
    setGalaxy(turnFocusLeftNow(galaxy));
  }

  // moving functions scope

  function hopUpInScope(object) {
    const Focus = object.children.find(element => element.focus === true);
    setThisPlanet(Focus.name);
    setThisId(Focus.id);
    if (chargeStatus === true) {
      if (Focus.goal === true) {
        setDestination(true);
      }
    } else {
      if (Focus.greens === true) {
        setChargeStatus(true);
      }
    }
    const NewSubScope = Focus.children.map(element =>
      element.flow === 1 ? { ...element, focus: true } : element
    );
    const nextFocus = NewSubScope.find(element => element.focus === true);
    if (nextFocus !== undefined) {
      setFocusNow('Beam further out to ' + nextFocus.name);
    } else {
      setFocusNow('As far out as possible');
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

  function turnFocusLeftInScope(objekt) {
    if (objekt.limit === true) {
      setSystemCrash(true);
    } else {
      const scope = objekt.children;
      const Focus = scope.find(element => element.focus === true);
      const nextFocusIndex = Focus.flow === scope.length ? 1 : Focus.flow + 1;
      const nextFocus = scope.find(element => element.flow === nextFocusIndex);
      setFocusNow('Beam further out to ' + nextFocus.name);
      const scopeA = scope.map(element =>
        element.focus === true ? { ...element, focus: false } : element
      );
      const scopeB = scopeA.map(element =>
        element.flow === nextFocusIndex ? { ...element, focus: true } : element
      );
      return { ...objekt, children: scopeB };
    }
  }

  function turnFocusRightInScope(objekt) {
    if (objekt.limit === true) {
      console.log('nothing to turn right here');
      setSystemCrash(true);
    } else {
      const scope = objekt.children;
      const Focus = scope.find(element => element.focus === true);
      const nextFocusIndex = Focus.flow === 1 ? scope.length : Focus.flow - 1;
      const nextFocus = scope.find(element => element.flow === nextFocusIndex);
      setFocusNow('Beam further out to ' + nextFocus.name);
      const scopeA = scope.map(element =>
        element.focus === true ? { ...element, focus: false } : element
      );
      const scopeB = scopeA.map(element =>
        element.flow === nextFocusIndex ? { ...element, focus: true } : element
      );
      return { ...objekt, children: scopeB };
    }
  }

  function hopDownInScope(object) {
    const Current = object.children.find(element => element.active === true);
    setThisPlanet(object.name);
    setThisId(Current.id);

    if (chargeStatus === true) {
      if (object.goal === true) {
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
      setFocusNow('Beam Further out to ' + Current.name);
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
      setFocusNow('Beam Further out to ' + Current.name);
      return newObject;
    }
  }

  // moving functions global

  function hopUpNow(y) {
    let Base = y[0];
    if (Base.active === true) {
      return Beam1(hopUpInScope, Base);
    } else {
      if (track(Base).limit === true) {
        console.log('not possible to hop further here');
        setSystemCrash(true);
        oneLifeLess();
        return y;
      } else {
        if (track(Base).active === true) {
          return Beam2(hopUpInScope, Base);
        } else {
          if (
            track(track(Base)).active === true &&
            track(track(Base)).limit !== true
          ) {
            return Beam3(hopUpInScope, Base);
          } else {
            console.log('not possible to hop further here');
            setSystemCrash(true);
            oneLifeLess();
            return y;
          }
        }
      }
    }
  }

  function turnFocusLeftNow(y) {
    let Base = y[0];
    if (Base.active === true) {
      return Beam1(turnFocusLeftInScope, Base);
    } else {
      if (track(Base).limit === true) {
        console.log('nothing to turn left here');
        setSystemCrash(true);
        oneLifeLess();
        return y;
      } else {
        if (track(Base).active === true) {
          return Beam2(turnFocusLeftInScope, Base);
        } else {
          if (
            track(track(Base)).active === true &&
            track(track(Base)).limit !== true
          ) {
            return Beam3(turnFocusLeftInScope, Base);
          } else {
            console.log('nothing to turn left here');
            setSystemCrash(true);
            oneLifeLess();
            return y;
          }
        }
      }
    }
  }

  function turnFocusRightNow(y) {
    let Base = y[0];
    if (Base.active === true) {
      return Beam1(turnFocusRightInScope, Base);
    } else {
      if (track(Base).limit === true) {
        console.log('nothing to turn right here');
        setSystemCrash(true);
        oneLifeLess();
        return y;
      } else {
        if (track(Base).active === true) {
          return Beam2(turnFocusRightInScope, Base);
        } else {
          if (
            track(track(Base)).active === true &&
            track(track(Base)).limit !== true
          ) {
            return Beam3(turnFocusRightInScope, Base);
          } else {
            console.log('nothing to turn right here');
            setSystemCrash(true);
            oneLifeLess();
            return y;
          }
        }
      }
    }
  }

  function hopDownNow(y) {
    let Base = y[0];
    if (Base.active === true) {
      console.log('nothing to go closer here');
      setSystemCrash(true);
      oneLifeLess();
      return y;
    } else {
      if (track(Base).active === true) {
        return Beam1(hopDownInScope, Base);
      } else {
        if (track(track(Base)).active === true) {
          return Beam2(hopDownInScope, Base);
        } else {
          return Beam3(hopDownInScope, Base);
        }
      }
    }
  }

  // cockpit functions

  function add(direction) {
    if (cpStatus === 1) {
      if (cockpitCount <= maxCount - 1) {
        setCommandLine([...commandLine, direction]);
        setCommands([...commands, direction]);
      }
    } else {
      if (tempArr.length <= 3) {
        setTempArr([...tempArr, direction]);
      }
    }
  }

  function addTwo() {
    if (cpStatus === 1 && cockpitCount <= maxCount - 1) {
      setTempArr([2]);
      setCpStatus(2);
    }
  }

  function addThree() {
    if (cpStatus === 1 && cockpitCount <= maxCount - 1) {
      setTempArr([3]);
      setCpStatus(3);
    }
  }

  function del1() {
    if (cpStatus === 1) {
      setCommandLine(commandLine.slice(0, -1));
      setCommands(commands.slice(0, -1));
    } else {
      console.log('not possible');
    }
  }

  function del2() {
    if (cpStatus !== 1) {
      setTempArr(tempArr.slice(0, -1));
      if (tempArr.length === 1) {
        setCpStatus(1);
      }
    } else {
      console.log('not possible');
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
    if (hereNow === 'left') {
      left();
    } else {
      if (hereNow === 'right') {
        right();
      } else {
        if (hereNow === 'out') {
          up();
        } else {
          if (hereNow === 'in') {
            down();
          }
        }
      }
    }
  }, [intCount]);

  const move = () => {
    if (cpStatus !== 1) {
      console.log('not possible');
    } else {
      if (cockpitCount > maxCount) {
        console.log('not possible');
      } else {
        const myInt = setInterval(() => {
          setIntCount(prevCount => prevCount + 1);
        }, 500);
        setMyIntId(myInt);
      }
    }
  };

  if (intCount === length) {
    if (myIntId) {
      clearInterval(myIntId);
      setMyIntId(0);
      setIntCount(0);
      setCommandLine([]);
      setGlobalCount(prevCount => prevCount + cockpitCount);
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
        <SCFrame>
          <Scape
            galaxy={galaxy}
            chargeStatus={chargeStatus}
            destination={destination}
            hand={hand}
          />
        </SCFrame>

        <CTRLFrame>
          <Cockpit
            move={move}
            add={add}
            addThree={addThree}
            addTwo={addTwo}
            del1={del1}
            del2={del2}
            set={set}
            cpStatus={cpStatus}
            commandLine={commandLine}
            tempArr={tempArr}
            cockpitCount={cockpitCount}
            maxCount={maxCount}
          />
          <CSFrame>
            <InfoConsole
              globalCount={globalCount}
              thisPlanet={thisPlanet}
              chargeStatus={chargeStatus}
              thisId={thisId}
              destination={destination}
              focusNow={focusNow}
              charge={charge}
              goal={goal}
            />
          </CSFrame>
        </CTRLFrame>
      </BGFrame>
      <NoteFrame hand={hand}>
        <SimpleButton
          click={changeHand}
          color="puremint"
          text="switch layout"
          fontsize="0.6"
        />
        <SimpleButton
          click={instrToggle}
          color="light"
          text="how to play"
          fontsize="0.6"
        />
      </NoteFrame>
      <GlobalCounter
        hand={hand}
        globalCount={globalCount}
        max={max}
        thisLevel={thisLevel}
        life={life}
      />
      <GreenAlert destination={destination} nextLevel={nextLevel} />
      <OrangeAlert reset={reset} systemCrash={systemCrash} />
      <RedAlert
        globalCount={globalCount}
        max={max}
        destination={destination}
        reset={reset}
        oneLifeLess={oneLifeLess}
      />
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
  padding: var(--gap);
  @media only screen and (orientation: landscape) {
    flex-direction: row;
    ${props =>
      props.hand === false &&
      css`
        flex-direction: row-reverse;
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
  padding: 2rem;

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
