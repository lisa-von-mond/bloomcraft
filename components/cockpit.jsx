import styled, {css} from "styled-components";
import { useState } from "react";
import { max } from "../testlevel";

export function Cockpit(){

const [commandLine, setCommandLine] = useState([])
const count = commandLine.length;

function addRight(){
if(count < max){setCommandLine([...commandLine, "RIGHT"])}}

function addLeft(){
    if(count < max){setCommandLine([...commandLine, "LEFT"])}}

function addUp(){
    if(count < max){setCommandLine([...commandLine, "UP"])}}

function addDown(){
    if(count < max){setCommandLine([...commandLine, "DOWN"])}}

function del(){setCommandLine(commandLine.slice(0, -1))}

return(
    <>
<CockpitFrame>
<Keyboard>
<Key onClick={addUp}>UP</Key>
<Key onClick={addDown}>DOWN</Key>
<Key onClick={addLeft}>LEFT</Key>
<Key onClick={addRight}>RIGHT</Key>
<DelKey onClick={del}>DEL</DelKey>
</Keyboard>
<CommandLine>
{commandLine.map((element, index)=>(<Command key={index}>{element}</Command>))}
</CommandLine>
<GoPanel><GoKey onClick={go}>GO</GoKey>
<Counter limit={count}>{12-count}</Counter></GoPanel>
</CockpitFrame>
</>
)

}

const CockpitFrame = styled.div `
height:530px;
width:350px;
border-radius:20px;
background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
background-blend-mode: multiply,multiply;
border:2px solid white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
padding:10px;
`
const Keyboard = styled.div `
height:150px;
width:320px;
display:flex;
flex-wrap:wrap;
align-items: flex-start;
justify-content:flex-start;
gap:10px;
padding:10px;
`
const CommandLine = styled.div `
width:320px;
height:250px;
border-radius:20px;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
align-items:flex-start;
align-content:flex-start;
gap:10px;
padding:10px;
background-color:black;
position:relative;
`
const GoPanel = styled.div `
width:320px;
border-radius:20px;
display:flex;
justify-content:space-between;
align-items:center;
gap:10px;
padding:10px;
position:relative;
`
const Key = styled.div`
height:50px;
display:flex;
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
`

const GoKey = styled.div`
height:50px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:20px;
background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
cursor:pointer;
`
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

const Counter = styled.div`
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

