import styled, { css } from 'styled-components';
import { MyButton } from '../anybutton';
import Link from 'next/link';

export function DarkAlert({ totalFail, life }) {
  function getLivesBack() {
    setLife(5);
  }

  return (
    <Blur totalFail={totalFail}>
      <DarkPopUp>
        All lives gone
        <Link href={`/play-again`} passHref>
          <a>
            <MyButton text="ok" color="light" />
          </a>
        </Link>
      </DarkPopUp>
    </Blur>
  );
}

const DarkPopUp = styled.div`
  font-sitze: 5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--darkbg);
  color: var(--light);
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
    props.totalFail === false &&
    css`
      display: none;
    `}
`;
