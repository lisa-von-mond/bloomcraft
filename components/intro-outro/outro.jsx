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
        <TextLine>
          {' '}
          You finished all levels of lush:3000 and saved your universe from
          another climate crisis. See you out in space!
        </TextLine>
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
`;

const TextLine = styled.p`
  max-width: 70%;
  color: var(--puresky);
  font-size: 1rem;
  text-align: center;
`;
