import styled, {css} from "styled-components";
import {max} from "../levels/testlevel";

export function GlobalCounter({hand, globalCount}){

return(<CounterFix hand={hand}>
    <Counter max={max} count={globalCount}>{globalCount} / {max}</Counter>
    </CounterFix>)}

const CounterFix = styled.div`
position:fixed;
top:30px;
height:auto;
display:flex;
flex-direction:column;
justify-content:flex-end;
color:white;
font-size: 16px;

${(props) => props.hand === true &&
  css`
  left:5vw;`}
  
${(props) => props.hand === false &&
  css`
  right:5vw;`}
`

const Counter = styled.p`
padding:0;
margin:0;
color: white;
font-size:20px;

${(props) => props.count >= props.max &&
  css`
  animation: blinker 1s linear infinite;
  @keyframes blinker { 50% {opacity: 0;}}
  color:yellow;`}
`




