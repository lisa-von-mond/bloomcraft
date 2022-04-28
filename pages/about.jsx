import { SimpleButton } from '../components/anybutton';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Starry } from '../components/starry';
import { AboutThisGame } from '../components/how-to-play/about-this-game';

export default function About() {
  return (
    <>
      <Background>
        <Starry />
        <AboutThisGame />
        <BackButtonCntn>
          <Link href="/">
            <a>
              <SimpleButton text="back" color="light" />
            </a>
          </Link>
        </BackButtonCntn>
      </Background>
    </>
  );
}

const BackButtonCntn = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
`;

const Background = styled.div`
  background: var(--darkbg);
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;
