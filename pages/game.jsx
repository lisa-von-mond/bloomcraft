import styled, {css} from "styled-components";
import { Field } from "../components/field";

export function Game () {

  return (
      <>
        <MyMain>
        <Center>
        <Field/>
        </Center>
        </MyMain>
      </>
  )
}

// GALAXY ELEMENT STYLE

const Center = styled.div`
height:500px;
width:500px;
position:relative;
display:flex;
justify-content:center;
align-items:center;
`

const MyMain = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
background-image: linear-gradient(to right, #434343 0%, black 100%);
`