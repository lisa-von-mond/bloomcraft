import styled, {css} from "styled-components";
import {angleToCooX, angleToCooY} from "../utils/rendering-functions"
import Image from 'next/image';
import ufo from '../public/images/future_ufo.svg';
import greenslayer from '../public/images/charge.svg';
import focusind from '../public/images/green_focus.svg';
import planetring from '../public/images/planetring_narrow.svg';
import planetoverlay from '../public/images/overlay150.svg';
import planet1 from '../public/images/planets/planet1.svg';
import planet2 from '../public/images/planets/planet2.svg';
import planet3 from '../public/images/planets/planet3.svg';
import planet4 from '../public/images/planets/planet4.svg';

export function Galaxy({galaxy, chargeStatus}){

return(<>

{galaxy.map((one)=><MyGalaxy key={one.name} scope={one.scope} chargeStatus={chargeStatus}>

<Planet goal={one.goal}><Image src={planet1} /></Planet>
<LegendId><p>{one.id} {one.name}</p></LegendId>
<PlanetOverlay><Image src={planetoverlay}/></PlanetOverlay>
<GreensContainer greens={one.greens} chargeStatus={chargeStatus}><Image src={greenslayer}/></GreensContainer>
<UfoContainer active={one.active} chargeStatus={chargeStatus}><div><Image src={ufo}/></div></UfoContainer>

<div className="scope">
{one.children.map((two)=><MyGalaxy key={two.name} scope={two.scope} distx={angleToCooX(two.angl, two.dist)} disty={angleToCooY(two.angl, two.dist)} chargeStatus={chargeStatus}>
    <Planet goal={two.goal} focus={two.focus}><Image src={planet2}/></Planet>
    <LegendId><p>{two.id} {two.name}</p></LegendId>
    <PlanetOverlay focus={two.focus}><Image src={planetoverlay}/></PlanetOverlay>
    <GreensContainer greens={two.greens} chargeStatus={chargeStatus}><Image src={greenslayer}/></GreensContainer>
    <UfoContainer active={two.active} chargeStatus={chargeStatus}><div><Image src={ufo}/></div></UfoContainer>
    <PlanetRing ring={two.ring} focus={two.focus}><Image src={planetring}/></PlanetRing>
    

    <div className="scope">
      {two.children.map((three)=><MyGalaxy key={three.name} scope={three.scope} distx={angleToCooX(three.angl, three.dist)} disty={angleToCooY(three.angl, three.dist)} chargeStatus={chargeStatus}>
        
        <Planet goal={three.goal} focus={three.focus}> <Image src={planet3} className="planetimage"/></Planet>
        <LegendId><p>{three.id} {three.name}</p></LegendId>
        <PlanetOverlay focus={three.focus}><Image src={planetoverlay}/></PlanetOverlay>
        <GreensContainer greens={three.greens} chargeStatus={chargeStatus}><Image src={greenslayer}/></GreensContainer>
        <UfoContainer active={three.active} chargeStatus={chargeStatus}><div><Image src={ufo}/></div></UfoContainer>
        <PlanetRing ring={three.ring} focus={three.focus}><Image src={planetring}/></PlanetRing>
       

        <div className="scope">
          {three.children.map((four)=><MyGalaxy key={four.name} scope={four.scope} distx={angleToCooX(four.angl, four.dist)} disty={angleToCooY(four.angl, four.dist)} chargeStatus={chargeStatus}>
              <Planet goal={four.goal} focus={four.focus}> <Image src={planet4} className="planetimage" /></Planet>
              <LegendId><p>{four.id} {four.name}</p></LegendId>
              <PlanetOverlay focus={four.focus}><Image src={planetoverlay}/></PlanetOverlay>
              <GreensContainer greens={four.greens} chargeStatus={chargeStatus}><Image src={greenslayer}/></GreensContainer>
              <UfoContainer active={four.active} chargeStatus={chargeStatus}><div><Image src={ufo}/></div></UfoContainer>
              <PlanetRing ring={four.ring} focus={four.focus}><Image src={planetring}/></PlanetRing>
              
                </MyGalaxy>)}</div>
              </MyGalaxy>)}</div>
            </MyGalaxy>)}</div>
          </MyGalaxy>)}
         </>)}

