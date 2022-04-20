import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Field } from './field';
import { Starry } from './starry';

export function Game({ levelData, id }) {
  const [newKey, setNewKey] = useState(1);

  function reset() {
    setNewKey(newKey + 1);
  }

  return (
    <>
      <MyMain>
        <Starry />
        <Field {...levelData} key={id + newKey} reset={reset} newKey={newKey} />
      </MyMain>
    </>
  );
}

const MyMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
`;
