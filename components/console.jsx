import styled, {css} from "styled-components";

export function Console({thisPlanet, focusNow, thisId, chargeStatus, destination, charge}){

return(<CFrame>
    <PositionInfo>You are on planet {thisPlanet} {thisId}</PositionInfo>
    <PositionInfo>{focusNow}</PositionInfo>
    <ChargeInfo1 chargeStatus={chargeStatus}>CHARGE PICKED UP</ChargeInfo1>
    <ChargeInfo2 chargeStatus={chargeStatus}>Charge has to be picked up from {charge}</ChargeInfo2>
    <DestInfo destination={destination}>YOU MADE IT!</DestInfo>
    </CFrame>)}

const CFrame = styled.div`
bordee:2px solid gold;
@media only screen and (orientation:portrait){
 display:none;}
@media only screen and (max-height:800px)){
  display:none;}
@media only screen and (max-width:600px)){
    display:none;}
`

const ChargeInfo1 = styled.p`
padding:0;
margin:5px;
color: #00f700;
${(props) => props.chargeStatus === false &&
  css`
display:none`}`

const ChargeInfo2 = styled.p`
padding:0;
margin:5px;
color: white;
${(props) => props.chargeStatus === true &&
  css`
display:none`}`

const DestInfo = styled.p`
padding:0;
margin:5px;
color: skyblue;
${(props) => props.destination === false &&
  css`
display:none`}`

const PositionInfo = styled.p`
  color: white;
  padding:0;
  margin:5px;`




