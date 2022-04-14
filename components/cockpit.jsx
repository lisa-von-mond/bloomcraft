import styled, {css} from "styled-components";

export function Cockpit({add, addTwo, cpStatus, addThree, set, del1, del2, commandLine, tempArr, move, cockpitCount, maxCount}){

const tempCount = tempArr.length

function addRight(){add("right")}
function addLeft(){add("left")}
function addOut(){add("out")}
function addIn(){add("in")}

return(
<>
<CommandLine cpStatus={cpStatus}>
<CommandLineInner>
{commandLine.map((element, index)=>(<Command key={index} cpStatus={cpStatus}>{element}</Command>))}
<CommandLineTemp cpStatus={cpStatus}>
{tempArr.map((element, index)=>(<CommandTemp key={index} content={element}>{element}</CommandTemp>))}
</CommandLineTemp>
<SetKey tempCount={tempCount} cpStatus={cpStatus} onClick={set}>set</SetKey>
</CommandLineInner>
<LittleKeyContainer>
<CpCounter2 cpStatus={cpStatus} tempCount={tempCount}>{tempCount} / 4</CpCounter2>
<DelKey2 cpStatus={cpStatus} onClick={del2}>del</DelKey2>
<CpCounter1 cpStatus={cpStatus} maxCount={maxCount} cockpitCount={cockpitCount}>{cockpitCount} / {maxCount}</CpCounter1>
<DelKey1 cpStatus={cpStatus} onClick={del1}>del</DelKey1>
</LittleKeyContainer>
</CommandLine>
<Keyboard>
<FirstRow>
<Key colorvar="mint" onClick={addOut} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount} cpStatus={cpStatus}>beam<br></br>out</Key>
<Key colorvar="mint" onClick={addIn} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount} cpStatus={cpStatus}>beam<br></br>in</Key>
<Key colorvar="mint" onClick={addLeft} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount} cpStatus={cpStatus}>next<br></br>left</Key>
<Key colorvar="mint" onClick={addRight} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount} cpStatus={cpStatus}>next<br></br>right</Key>
</FirstRow>
<SecondRow>
<Key colorvar="sky" onClick={addTwo} cpStatus={cpStatus} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount}>2</Key>
<Key colorvar="sky" onClick={addThree} cpStatus={cpStatus} tempCount={tempCount} cockpitCount = {cockpitCount} maxCount={maxCount}>3</Key>
<Key colorvar="pink" cpStatus={cpStatus} onClick={move}>GO</Key>
</SecondRow>
</Keyboard>
</>
)}


// keyboard

const Keyboard = styled.div `
display:flex;
align-items: center;
justify-content:center;
width:200px;
flex-wrap:wrap;
gap:var(--gap);
border:2px solid blue;
@media only screen and (max-width:1000px){width:95%;}
@media only screen and (max-width:450px){width:95%;flex-wrap:nowrap;}`

const FirstRow = styled.div`
display:flex;
gap:var(--gap);
justify-content:space-between;
`

const SecondRow = styled.div`
display:flex;
gap:var(--gap);
justify-content:center;
`
const Key = styled.div`
height:60px;
width:60px;

@media only screen and (max-width:600px){
  height:40px;
  width:40px;}

@media only screen and (max-width:400px){
  height:30px;
  width:30px;}
display:flex;
color:black;
border-radius:30%;
align-items:center;
text-align:center;
justify-content:center;
padding:8px;
background:var(--${props => props.colorvar});
cursor:pointer;

${(props) => props.colorvar === "mint" && props.cockpitCount >= props.maxCount &&
  css`
filter:brightness(50%);
cursor:default;`}

${(props) => props.colorvar === "mint" && props.tempCount >= 4 &&
  css`
filter:brightness(50%);
cursor:default;`}

${(props) => props.colorvar === "sky" && props.cpStatus === 1 &&
    css`
    cursor:pointer;`}

${(props) => props.colorvar === "mint" && props.cpStatus > 1 &&
    css`
    background-color:var(--sky)`}

${(props) => props.colorvar === "sky" && props.cpStatus > 1 &&
    css`
    filter:brightness(50%);`}

${(props) =>  props.colorvar === "sky" && props.cockpitCount >= props.maxCount &&
      css`
    filter:brightness(50%);
    cursor:default;`}
    
${(props) => props.colorvar === "sky" && props.tempCount >= 4 &&
      css`
    filter:brightness(50%);
    cursor:default;`}

${(props) => props.colorvar === "pink" && props.cpStatus > 1 &&
    css`
filter:brightness(50%);
cursor:default;`}

`

// command line

const CommandLine = styled.div`
width:70%;
min-height:200px;
@media only screen and (max-width:1000px){width:95%}
@media only screen and (max-width:450px){width:95%; min-height:50px;}
border-radius:30px;
display:flex;
align-items:space-between;
justify-content:space-between;
flex-direction:column;
padding:10px;
background:black;
border: 2px solid var(--mint);
`

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

const CommandLineTemp = styled.div `
height:30px;
min-width:40px;
border-radius:50px;
padding:10px;
display:flex;
align-items:center;
justify-content:center;
color:var(--sky);
border: 2px solid var(--sky);

${(props) => props.cpStatus === 1 &&
    css`
display:none;`}`

//

const CommandTemp = styled.div`
animation: cmd 0.3s;

@keyframes cmd {0% { opacity:0; transform:scale(1);} 80% {transform:scale(1.1);} 100% {opacity:1; transform:scale(1);}};

${(props) => props.content > 1 &&
    css`
filter:brightness(120%);
    `}
`
//

const SetKey = styled.div`
height:25px;
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
color:white;
border:2px solid white;

${(props) => props.cpStatus === 1 &&
  css`
display:none;`}
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
color:white;
border:2px solid white;

${(props) => props.cpStatus > 1 &&
  css`
display:none;`}
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

// general styled components

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
gap:10px;`
