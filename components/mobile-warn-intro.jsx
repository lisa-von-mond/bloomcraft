import styled, { css } from 'styled-components';
import { MyButton } from './anybutton';

export function MobileAlertIntro() {
  return (
    <Black>
      <TextField>
        <HeadLine>HI MOBILE USER, WELCOME TO LUSH:3000!</HeadLine>
        <Text>
          This app is not optimized for mobile devices yet. For the moment, try
          playing on a tablet or computer. Mobile vesion will come soon.
        </Text>
      </TextField>
    </Black>
  );
}

const Black = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

const TextField = styled.div`
height: 90%;
width: 90%;
  border: 2px solid var(--puresky);
  box-shadow: 5px 5px 0 0 var(--puresky);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  flex-direction: column;
  color: var(--purepink);
  gap: 1rem;
  padding: 3rem;
  }
`;

const Text = styled.p`
  text-align: center;
  -webkit-hyphens: auto;
  font-size: 3vh;
  line-height: 4vh;
  color: var(--puremint);
`;

const HeadLine = styled.h2`
  color: var(--puresky);
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 2rem;
  text-align: center;
  color: white;
`;
