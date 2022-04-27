import styled, { css } from 'styled-components';
import { MyButton } from '../anybutton';
import Link from 'next/link';

export function GreenAlert({
  destination,
  nextLevel,
  life,
  setLife,
  remCount,
}) {
  function moreLivesWow() {
    {
      setLife(life + remCount);
    }
  }

  return (
    <Blur destination={destination}>
      <GreenPopUp nextLevel={nextLevel} remCount={remCount}>
        Level completed<br></br>
        <LifeInfo nextLevel={nextLevel} remCount={remCount}>
          got {remCount} more {remCount > 1 ? 'lives' : 'life'}
        </LifeInfo>
        <Link
          href={nextLevel !== false ? `/levels/${nextLevel}` : '/byebye'}
          passHref
        >
          <a>
            <MyButton click={moreLivesWow} text="next level" color="dark" />
          </a>
        </Link>
      </GreenPopUp>
    </Blur>
  );
}

const GreenPopUp = styled.div`
  font-sitze: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: var(--mint);
  height: auto;
  border-radius: 1rem;
  animation: popup 1s;
  align-items: center;
  align-content: center;
  text-align: center;

  ${props =>
    props.remCount > 0 &&
    css`
      background: var(--lemon);
    `}

  ${props =>
    props.nextLevel === false &&
    css`
      display: none;
    `}
`;

const LifeInfo = styled.div`
  ${props =>
    props.nextLevel === false &&
    css`
      display: none;
    `}

  ${props =>
    props.remCount === 0 &&
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
    props.destination === false &&
    css`
      display: none;
    `}
`;
