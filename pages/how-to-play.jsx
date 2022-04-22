import { HowToPlay } from '../components/how-to-play/how-to-play';
import { SimpleButton } from '../components/anybutton';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Starry } from '../components/starry';

export default function Instruction() {
  return (
    <>
      <Background>
        <Starry />
        <HowToPlay />
        <PlayButtonCntn>
          <Link href="/levels/levelone">
            <a>
              <SimpleButton text="play" color="light" />
            </a>
          </Link>
        </PlayButtonCntn>
      </Background>
    </>
  );
}

const PlayButtonCntn = styled.div`
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
