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
      console.log(life);
      setLife(life + remCount);
    }
  }

  return (
    <Blur destination={destination}>
      <Window nextLevel={nextLevel} remCount={remCount}>
        Level completed
        <Link href={`/levels/${nextLevel}`} passHref>
          <a>
            <MyButton text="next level" color="dark" />
          </a>
        </Link>
      </Window>
      <WindowMoreLives nextLevel={nextLevel} remCount={remCount}>
        Level completed<br></br>* * * {remCount} lives extra * * *
        <Link href={`/levels/${nextLevel}`} passHref>
          <a>
            <MyButton click={moreLivesWow} text="ok cool" color="dark" />
          </a>
        </Link>
      </WindowMoreLives>
      <WindowFinal nextLevel={nextLevel} life={life}>
        Level completed
        <Link href={`/byebye`} passHref>
          <a>
            <MyButton text="yeah!" color="dark" />
          </a>
        </Link>
      </WindowFinal>
    </Blur>
  );
}

const Window = styled.div`
  font-sitze: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: var(--mint);
  height: auto;
  border-radius: 1rem;
  animation: popup 0.5s;
  align-items: center;
  align-content: center;
  text-align: center;

  ${props =>
    props.nextLevel === false &&
    css`
      display: none;
    `}

  ${props =>
    props.remCount > 0 &&
    css`
      display: none;
    `}
`;

const WindowMoreLives = styled.div`
  font-sitze: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: var(--lemon);
  height: auto;
  border-radius: 1rem;
  animation: popup 0.5s;
  align-items: center;
  align-content: center;
  text-align: center;

  ${props =>
    props.remCount === 0 &&
    css`
      display: none;
    `}

  ${props =>
    props.nextLevel === false &&
    css`
      display: none;
    `}
`;

const WindowFinal = styled.div`
  font-sitze: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: var(--mint);
  height: auto;
  border-radius: 1rem;
  animation: popup 0.5s;
  align-items: center;
  align-content: center;
  text-align: center;

  ${props =>
    props.destination === false &&
    css`
      display: none;
    `}

  ${props =>
    props.nextLevel !== false &&
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
