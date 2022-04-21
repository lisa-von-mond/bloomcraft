import styled, { css } from 'styled-components';
import { useState } from 'react';
import { MyButton } from '../anybutton';
import { textHowTo } from '../../utils/text-how-to';

export function HowToPlay() {
  const [indexHowTo, setIndexHowTo] = useState(0);
  const lengthHowTo = textHowTo.length - 1;

  function nextHowTo() {
    if (indexHowTo < lengthHowTo) {
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
      <TextField>
        <HeadLine>{textHowTo[indexHowTo].headline}</HeadLine>
        <div>{textHowTo[indexHowTo].text}</div>
        <AllButtons>
          <BackButtonCntn indexHowTo={indexHowTo}>
            <MyButton click={lastHowTo} text="back" color="puresky" />
          </BackButtonCntn>
          <NextButtonCntn indexHowTo={indexHowTo} lengthHowTo={lengthHowTo}>
            <MyButton
              click={nextHowTo}
              text={textHowTo[indexHowTo].buttontext}
              color="puremint"
            />
          </NextButtonCntn>
        </AllButtons>
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
`;

const TextField = styled.div`
  border: 2px solid var(--puresky);
  box-shadow: 5px 5px 0 0 var(--puresky);
  border-radius: 50px;
  display: flex;
  padding: 50px;
  line-height: 30px;
  color: var(--puremint);
  width: 60%;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
  @media and(orientation:portrait) {
    width: 100%;
  }
`;

const AllButtons = styled.div`
  display: flex;
  gap: 5vw;
  align-items: center;
`;

const HeadLine = styled.h2`
  color: var(--purepink);
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

const BackButtonCntn = styled.div`
  ${props =>
    props.indexHowTo === 0 &&
    css`
      display: none;
    `}
`;

const NextButtonCntn = styled.div`
  ${props =>
    props.indexHowTo >= props.lengthHowTo &&
    css`
      display: none;
    `}
`;
