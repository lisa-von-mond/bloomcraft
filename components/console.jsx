import styled, { css } from 'styled-components';

export function InfoConsole({
  thisPlanet,
  focusNow,
  thisId,
  chargeStatus,
  destination,
  charge,
}) {
  return (
    <>
      <ConsoleFrame>
        <PositionInfo>
          You are on planet {thisPlanet} {thisId}
        </PositionInfo>
        <PositionInfo>{focusNow}</PositionInfo>
        <ChargeInfo1 chargeStatus={chargeStatus}>CHARGE PICKED UP</ChargeInfo1>
        <ChargeInfo2 chargeStatus={chargeStatus}>
          Charge has to be picked up from {charge}
        </ChargeInfo2>
        <DestInfo destination={destination}>MISSION COMPLETED</DestInfo>
      </ConsoleFrame>
    </>
  );
}

const ConsoleFrame = styled.div`
  border-radius: 1rem;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ChargeInfo1 = styled.p`
  margin: 5px;
  color: var(--puremint);
  display: inherit;
  ${props =>
    props.chargeStatus === false &&
    css`
      display: none;
    `}
`;

const ChargeInfo2 = styled.p`
  margin: 5px;
  color: white;
  display: inherit;
  ${props =>
    props.chargeStatus === true &&
    css`
      display: none;
    `}
`;

const DestInfo = styled.p`
  margin: 5px;
  color: var(--puremint);
  display: inherit;
  ${props =>
    props.destination === false &&
    css`
      display: none;
    `}
`;

const PositionInfo = styled.p`
  color: white;
  margin: 5px;
  display: inherit;
`;
