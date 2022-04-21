import styled from 'styled-components';

export function MyButton({ text, color, click }) {
  return (
    <AnyButton onClick={click} color={color}>
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

const AnyButton = styled.div`
  padding: 0.5rem;
  border: 2px solid var(--${props => props.color});
  color: var(--${props => props.color});
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  background: none;
  font-size: 1rem;

  &: hover {
    animation: buttonwow 1s;
  } ;
`;

const NotAButton = styled.div`
  padding: 0.5rem 0 0.3rem 0;
  border-bottom: 2px solid var(--${props => props.color});
  color: var(--${props => props.color});
  text-align: center;
  cursor: pointer;
  background: none;
  font-size: ${props => props.fontsize}rem;

  &: hover {
    animation: buttonwow 1s;
  } ;
`;
