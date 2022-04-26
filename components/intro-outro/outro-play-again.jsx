import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Starry } from '../starry';
import { MyButton } from '../anybutton';
import Link from 'next/link';

export function OutroPlayAgain() {
  return (
    <>
      <MyMain>
        <Starry />
        <Headline>Sorry, you lost your trace</Headline>
        <Link href="/levels/levelone">
          <a>
            <MyButton text="try again" color="puremint" />
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
