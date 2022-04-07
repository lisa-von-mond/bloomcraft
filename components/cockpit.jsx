import styled, {css} from "styled-components";
import { useState } from "react";

export function Cockpit({hand, addUp, addDown, addLeft, addRight, addTwo, cpStatus, addThree, set, del, commandLine, tempArr, move, cockpitCount}){

const tempCount = tempArr.length

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
{tempArr.map((element, index)=>(<Command2 key={index} content={element}>{element}</Command2>))}
</CommandLineInner>
<LittleKeyContainer>
<CpCounter>{tempCount}</CpCounter>
<SetKey onClick={set}>set</SetKey>
</LittleKeyContainer>
</CommandLine1>
<CommandLine2 cpStatus={cpStatus}>
<CommandLineInner>
{commandLine.map((element, index)=>(<Command key={index}>{element}</Command>))}
</CommandLineInner>
<LittleKeyContainer>
<CpCounter>{cockpitCount}</CpCounter>
<DelKey onClick={del}>delete</DelKey>
</LittleKeyContainer>
</CommandLine2>
<Keyboard>
<GoKey onClick={move}>GO</GoKey>
</Keyboard>
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
const CommandLineInner = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
align-items:flex-start;
align-content:flex-start;
gap:10px;
`
const LittleKeyContainer = styled.div`
display:flex;
justify-content: flex-end;
align-items:flex-end;
height:50px;
gap:10px;
`
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
`
const CpCounter = styled.div`
height:30px;
display:flex;
border-radius:50px;
color:white;
align-items:center;
justify-content:center;
width:auto;
padding:10px;

${(props) => props.limit > 11 &&
    css`
    color:hotpink;
    border:2px solid hotpink;
    animation: blinker 1s linear infinite;
    @keyframes blinker { 50% {opacity: 0;}}`}
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
background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);

${(props) => props.cpStatus === 1 &&
    css`
    cursor:pointer;`}

${(props) => props.cpStatus === 2 &&
    css`
    background-image:none;
    background-color:gray;`}

${(props) => props.cpStatus === 3 &&
    css`
    background-image:none;
    background-color:gray;`}

`
// blue command line 

const CommandLine1 = styled.div `
height:auto;
width:250px;
min-height:100px;
border:2px solid skyblue;
border-radius:20px;
display:flex;
align-items:space-between;
justify-content:space-between;
flex-direction:column;
gap:10px;
padding:10px;
background-color:black;
${(props) => props.cpStatus === 2 &&
    css`
    box-shadow: 0px 0px 10px skyblue`}

${(props) => props.cpStatus === 3 &&
    css`
    box-shadow: 0px 0px 10px skyblue`}

`
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
color:black;`

const Command = styled.div`
height:30px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:20px;
color:#90EE90;
border: 2px solid #90EE90;
`

// green command line

const CommandLine2 = styled.div`
width:250px;
min-height:200px;
border:2px solid #90EE90;
border-radius:20px;
display:flex;
align-items:space-between;
justify-content:space-between;
flex-direction:column;
padding:10px;
background-color:black;
${(props) => props.cpStatus === 1 &&
    css`
    box-shadow: 0px 0px 10px #90EE90`}
`
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
background-color:gray;
`
const Command2 = styled.div`
height:30px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:10px;
color:skyblue;
border: 2px solid skyblue;
${(props) => props.content === 2 &&
    css`
    background-color:skyblue;
    color:black;
    `}

${(props) => props.content === 3 &&
    css`
    background-color:skyblue;
    color:black;
     `}
`

