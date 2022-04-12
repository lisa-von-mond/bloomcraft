import styled, {css} from "styled-components";
import {max} from "../levels/testlevel";

export function Console({hand, thisPlanet, focusNow, thisId, chargeStatus, destination, charge}){

return(<ConsoleFix hand={hand}>
    <PositionInfo>You are on planet {thisPlanet} {thisId}</PositionInfo>
    <PositionInfo>{focusNow}</PositionInfo>
    <ChargeInfo1 chargeStatus={chargeStatus}>CHARGE PICKED UP</ChargeInfo1>
    <ChargeInfo2 chargeStatus={chargeStatus}>Charge has to be picked up from {charge}</ChargeInfo2>
    <DestInfo destination={destination}>YOU MADE IT!</DestInfo>
    </ConsoleFix>)}

const ConsoleFix = styled.div`
position:fixed;
bottom:30px;
width:30vw;
height:auto;
display:flex;
flex-direction:column;
justify-content:flex-end;
color:white;
font-size: 16px;

${(props) => props.hand === true &&
  css`
  right:3vw;`}
  
${(props) => props.hand === false &&
  css`
  left:3vw;`}
`

const ChargeInfo1 = styled.p`
padding:0;
margin:0;
color: #00f700;
${(props) => props.chargeStatus === false &&
  css`
display:none`}`

const ChargeInfo2 = styled.p`
padding:0;
margin:0;
color: white;
${(props) => props.chargeStatus === true &&
  css`
display:none`}`

const DestInfo = styled.p`
padding:0;
margin:0;
color: skyblue;
${(props) => props.destination === false &&
  css`
display:none`}`

const PositionInfo = styled.p`
  color: white;
  padding:0;
  margin:0;`




