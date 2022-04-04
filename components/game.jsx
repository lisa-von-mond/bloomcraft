import styled, {css} from "styled-components";
import { Field } from "./field";

export function Game () {

  return (
      <>
        <MyMain>
       <Field/>
        </MyMain>
      </>
  )
}

const MyMain = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
background-image: linear-gradient(to right, #434343 0%, black 100%);
`