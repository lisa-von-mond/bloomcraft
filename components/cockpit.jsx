import styled, {css} from "styled-components";
import { useState } from "react";

export function Cockpit({addUp, addDown, addLeft, addRight, addTwo, addThree, set, del, commandLine, tempArr, move, cockpitCount}){

return(
<CpFix>
<CockpitFrame>
<Keyboard>
<Key onClick={addUp}>FAR</Key>
<Key onClick={addDown}>CLOSE</Key>
<Key onClick={addLeft}>LEFT</Key>
<Key onClick={addRight}>RIGHT</Key>
<Key onClick={addTwo}>2</Key>
<Key onClick={addThree}>3</Key>
</Keyboard>
<CommandLine1>
{tempArr.map((element, index)=>(<Command2 key={index}>{element}</Command2>))}
</CommandLine1>
<CommandLine2>
{commandLine.map((element, index)=>(<Command key={index}>{element}</Command>))}
</CommandLine2>
<Keyboard>
<DelKey onClick={del}>DEL</DelKey>
<SetKey onClick={set}>SET</SetKey>
<GoKey onClick={move}>GO</GoKey>
<CpCounter>{cockpitCount}</CpCounter>
</Keyboard>
</CockpitFrame>
</CpFix>
)}

const CockpitFrame = styled.div `
height:auto;
width:400px;
border-radius:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
gap:10px;
`
const Keyboard = styled.div `
height:auto;
width:400px;
display:flex;
flex-wrap:wrap;
align-items: flex-start;
justify-content:flex-start;
gap:10px;
padding:10px;
`
const CommandLine1 = styled.div `
height:auto;
width:400px;
border:2px solid skyblue;
border-radius:20px;
display:flex;
flex-wrap:wrap;
min-height:70px;
justify-content:flex-start;
align-items:flex-start;
align-content:flex-start;
gap:10px;
padding:10px;
background-color:black;`

const CommandLine2 = styled.div`
width:400px;
height:auto;
border:2px solid #90EE90;
min-height:70px;
border-radius:20px;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
align-items:flex-start;
align-content:flex-start;
gap:10px;
padding:10px;
background-color:black;
`
const Key = styled.div`
height:50px;
display:flex;
color:black;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:20px;
background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
cursor:pointer;
`
const DelKey = styled.div`
height:50px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:20px;
background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
cursor:pointer;
color:black;
`

const GoKey = styled.div`
height:50px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:20px;
background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
cursor:pointer;
color:black;
`
const SetKey = styled.div`
height:50px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:20px;
background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
cursor:pointer;
color:black;`

const Command = styled.div`
height:50px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:20px;
color:#90EE90;
border: 2px solid #90EE90;
`

const Command2 = styled.div`
height:50px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:20px;
color:skyblue;
border: 2px solid skyblue;
${(props) => props.key === 1 &&
    css`
    background-color:skyblue;
    color:black;
    `}

`
const CpCounter = styled.div`
height:50px;
display:flex;
border-radius:50px;
color:white;
border:2px solid white;
align-items:center;
justify-content:center;
width:auto;
padding:20px;

${(props) => props.limit > 11 &&
    css`
    color:hotpink;
    border:2px solid hotpink;
    animation: blinker 1s linear infinite;
    @keyframes blinker { 50% {opacity: 0;}}`}
`

const CpFix = styled.div`
position:fixed;
right:0px;
top:30px;
width:450px;
display:flex;
flex-direction:column;
justify-content:flex-end;
color:white;
font-size: 24px;`
