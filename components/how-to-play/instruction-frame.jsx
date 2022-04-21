import styled, { css } from 'styled-components';
import { HowToPlay } from './how-to-play';
import { MyButton } from '../anybutton';

export function InstrFrame({ instr, instrToggle }) {
  return (
    <>
      <Blur instr={instr}>
        <HowToPlay />
        <BackToGameButtonCntn>
          <MyButton text="back to game" color="light" click={instrToggle} />
        </BackToGameButtonCntn>
      </Blur>
    </>
  );
}

const Blur = styled.div`
  position: fixed;
  top: 0;
  left: o;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);

  ${props =>
    props.instr === false &&
    css`
      display: none;
    `}
`;

const BackToGameButtonCntn = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
`;
