import styled, {css} from "styled-components";

export function Cockpit({hand, add, addTwo, cpStatus, addThree, set, del1, del2, commandLine, tempArr, move, cockpitCount, maxCount}){

const tempCount = tempArr.length

function addRight(){add("right")}
function addLeft(){add("left")}
function addOut(){add("out")}
function addIn(){add("in")}

return(
<CockpitFrame hand={hand}>
<Keyboard>
<Key onClick={addOut} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount}>out</Key>
<Key onClick={addIn} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount}>in</Key>
<Key onClick={addLeft} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount}>left</Key>
<Key onClick={addRight} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount}>right</Key>
</Keyboard>
<Keyboard>
<NumberKey onClick={addTwo} cpStatus={cpStatus} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount}>2</NumberKey>
<NumberKey onClick={addThree} cpStatus={cpStatus} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount}>3</NumberKey>
</Keyboard>
<CommandLine2 cpStatus={cpStatus}>
<CommandLineInner>
{tempArr.map((element, index)=>(<Command2 key={index} content={element}>{element}</Command2>))}
</CommandLineInner>
<LittleKeyContainer>
<CpCounter2 cpStatus={cpStatus} tempCount={tempCount}>{tempCount} / 4</CpCounter2>
<DelKey2 cpStatus={cpStatus} onClick={del2}>del</DelKey2>
<SetKey tempCount={tempCount} cpStatus={cpStatus} onClick={set}>set</SetKey>
</LittleKeyContainer>
</CommandLine2>
<CommandLine1 cpStatus={cpStatus}>
<CommandLineInner>
{commandLine.map((element, index)=>(<Command1 key={index} cpStatus={cpStatus}>{element}</Command1>))}
</CommandLineInner>
<LittleKeyContainer>
<CpCounter1 cpStatus={cpStatus} maxCount={maxCount} cockpitCount={cockpitCount}>{cockpitCount} / {maxCount}</CpCounter1>
<DelKey1 cpStatus={cpStatus} onClick={del1}>del</DelKey1>
<GoKey cpStatus={cpStatus} onClick={move}>GO</GoKey>
</LittleKeyContainer>
</CommandLine1>
</CockpitFrame>
)}

// general styled components

const CockpitFrame = styled.div `
height:auto;
width:30vw;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
gap:30px;
position:fixed;
top:30px;

${(props) => props.hand === true &&
    css`
    right:3vw;`}
    
${(props) => props.hand === false &&
    css`
    left:3vw;`}
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

// keyboard

const Keyboard = styled.div `
height:auto;
width:100%;
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
background-color:var(--mint);
cursor:pointer;

${(props) => props.cockpitCount >= props.maxCount &&
  css`
filter:brightness(50%);
cursor:default;`}

${(props) => props.tempCount >= 4 &&
  css`
filter:brightness(50%);
cursor:default;`}
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
background-color:var(--mint);

${(props) => props.cpStatus === 1 &&
    css`
    cursor:pointer;`}

${(props) => props.cpStatus > 1 &&
    css`
    filter:brightness(50%);`}

${(props) => props.cockpitCount >= props.maxCount &&
      css`
    filter:brightness(50%);
    cursor:default;`}
    
${(props) => props.tempCount >= 4 &&
      css`
    filter:brightness(50%);
    cursor:default;`}
`
// blue command line 

const CommandLine2 = styled.div `
height:auto;
width:100%;
min-height:100px;
border-radius:5px;
display:flex;
align-items:space-between;
justify-content:space-between;
flex-direction:column;
gap:10px;
padding:10px;
background-color:black;
box-shadow: 0px 0px 10px skyblue;

${(props) => props.cpStatus > 1 &&
    css`
border: 2px solid skyblue;`}`

//

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

animation: cmd 0.3s;

@keyframes cmd {
    0% { opacity:0;
      transform:scale(1);}
    80% {transform:scale(1.1);}
    100% {opacity:1;
      transform:scale(1);}}

${(props) => props.content > 1 &&
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
cursor:default;`}
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

${(props) => props.tempCount >= 4 &&
    css`
    color:hotpink;
    animation: blinker 1s linear infinite;
    @keyframes blinker { 50% {opacity: 0;}}`}

${(props) => props.cpStatus === 1 &&
      css`
  color:darkgray;`}
`
const DelKey2 = styled.div`
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

${(props) => props.cpStatus === 1 &&
  css`
filter:brightness(50%);
cursor:default;`}
`

// green command line

const CommandLine1 = styled.div`
width:100%;
min-height:200px;
border-radius:5px;
display:flex;
align-items:space-between;
justify-content:space-between;
flex-direction:column;
padding:10px;
background-color:black;
box-shadow: 0px 0px 10px var(--mint);

${(props) => props.cpStatus === 1 &&
  css`
border: 2px solid var(--mint);`}
`
//

const DelKey1 = styled.div`
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

${(props) => props.cpStatus > 1 &&
  css`
filter:brightness(50%);
cursor:default;`}
`
//

const Command1 = styled.div`
height:30px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:10px;
color:var(--mint);
border: 2px solid var(--mint);;
animation: cmd 0.3s;
@keyframes cmd {
    0% {opacity:0;
      transform:scale(1);}
    80% { transform:scale(1.1);}
    100% {opacity:1;
      transform:scale(1);}}

${(props) => props.cpStatus > 1 &&
    css`
    border: 2px solid #445232;
    color:#445232;`}
`
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

${(props) => props.cockpitCount >= props.maxCount &&
    css`
    color:hotpink;
    animation: blinker 1s linear infinite;
    @keyframes blinker { 50% {opacity: 0;}}`}

${(props) => props.cpStatus > 1 &&
      css`
  color:darkgray;`}
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
background-color:var(--mint);
cursor:pointer;
color:black;

${(props) => props.cpStatus > 1 &&
  css`
filter:brightness(50%);
cursor:default;`}
`