const MyGalaxy = styled.div`  
top:${props => props.distx}px;
left:${props => props.disty}px;

position:absolute;
display:flex;
justify-content:center;
align-items:center;
background-size: contain;
.scope{
  position:absolute;
  top:0;
  left:0;}

${(props) => props.scope === 0 &&
    css`
    height: 100px;
    width: 100px;
    animation: orbit 600s linear infinite;
    transform-origin: ${props => props.distx}*-1px; ${props => props.disty}*-1px;;
    @keyframes orbit { from { transform:rotate(0deg) } to { transform:rotate(360deg) } }  `
  }
  
${(props) => props.scope === 1 &&
    css`
    height: 80px;
    width: 80px;`}
  
${(props) => props.scope === 2 &&
    css`
    height: 60px;
    width: 60px;`}
  
${(props) => props.scope === 3 &&
    css`
    height: 50px;
    width: 50px;`}
`
//


const Planet = styled.div`
position:absolute;
animation: orbit-rev 600s linear infinite;
@keyframes orbit-rev { from { transform:rotate(0deg) } to { transform:rotate(-360deg) } }

${(props) => props.goal === true &&
  css`
  filter: grayscale(100%) brightness(50%);`}

${(props) => props.focus === true &&
    css`
    animation: blinker 1s linear infinite, orbit-rev 600s linear infinite;
    @keyframes blinker { 50% {opacity: 0;}}
    @keyframes orbit-rev { from { transform:rotate(0deg) } to { transform:rotate(-360deg) } }
  `}
`
//

const PlanetRing = styled.div`
position:absolute;
width:170%;
height:170%;
animation: orbit-rev 600s linear infinite;
transform-origin: ${props => props.distx}*-1px; ${props => props.disty}*-1px;
@keyframes orbit-rev {from {transform:rotate(0deg)} to {transform:rotate(-360deg)}} 

${(props) => props.ring === 0 &&
  css`
  display:none;`}

${(props) => props.ring === 2 &&
  css`
  filter: invert(100%) brightness(400%);
    `}

${(props) => props.focus === true &&
  css`
  animation: blinker 1s linear infinite, orbit-rev 600s linear infinite;
  @keyframes blinker { 50% {opacity: 0;}}
  @keyframes orbit-rev { from { transform:rotate(0deg) } to { transform:rotate(-360deg) } }
    `}
`
//

const UfoContainer = styled.div`
position:absolute;
height:150%;
width:150%;
display:flex;
justify-content:center;
align-items:flex-start;
animation: orbit-rev 600s linear infinite;
@keyframes orbit-rev {from {transform:rotate(0deg)} to {transform:rotate(-360deg)}};

${(props) => props.active === false &&
  css`
  visibility:hidden;`}

${(props) => props.chargeStatus === true &&
  css`
  filter:hue-rotate(200deg)`}
`
const GreensContainer = styled.div`
position:absolute;
height:60%;
width:60%;


${(props) => props.greens === false &&
  css`
  display:none;`}

${(props) => props.chargeStatus === true &&
  css`
  display:none;`}
`
const PlanetOverlay = styled.div`
position:absolute;
width:101;
height:101;
animation: orbit-rev 600s linear infinite;
transform-origin: ${props => props.distx}*-1px; ${props => props.disty}*-1px;
@keyframes orbit-rev {from {transform:rotate(0deg)} to {transform:rotate(-360deg)}};

${(props) => props.focus === true &&
  css`
  animation: blinker 1s linear infinite, orbit-rev 600s linear infinite;
  @keyframes blinker { 50% {opacity: 0;}}
  @keyframes orbit-rev { from { transform:rotate(0deg) } to { transform:rotate(-360deg) } }
`}

`
const LegendId = styled.div`
position:absolute;
animation: orbit-rev 600s linear infinite;
@keyframes orbit-rev {from {transform:rotate(0deg)} to {transform:rotate(-360deg)}};
width:180%;
height:180%;
display:flex;
justify-content:flex-end;
align-content:flex-end;
text-align:right;
align-items: flex-start;

p{color:white;
  font-size:13px;
  test-align:right;
  padding:0;
  margin:0;
}`

