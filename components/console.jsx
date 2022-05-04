import styled, { css } from 'styled-components';

export function InfoConsole({
  thisPlanet,
  focusNow,
  thisId,
  chargeStatus,
  destination,
  charge,
  parentNow,
  goal,
  galaxyName,
}) {
  return (
    <>
      <ConsoleFrame>
        <GalaxyInfo>### reached {galaxyName}</GalaxyInfo>
        <PositionInfo>
          ### you are on {thisPlanet} {thisId}
        </PositionInfo>
        <PositionInfoBase parentNow={parentNow}>{parentNow}</PositionInfoBase>
        <PositionInfo focusNow={focusNow}>{focusNow}</PositionInfo>

        <ChargeInfo1 chargeStatus={chargeStatus}>CHARGE PICKED UP</ChargeInfo1>
        <ChargeInfo2 chargeStatus={chargeStatus}>
          ### pick up charge from {charge}
        </ChargeInfo2>
        <GoalInfo destination={destination}>### your goal is {goal}</GoalInfo>
        <DestInfo destination={destination}>MISSION COMPLETED</DestInfo>
      </ConsoleFrame>
    </>
  );
}

const ConsoleFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  @media only screen and (orientation: landscape) and (max-width: 1000px) {
    font-size: 0.9rem;
  }

  @media only screen and (orientation: landscape) and (max-width: 900px) {
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ChargeInfo1 = styled.p`
  color: var(--purepink);
  display: inherit;
  margin: 0.2rem;
  animation: type 2s;
  ${props =>
    props.chargeStatus === false &&
    css`
      display: none;
    `}
`;

const ChargeInfo2 = styled.p`
  color: var(--puremint);
  display: inherit;
  margin: 0.2rem;
  animation: type 2s;
  ${props =>
    props.chargeStatus === true &&
    css`
      display: none;
    `}
`;

const DestInfo = styled.p`
  color: var(--puremint);
  display: inherit;
  margin: 0.2rem;
  animation: type 2s;

  ${props =>
    props.destination === false &&
    css`
      display: none;
    `}
`;

const PositionInfoBase = styled.p`
  color: var(--puremint);
  display: inherit;
  margin: 0.2rem;
  animation: type 2s;
`;

const PositionInfo = styled.p`
  color: var(--puremint);
  display: inherit;
  margin: 0.2rem;
  animation: type 2s;
`;

const GoalInfo = styled.p`
  color: var(--puremint);
  display: inherit;
  margin: 0.2rem;
  animation: type 2s;
`;

const GalaxyInfo = styled.p`
  color: var(--puresky);
  display: inherit;
  margin: 0.2rem;
  animation: type 2s;
`;
