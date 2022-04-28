import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Starry } from '../starry';
import { MyButton } from '../anybutton';
import Link from 'next/link';

export function Outro() {
  return (
    <>
      <MyMain>
        <Starry />
        <Headline>Congrats, future space activist!</Headline>
        <Link href="/">
          <a>
            <MyButton text="back to start" color="puremint" />
          </a>
        </Link>
      </MyMain>
    </>
  );
}

const MyMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background: var(--darkbg);
`;

const Headline = styled.div`
  color: white;
  font-size: 3rem;
  :&hover  {
    color: blue;
  }
`;
