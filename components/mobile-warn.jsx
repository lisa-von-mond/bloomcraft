import styled, { css } from 'styled-components';
import { MyButton } from './anybutton';

export function MobileAlert({ vanish }) {
  return (
    <Black>
      <TextField>
        <HeadLine>HI MOBILE USER</HeadLine>
        <Text>
          This app is not optimized for mobile devices yet. To have more fon,
          try playing on a tablet or computer
        </Text>
        <AllButtons>
          <ButtonCntn>
            <MyButton click={vanish} text="alright" color="puresky" />
          </ButtonCntn>
        </AllButtons>
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
  border: 2px solid var(--purelemon);
  box-shadow: 5px 5px 0 0 var(--purelemon);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  flex-direction: column;
  color: var(--purepink);
  gap: 2rem;
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
  line-height: 2rem;
  text-align: center;
`;

const ButtonCntn = styled.div`
  ${props =>
    props.indexAbout === 0 &&
    css`
      display: none;
    `}
`;
