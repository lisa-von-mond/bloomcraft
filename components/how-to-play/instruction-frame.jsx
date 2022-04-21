import styled, { css } from 'styled-components';
import { HowToPlay } from './how-to-play';
import { MyButton } from '../anybutton';

export function InstrFrame({ instr, instrToggle }) {
  return (
    <>
      <HowToPlayFrame instr={instr}>
        <Blur></Blur>
        <HowToPlay />
        <BackToGameButtonCntn>
          <MyButton text="back to game" color="light" click={instrToggle} />
        </BackToGameButtonCntn>
      </HowToPlayFrame>
    </>
  );
}

const HowToPlayFrame = styled.div`
  position: fixed;
  top: 0;
  left: o;
  width: 100vw;
  height: 100vh;
  color: white;

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

const Blur = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
