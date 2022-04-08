import styled, {css} from "styled-components";
import { useState } from "react";
import {max} from "../levels/testlevel2"; // import here

export function Cockpit({hand, addUp, addDown, addLeft, addRight, addTwo, cpStatus, addThree, set, del, commandLine, tempArr, move, cockpitCount}){

const tempCount = tempArr.length
const maxCount = max

return(
<CockpitFrame hand={hand}>
<Keyboard>
<Key onClick={addUp}>far</Key>
<Key onClick={addDown}>close</Key>
<Key onClick={addLeft}>left</Key>
<Key onClick={addRight}>right</Key>
</Keyboard>
<Keyboard>
<NumberKey onClick={addTwo} cpStatus={cpStatus}>2</NumberKey>
<NumberKey onClick={addThree} cpStatus={cpStatus}>3</NumberKey>
</Keyboard>
<CommandLine1 cpStatus={cpStatus}>
<CommandLineInner>
{tempArr.map((element, index)=>(<Command1 key={index} content={element}>{element}</Command1>))}
</CommandLineInner>
<LittleKeyContainer>
<CpCounter1 cpStatus={cpStatus} tempCount={tempCount}>{tempCount}</CpCounter1>
<SetKey tempCount={tempCount} cpStatus={cpStatus} onClick={set}>set</SetKey>
</LittleKeyContainer>
</CommandLine1>
<CommandLine2 cpStatus={cpStatus}>
<CommandLineInner>
{commandLine.map((element, index)=>(<Command2 key={index} cpStatus={cpStatus}>{element}</Command2>))}
</CommandLineInner>
<LittleKeyContainer>
<CpCounter2 cpStatus={cpStatus} maxCount={maxCount} cockpitCount={cockpitCount}>{cockpitCount}</CpCounter2>
<DelKey cpStatus={cpStatus} onClick={del}>delete</DelKey>
<GoKey cpStatus={cpStatus} onClick={move}>GO</GoKey>
</LittleKeyContainer>
</CommandLine2>
</CockpitFrame>
)}

// generql styled components

const CockpitFrame = styled.div `
height:auto;
width:250px;
border-radius:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
gap:10px;
position:fixed;
top:30px;

${(props) => props.hand === true &&
    css`
    right:5vw;`}
    
${(props) => props.hand === false &&
    css`
    left:5vw;`}
`
//

const CommandLineInner = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
align-items:flex-start;
align-content:flex-start;
gap:10px;
`
//

const LittleKeyContainer = styled.div`
display:flex;
justify-content: flex-end;
align-items:flex-end;
height:50px;
gap:10px;
`
//

const GoKey = styled.div`
height:30px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:10px;
background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
cursor:pointer;
color:black;

${(props) => props.cpStatus === 2 &&
  css`
filter:brightness(50%);
cursor:default;`}

${(props) => props.cpStatus === 3 &&
  css`
filter:brightness(50%);
cursor:default;`}
`
// keyboard

const Keyboard = styled.div `
height:auto;
width:250px;
display:flex;
flex-wrap:wrap;
align-items: flex-start;
justify-content:flex-start;
gap:20px;
padding:10px;
`
//

const Key = styled.div`
height:30px;
width:50px;
display:flex;
color:black;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:10px;
background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
cursor:pointer;
`
//

const NumberKey = styled.div`
height:30px;
width:50px;
display:flex;
color:black;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:10px;
background: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);

${(props) => props.cpStatus === 1 &&
    css`
    cursor:pointer;`}

${(props) => props.cpStatus === 2 &&
    css`
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;`}

${(props) => props.cpStatus === 3 &&
    css`
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;`}
`
// blue command line 

const CommandLine1 = styled.div `
height:auto;
width:250px;
min-height:100px;
border-radius:20px;
display:flex;
align-items:space-between;
justify-content:space-between;
flex-direction:column;
gap:10px;
padding:10px;
background-color:black;
box-shadow: 0px 0px 10px skyblue;

${(props) => props.cpStatus === 2 &&
    css`
border: 2px solid skyblue;`}

${(props) => props.cpStatus === 3 &&
  css`
border: 2px solid skyblue;`}`

//

const Command1 = styled.div`
height:30px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:10px;
color:skyblue;
border: 2px solid skyblue;

animation: cmd 0.3s;

@keyframes cmd {
    0% { opacity:0;
      transform:scale(1);}
    80% {transform:scale(1.1);}
    100% {opacity:1;
      transform:scale(1);}}

${(props) => props.content === 2 &&
    css`
    background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
    color:black;
    `}

${(props) => props.content === 3 &&
    css`
    background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
    color:black;
     `}
`
//

const SetKey = styled.div`
height:30px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:10px;
background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
cursor:pointer;
color:black;

${(props) => props.tempCount <= 1 &&
  css`
filter:brightness(30%);
cursor:default;`}

${(props) => props.cpStatus === 1 &&
  css`
filter:brightness(30%);
cursor:default;`}`

//

const CpCounter1 = styled.div`
height:30px;
display:flex;
border-radius:50px;
color:white;
align-items:center;
justify-content:center;
width:auto;
padding:10px;

${(props) => props.tempCount > 5 &&
    css`
    color:hotpink;
    animation: blinker 1s linear infinite;
    @keyframes blinker { 50% {opacity: 0;}}`}

${(props) => props.cpStatus === 1 &&
      css`
  color:darkgray;`}
`
// green command line

const CommandLine2 = styled.div`
width:250px;
min-height:200px;
border-radius:20px;
display:flex;
align-items:space-between;
justify-content:space-between;
flex-direction:column;
padding:10px;
background-color:black;
box-shadow: 0px 0px 10px #caf880;

${(props) => props.cpStatus === 1 &&
  css`
border: 2px solid #caf880;`}
`
//

const DelKey = styled.div`
height:30px;
width:70px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:10px;
cursor:pointer;
color:black;
background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);

${(props) => props.cpStatus === 2 &&
  css`
filter:brightness(50%);
cursor:default;`}
`
//

const Command2 = styled.div`
height:30px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:20px;
color:#caf880;
border: 2px solid #caf880;
animation: cmd 0.3s;

@keyframes cmd {
    0% {opacity:0;
      transform:scale(1);}
    80% { transform:scale(1.1);}
    100% {opacity:1;
      transform:scale(1);}
  }

${(props) => props.cpStatus === 2 &&
    css`
    border: 2px solid #445232;
    color:#445232;`}

${(props) => props.cpStatus === 3 &&
    css`
    border: 2px solid #445232
    color:#445232;`}
`
//

const CpCounter2 = styled.div`
height:30px;
display:flex;
border-radius:50px;
color:white;
align-items:center;
justify-content:center;
width:auto;
padding:10px;

${(props) => props.cockpitCount === props.maxCount &&
    css`
    color:hotpink;
    animation: blinker 1s linear infinite;
    @keyframes blinker { 50% {opacity: 0;}}`}

${(props) => props.cpStatus === 2 &&
      css`
  color:darkgray;`}

  ${(props) => props.cpStatus === 3 &&
    css`
color:darkgray;`}
`
