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
        {textAbout[indexAbout].text}
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
  font-size: 0.8rem;
`;

const TextField = styled.div`
  border: 2px solid var(--puresky);
  box-shadow: 5px 5px 0 0 var(--puresky);
  border-radius: 50px;
  display: flex;
  padding: 50px;
  line-height: 30px;
  color: var(--puremint);
  background: black;
  width: 60%;
  flex-direction: column;
  align-items: center;
  gap: 2.4vw;
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
  color: var(--purelemon);
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
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
