import styled, { css } from 'styled-components';

export function MyButton({ text, color, click }) {
  return (
    <AnyButton onClick={click} color={color} text={text}>
      {text}
    </AnyButton>
  );
}

export function SimpleButton({ text, color, click, fontsize }) {
  return (
    <NotAButton onClick={click} color={color} fontsize={fontsize}>
      {text}
    </NotAButton>
  );
}

const AnyButton = styled.button`
  padding: 0.5rem;
  border: 2px solid var(--${props => props.color});
  color: var(--${props => props.color});
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  background: none;
  font-size: 1rem;
  font-family: inherit;
  -webkit-appearance: button;

  &: hover {
    animation: buttonwow 1s;
  }

  ${props =>
    props.text === null &&
    css`
      display: none;
    `}

  @media only screen and (max-width: 600px) {
    font-size: 0, 6rem;
  }
`;

const NotAButton = styled.button`
  padding: 0.5rem 0 0.3rem 0;
  border-bottom: 2px solid var(--${props => props.color});
  border-right: none;
  border-left: none;
  border-top: none;
  color: var(--${props => props.color});
  text-align: center;
  cursor: pointer;
  background: none;
  font-size: ${props => props.fontsize}rem;
  font-family: inherit;
  box-shadow: none;

  &: hover {
    animation: buttonwow 1s;
  } ;
`;
