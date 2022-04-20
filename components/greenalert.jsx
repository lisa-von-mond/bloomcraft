import styled, { css } from 'styled-components';
import { MyButton } from './anybutton';
import Link from 'next/link';

export function GreenAlert({ destination, nextlevel, reset }) {
  return (
    <Blur destination={destination}>
      <Window destination={destination}>
        Level completed
        <Link href={`/levels/${nextlevel}`}>
          <a>
            <MyButton click={reset} text="next level" color="dark" />
          </a>
        </Link>
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
  background: var(--mint);
  height: auto;
  border-radius: 1rem;

  ${props =>
    props.destination === false &&
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
