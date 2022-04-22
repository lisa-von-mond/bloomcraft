import styled, { css } from 'styled-components';
import { MyButton } from './anybutton';

export function RedAlert({ globalCount, max, reset, oneLifeLess }) {
  function levelFail() {
    reset();
    oneLifeLess();
  }

  return (
    <Blur globalCount={globalCount} max={max}>
      <Window>
        Mission failed
        <MyButton click={levelFail} text="try again" color="dark" />
      </Window>
    </Blur>
  );
}

const Window = styled.div`
  font-sitze: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: var(--pink);
  height: auto;
  border-radius: 1rem;
  animation: popup 0.5s;
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
    props.globalCount < props.max &&
    css`
      display: none;
    `}

  ${props =>
    props.destination === false &&
    css`
      display: none;
    `}
`;
