import styled, { css } from 'styled-components';
import { useState } from 'react';
import { MyButton } from '../anybutton';
import { textHowTo } from '../../utils/text-how-to';
import { IlluOne } from './illu-1';
import { IlluTwo } from './illu-2';
import { IlluFour } from './illu-4';
import { IlluFive } from './illu-5';

export function HowToPlay() {
  const [indexHowTo, setIndexHowTo] = useState(0);
  const lengthHowTo = textHowTo.length - 1;

  function next() {
    if (indexHowTo < lengthHowTo) {
      setIndexHowTo(indexHowTo + 1);
    }
  }

  function last() {
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
            <MyButton click={last} text="back" color="puresky" />
          </BackButtonCntn>
          <NextButtonCntn indexHowTo={indexHowTo} lengthHowTo={lengthHowTo}>
            <MyButton
              click={next}
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

  @media only screen and (max-width: 1000px) {
    padding: 3rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

const TextField = styled.div`
  border: 2px solid var(--puresky);
  box-shadow: 5px 5px 0 0 var(--puresky);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  flex-direction: column;
  color: var(--puremint);
  max-width: 60%;
  padding: 3rem;
  gap: 2rem;

  @media only screen and (max-width: 1000px) {
    max-width: 90%;
    padding: 2rem;
  }
`;

const AllButtons = styled.div`
  display: flex;
  gap: 5vw;
  align-items: center;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  text-align: justify;

  -webkit-hyphens: auto;

  font-size: 2vh;
  line-height: 3vh;

  @media only screen and (max-width: 600px) {
    font-size: 1.6vh;
  }
`;

const HeadLine = styled.h2`
  color: var(--puresky);
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  line-height: 2rem;
  text-align: center;
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
