import styled, { css } from 'styled-components';
import { useState } from 'react';
import { MyButton } from '../anybutton';
import { textHowTo } from '../../utils/text-how-to';
import { IlluOne } from './illu-1';
import { IlluTwo } from './illu-2';
import { IlluThree } from './illu-3';
import { IlluFour } from './illu-4';
import { IlluFive } from './illu-5';

export function HowToPlay() {
  const [indexHowTo, setIndexHowTo] = useState(0);
  const lengthHowTo = textHowTo.length - 1;

  function nextHowTo() {
    if (indexHowTo < lengthHowTo) {
      setIndexHowTo(indexHowTo + 1);
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

        <Text>{textHowTo[indexHowTo].text}</Text>
        <Illu1 illu={textHowTo[indexHowTo].illu}>
          <IlluOne />
        </Illu1>
        <Illu2 illu={textHowTo[indexHowTo].illu}>
          <IlluTwo />
        </Illu2>
        <Illu4 illu={textHowTo[indexHowTo].illu}>
          <IlluFour />
        </Illu4>
        <Illu5 illu={textHowTo[indexHowTo].illu}>
          <IlluFive />
        </Illu5>

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
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

const TextField = styled.div`
  border: 2px solid var(--puresky);
  box-shadow: 5px 5px 0 0 var(--puresky);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: black;
  max-width: 60%;
  flex-direction: column;
  gap: 2vw;
  color: var(--puremint);
  font-size: 0.7 rem;
  line-height: 1.8rem;

  @media only screen and (max-width: 1000px) {
    font-size: 0.6rem;
    padding: 2rem;
    max-width: 100%;
  }
  @media only screen and (orientation: portrait) and (max-width: 600px) {
    font-size: 0.5rem;
    padding: 2rem;
    max-width: 100%;
  }
`;

const AllButtons = styled.div`
  display: flex;
  gap: 5vw;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  text-align: justify;
`;

const HeadLine = styled.h2`
  color: var(--purepink);
  font-size: 1.4rem;
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

const Illu1 = styled.div`
  ${props =>
    props.illu !== 'illu-1' &&
    css`
      display: none;
    `}
`;

const Illu2 = styled.div`
  ${props =>
    props.illu !== 'illu-2' &&
    css`
      display: none;
    `}
`;

const Illu3 = styled.div`
  ${props =>
    props.illu !== 'illu-3' &&
    css`
      display: none;
    `}
`;

const Illu4 = styled.div`
  ${props =>
    props.illu !== 'illu-4' &&
    css`
      display: none;
    `}
`;

const Illu5 = styled.div`
  ${props =>
    props.illu !== 'illu-5' &&
    css`
      display: none;
    `}
`;
