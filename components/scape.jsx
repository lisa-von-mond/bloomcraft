import styled, {css} from "styled-components";
import { Galaxy } from "./galaxy";
import { useState } from "react";


export function Scape({galaxy, chargeStatus, destination, hand}){

const [xShift, setXShift] = useState(50) // for shifting layout in x direction
const [yShift, setYShift] = useState(50) // for shifting layout in y direction

function shiftLeft(){setXShift(xShift+10)}
      
function shiftRight(){setXShift(xShift-10)}
      
function shiftUp(){setYShift(yShift-10)}
      
function shiftDown(){setYShift(yShift+10)}
    
function shiftNow(){console.log("this function will come")}

return(

<Frame hand={hand}>
<WholeGalaxy x={xShift} y={yShift} onKeyPress={shiftNow}>
<Galaxy galaxy={galaxy} chargeStatus={chargeStatus} destination={destination}/>
</WholeGalaxy>
<Quad1></Quad1>
<Quad2></Quad2>
<Quad3></Quad3>
<Quad4></Quad4>
<ArrLeft onClick={shiftLeft}></ArrLeft>
<ArrUp onClick={shiftUp}></ArrUp>
<ArrDown onClick={shiftDown}></ArrDown>
<ArrRight onClick={shiftRight}></ArrRight>
</Frame>
)

}

const Frame = styled.div`
height:94vh;
width:60vw;
position:fixed;
display:flex;
align-items:center;
justify-content:center;

${(props) => props.hand === true &&
css`
left:3vw;`}

${(props) => props.hand === false &&
css`
right:3vw;`}
`
const WholeGalaxy = styled.div`
height:10px;
width:10px;
position:absolute;
bottom:${props => props.y}%;
left:${props => props.x}%;
display:flex;
align-items:center;
justify-content:center;
`
// markers

const Quad1  =styled.div`
height:20px;
width:20px;
border-top:2px solid var(--mint);
border-left:2px solid var(--mint);
position: absolute;
top:0;
left:0;
border-radius:5px 0 0 0;
`
const Quad2  =styled.div`
height:20px;
width:20px;
border-top:2px solid var(--mint);
border-right:2px solid var(--mint);
position: absolute;
top:0;
right:0;
border-radius:0 5px 0 0;
`
const Quad3  =styled.div`
height:20px;
width:20px;
border-bottom:2px solid var(--mint);
border-left:2px solid var(--mint);
position: absolute;
bottom:0;
left:0;
border-radius:0 0 0 5px;
`
const Quad4  =styled.div`
height:20px;
width:20px;
border-bottom:2px solid var(--mint);
border-right:2px solid var(--mint);
position: absolute;
bottom:0;
right:0;
border-radius:0 0 5px 0;
`
// navigation squares

const ArrLeft = styled.div`
width: 20px; 
height: 20px; 
border: 2px solid var(--mint);
position: absolute;
top:50%-10px;
left:0;
border-radius:5px;
`
const ArrUp = styled.div`
width: 20px; 
height: 20px; 
border: 2px solid var(--mint);
position: absolute;
left:50%-10px;
top:0;
border-radius:5px;
`
const ArrRight = styled.div`
width: 20px; 
height: 20px; 
border: 2px solid var(--mint);
position: absolute;
top:50%-10px;
right:0;
border-radius:5px;
`
const ArrDown = styled.div`
width: 20px; 
height: 20px; 
border: 2px solid var(--mint);
position: absolute;
left:50%-10px;
bottom:0;
border-radius:5px;
`