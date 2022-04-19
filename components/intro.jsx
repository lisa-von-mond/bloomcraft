import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Starry } from './starry';
import { MyButton } from './anybutton';
import Link from 'next/link';

export function Intro() {
  return (
    <>
      <MyMain>
        <Starry />
        <Headline>BLOOM3000</Headline>
        <Link href="/levels/levelone">
          <a>
            <MyButton text="level 1" color="puremint" />
          </a>
        </Link>
        <Link href="/levels/leveltwo">
          <a>
            <MyButton text="level 2" color="puremint" />
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
  background-image: linear-gradient(to right, #434343 0%, black 100%);
`;

const Headline = styled.div`
  color: white;
  font-size: 3rem;
  :&hover  {
    color: blue;
  }
`;
