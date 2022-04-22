import styled, { css } from 'styled-components';

export function GreenAlertCharge({ chargeStatus }) {
  return <Window charge={chargeStatus}>Charge picked up</Window>;
}

const Window = styled.div`
  font-sitze: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid var(--puremint);
  color: var(--puremint);
  height: auto;
  border-radius: 1rem;
  animation: popupwow 0.5s;
  z-index: 100;

  ${props =>
    props.charge === false &&
    css`
      display: none;
    `}
`;
