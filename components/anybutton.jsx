import styled from 'styled-components';

export function MyButton({ text, color }) {
  return <AnyButton color={color}>{text}</AnyButton>;
}

const AnyButton = styled.div`
  padding: 0.5rem;
  border: 2px solid var(--${props => props.color});
  color: var(--${props => props.color});
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
`;
