import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Field } from './field';
import { Starry } from './starry';

export function Game({ levelData, id }) {
  const [newKey, setNewKey] = useState(1);
  const [life, setLife] = useState(8);

  function oneLifeLess() {
    setLife(life - 1);
  }

  function reset() {
    setNewKey(newKey + 1);
  }

  return (
    <>
      <MyMain>
        <Starry />
        <Field
          {...levelData}
          key={id + newKey}
          reset={reset}
          newKey={newKey}
          life={life}
          oneLifeLess={oneLifeLess}
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
  background: var(--darkbg);
`;
