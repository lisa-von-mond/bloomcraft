import styled, {css} from "styled-components";
import {max} from "../levels/testlevel";

export function Console({hand, globalCount, thisPlanet, focusNow, thisId, seeds, destination}){

return(<ConsoleFix hand={hand}>
    <GlobalCounter max={max} count={globalCount}>Count: {globalCount} / {max}</GlobalCounter>
    <PositionInfo>You are on planet {thisPlanet} {thisId}</PositionInfo>
    <PositionInfo>Hopping further to planet {focusNow}</PositionInfo>
    <SeedInfo thereornot={seeds}>SEEDS PICKED UP</SeedInfo>
    <DestInfo hereornot={destination}>YOU MADE IT!</DestInfo>
    </ConsoleFix>)}

const ConsoleFix = styled.div`
position:fixed;
bottom:30px;
width:250px;
height:auto;
display:flex;
flex-direction:column;
justify-content:flex-end;
color:white;
font-size: 16px;

${(props) => props.hand === true &&
  css`
  right:5vw;`}
  
${(props) => props.hand === false &&
  css`
  left:5vw;`}

`

const SeedInfo = styled.p`
padding:0;
margin:0;
color: #00f700;
${(props) => props.thereornot === false &&
  css`
display:none`}`

const DestInfo = styled.p`
padding:0;
margin:0;
color: skyblue;
${(props) => props.hereornot === false &&
  css`
display:none`}`

const GlobalCounter = styled.p`
padding:0;
margin:0;
color: white;
${(props) => props.count >= props.max &&
  css`
  animation: blinker 1s linear infinite;
  @keyframes blinker { 50% {opacity: 0;}}
  color:yellow;`}`

const PositionInfo = styled.p`
  color: white;
  padding:0;
  margin:0;`




