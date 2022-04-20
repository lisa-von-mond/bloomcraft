import styled, { css } from 'styled-components';
import { MyButton } from './anybutton';

export function OrangeAlert({ systemCrash, fixCrash, reset }) {
  return (
    <Blur systemCrash={systemCrash}>
      <Window systemCrash={systemCrash}>
        system crash<br></br>impossible operation
        <MyButton text="back" color="dark" click={reset} />
      </Window>
    </Blur>
  );
}

const Window = styled.div`
  font-sitze: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--warn);
  height: auto;
  border-radius: 1rem;
  animation: popup 0.5s;

  ${props =>
    props.systemCrash === false &&
    css`
      display: none;
    `}
`;

const Blur = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.systemCrash === false &&
    css`
      display: none;
    `}
`;
