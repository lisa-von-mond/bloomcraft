import styled, {css} from "styled-components";
import { useState } from "react";
import { nanoid } from 'nanoid';

export function Cockpit(){

const commands = ["UP","DOWN","DOWN","RIGHT","LEFT","RIGHT","UP"]

const [commandLine, setCommandLine] = useState(["YOLO"])

function addRight(){
const newCommandLine = commandLine
newCommandLine.push("RIGHT")
console.log(newCommandLine)
setCommandLine(newCommandLine)
}

function addLeft(){commandLine.push("LEFT")
console.log(commandLine)
setCommandLine(commandLine)
}

function addUp(){commandLine.push("UP")
console.log(commandLine)
setCommandLine(commandLine)
}

function addDown(){commandLine.push("DOWN")
console.log(commandLine)
setCommandLine(commandLine)
}

function del(){commandLine.pop()
console.log(commandLine)
setCommandLine(commandLine)
}

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
{commandLine.map((element)=>(<Command key={nanoid()}>{element}</Command>))}
<Counter>12</Counter>
</CommandLine>
</CockpitFrame>
</>
)


}

const CockpitFrame = styled.div `
height:530px;
width:530px;
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
height:250px;
width:510px;
display:flex;
flex-wrap:wrap;
align-items: flex-start;
justify-content:flex-start;
gap:10px;
padding:10px;
`
const CommandLine = styled.div `
height:250px;
width:510px;
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
const Key = styled.div`
height:50px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:20px;
background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
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

const Counter = styled.p`
color:white;
font-size:18px;
position:absolute;
right:35px;
bottom:15px;
`
