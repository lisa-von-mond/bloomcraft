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
<Key onClick={addOut} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount} cpStatus={cpStatus}>out</Key>
<Key onClick={addIn} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount} cpStatus={cpStatus}>in</Key>
<Key onClick={addLeft} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount} cpStatus={cpStatus}>left</Key>
<Key onClick={addRight} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount} cpStatus={cpStatus}>right</Key>
</Keyboard>
<Keyboard>
<NumberKey onClick={addTwo} cpStatus={cpStatus} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount}>2</NumberKey>
<NumberKey onClick={addThree} cpStatus={cpStatus} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount}>3</NumberKey>
</Keyboard>
<CommandLine cpStatus={cpStatus}>
<CommandLineInner>
{commandLine.map((element, index)=>(<Command key={index} cpStatus={cpStatus}>{element}</Command>))}
<CommandLineTemp cpStatus={cpStatus}>
{tempArr.map((element, index)=>(<CommandTemp key={index} content={element}>{element}</CommandTemp>))}
<SetKey tempCount={tempCount} cpStatus={cpStatus} onClick={set}>set</SetKey>
</CommandLineTemp>
</CommandLineInner>
<LittleKeyContainer>
<CpCounter2 cpStatus={cpStatus} tempCount={tempCount}>{tempCount} / 4</CpCounter2>
<DelKey2 cpStatus={cpStatus} onClick={del2}>del</DelKey2>
<CpCounter1 cpStatus={cpStatus} maxCount={maxCount} cockpitCount={cockpitCount}>{cockpitCount} / {maxCount}</CpCounter1>
<DelKey1 cpStatus={cpStatus} onClick={del1}>del</DelKey1>
<GoKey cpStatus={cpStatus} onClick={move}>GO</GoKey>
</LittleKeyContainer>
</CommandLine>
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

${(props) => props.cpStatus > 1 &&
  css`
background-color:var(--sky);`}
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
background-color:var(--sky);

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
// blue elements

const CommandLineTemp = styled.div `
height:40px;
border-radius:50px;
display:flex;
align-items:flex-start;
justify-content:space-between;
gap:10px;

${(props) => props.cpStatus === 1 &&
    css`
display:none;`}`

//

const CommandTemp = styled.div`
height:30px;
display:flex;
border-radius:50px;
align-items:center;
justify-content:center;
width:auto;
padding:10px;
color:skyblue;
border: 2px solid var(--sky);

animation: cmd 0.3s;

@keyframes cmd {
    0% { opacity:0;
      transform:scale(1);}
    80% {transform:scale(1.1);}
    100% {opacity:1;
      transform:scale(1);}};

${(props) => props.content > 1 &&
    css`
filter:brightness(120%);
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
background: var(--sky);
cursor:pointer;
color:black;

animation: cmd 0.3s, blinker 1s linear infinite;

@keyframes cmd {
    0% { opacity:0;
      transform:scale(1);}
    80% {transform:scale(1.1);}
    100% {opacity:1;
      transform:scale(1);}};


@keyframes blinker { 50% {opacity: 0;}};

${(props) => props.tempCount <= 1 &&
  css`
display:none;`}

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
  display:none;`}
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
display:none;`}
`

// command line

const CommandLine = styled.div`
width:100%;
min-height:200px;
border-radius:20px;
display:flex;
align-items:space-between;
justify-content:space-between;
flex-direction:column;
padding:10px;
background-color:black;
border: 2px solid var(--mint);
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
display:none;`}
`
//

const Command = styled.div`
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
  display:none;`}
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
