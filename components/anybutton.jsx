import styled from 'styled-components';

export function MyButton({ text, color, click }) {
  return (
    <AnyButton onClick={click} color={color}>
      {text}
    </AnyButton>
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
