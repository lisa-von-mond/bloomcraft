import styled, { css } from 'styled-components';
import { MyButton } from '../anybutton';
import Link from 'next/link';

export function RedAlert({
  fail,
  setFail,
  reset,
  oneLifeLess,
  life,
  setTotalFail,
}) {
  function levelFailOk() {
    if (life > 1) {
      reset();
      oneLifeLess();
      setFail(false);
    } else {
      setFail(false);
      setTotalFail(true);
    }
  }

  return (
    <Blur fail={fail}>
      <RedPopUp life={life}>
        Mission failed
        <MyButton click={levelFailOk} text="try again" color="dark" />
      </RedPopUp>
    </Blur>
  );
}

const RedPopUp = styled.div`
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
    props.fail === false &&
    css`
      display: none;
    `}
`;
