import styled, { css } from 'styled-components';
import { useState } from 'react';
import { MyButton } from '../anybutton';
import { texthowto } from '../../utils/text-how-to';
import { Starry } from '../starry';

export function HowToPlay() {
  const [indexHowTo, setIndexHowTo] = useState(0);
  const lengthHowTo = texthowto.length;
  const mode = texthowto[indexHowTo].type;

  function nextHowTo() {
    if (indexHowTo <= lengthHowTo - 2) {
      setIndexHowTo(indexHowTo + 1);
      console.log(indexHowTo);
    }
  }

  function lastHowTo() {
    if (indexHowTo > 0) {
      setIndexHowTo(indexHowTo - 1);
    }
  }

  return (
    <TTFrame>
      <Starry />
      <TextField>
        <HeadLine>{texthowto[indexHowTo].headline}</HeadLine>
        <div>{texthowto[indexHowTo].text}</div>
        <BothButtons indexHowTo={indexHowTo}>
          <MyButton
            click={lastHowTo}
            text="back"
            color="puresky"
            className="back"
          />
          <MyButton
            click={nextHowTo}
            text="got it"
            color="puremint"
            className="forward"
          />
        </BothButtons>
      </TextField>
    </TTFrame>
  );
}

const TTFrame = styled.div`
  width: 100vw;
  height: 100vh;
  position:fixed;
  top:0;
  left:0;
  display: flex;
  justify-content: center;
  align-items:center;}
  background-image: linear-gradient(to right, #434343 0%, black 100%);
`;

const TextField = styled.div`
  border: 2px solid var(--puresky);
  border-radius: 50px;
  display: flex;
  padding: 50px;
  line-height: 30px;
  color: var(--puremint);
  width: 60%;
  flex-direction: column;
  align-items: center;
  gap: 5vw;
  @media and(orientation:portrait) {
    width: 100%;
  }
`;

const BothButtons = styled.div`
  display: flex;
  gap: 5vw;
  align-items: center;
`;

const HeadLine = styled.h2`
  color: var(--purepink);
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
`;
