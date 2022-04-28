import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Field } from './field';

export function Game({ levelData, id }) {
  const [newKey, setNewKey] = useState(1);

  const [life, setLife] = useState(3);

  useEffect(() => {
    if (sessionStorage.getItem('life')) {
      setLife(parseInt(sessionStorage.getItem('life')));
    } else {
      sessionStorage.setItem('life', life.toString());
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('life', life.toString());
  }, [life]);

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
