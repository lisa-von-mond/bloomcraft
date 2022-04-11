import styled, {css} from "styled-components";
import {max} from "../levels/testlevel";

export function Console({hand, thisPlanet, focusNow, thisId, chargeStatus, destination, charge}){

return(<ConsoleFix hand={hand}>
    <PositionInfo>You are on planet {thisPlanet} {thisId}</PositionInfo>
    <PositionInfo>{focusNow}</PositionInfo>
    <ChargeInfo1 thereornot={chargeStatus}>CHARGE PICKED UP</ChargeInfo1>
    <ChargeInfo2 thereornot={chargeStatus}>Charge has to be picked up from {charge}</ChargeInfo2>
    <DestInfo hereornot={destination}>YOU MADE IT!</DestInfo>
    </ConsoleFix>)}

const ConsoleFix = styled.div`
position:fixed;
bottom:30px;
width:350px;
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

const ChargeInfo1 = styled.p`
padding:0;
margin:0;
color: #00f700;
${(props) => props.thereornot === false &&
  css`
display:none`}`

const ChargeInfo2 = styled.p`
padding:0;
margin:0;
color: white;
${(props) => props.thereornot === true &&
  css`
display:none`}`

const DestInfo = styled.p`
padding:0;
margin:0;
color: skyblue;
${(props) => props.hereornot === false &&
  css`
display:none`}`

const PositionInfo = styled.p`
  color: white;
  padding:0;
  margin:0;`




