import styled, { css } from 'styled-components';
import { useState } from 'react';
import { MyButton } from '../anybutton';
import { textAbout } from '../../utils/text-about';

export function AboutThisGame() {
  const [indexAbout, setIndexAbout] = useState(0);
  const lengthAbout = textAbout.length - 1;

  function nextAbout() {
    if (indexAbout < lengthAbout) {
      setIndexAbout(indexAbout + 1);
    }
  }

  function lastAbout() {
    if (indexAbout > 0) {
      setIndexAbout(indexAbout - 1);
    }
  }

  return (
    <TTFrame>
      <TextField>
        <HeadLine>{textAbout[indexAbout].headline}</HeadLine>
        <Text>{textAbout[indexAbout].text}</Text>
        <AllButtons>
          <BackButtonCntn indexAbout={indexAbout}>
            <MyButton click={lastAbout} text="back" color="puresky" />
          </BackButtonCntn>
          <LinkButtonCntn indexAbout={indexAbout} lengthAbout={lengthAbout}>
            <a href={`${textAbout[indexAbout].url}`} target="blank">
              <MyButton
                text={textAbout[indexAbout].linktext}
                color="purelemon"
              />
            </a>
          </LinkButtonCntn>
          <NextButtonCntn indexAbout={indexAbout} lengthAbout={lengthAbout}>
            <MyButton
              click={nextAbout}
              text={textAbout[indexAbout].buttontext}
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

const AllButtons = styled.div`
  display: flex;
  gap: 5vw;
  align-items: center;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
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
    props.indexAbout === 0 &&
    css`
      display: none;
    `}
`;

const NextButtonCntn = styled.div`
  ${props =>
    props.indexAbout >= props.lengthAbout &&
    css`
      display: none;
    `}
`;

const LinkButtonCntn = styled.div``;
