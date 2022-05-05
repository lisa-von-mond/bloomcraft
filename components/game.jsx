import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Field } from './field';
import { MobileAlert } from './mobile-warn';

export function Game({ levelData, id }) {
  const [newKey, setNewKey] = useState(1);

  const [life, setLife] = useState(3);
  const [seeMobileAlert, setSeeMobileAlert] = useState(true);

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

  function vanish() {
    setSeeMobileAlert(false);
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
        <MobileWarn visible={seeMobileAlert}>
          <MobileAlert vanish={vanish} />
        </MobileWarn>
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

const MobileWarn = styled.div`
  @media screen and (min-width: 500px) {
    display: none;
  }

  ${props =>
    props.visible === false &&
    css`
      display: none;
    `}
`;
