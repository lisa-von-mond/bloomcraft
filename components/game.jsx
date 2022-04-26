import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Field } from './field';

export function Game({ levelData, id }) {
  const [newKey, setNewKey] = useState(1);
  const [life, setLife] = useState(5);
  const levels = 4;

  function reset() {
    setNewKey(newKey + 1);
  }

  return (
    <>
      <MyMain>
        <Field
          {...levelData}
          key={id + newKey}
          reset={reset}
          newKey={newKey}
          life={life}
          setLife={setLife}
          levels={levels}
        />
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
`;
