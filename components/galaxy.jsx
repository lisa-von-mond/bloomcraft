import styled, {css} from "styled-components";
import {angleToCooX, angleToCooY} from "../utils/rendering-functions"
import Image from 'next/image';
import test from '../public/images/test.jpg';
import ufo from '../public/images/ufo2.svg';
import greenslayer from '../public/images/greens.svg';
import focusind from '../public/images/focus2.svg';
import planetring from '../public/images/planetring_narrow.svg';
import planetoverlay from '../public/images/overlay150.svg';
import planet1 from '../public/images/planets/planet1.svg';
import planet2 from '../public/images/planets/planet2.svg';
import planet3 from '../public/images/planets/planet3.svg';
import planet4 from '../public/images/planets/planet4.svg';

export function Galaxy({galaxy, seeds}){

return(<>

{galaxy.map((one)=><MyGalaxy key={one.name} scope={one.scope} seedstatus={seeds}>

<Planet goal={one.goal}><Image src={planet1} />
<LegendId>{one.id} {one.name}</LegendId></Planet>

<PlanetOverlay><Image src={planetoverlay}/></PlanetOverlay>
<UfoContainer active={one.active}><Image src={ufo}/></UfoContainer>
<GreensContainer greens={one.greens}><Image src={greenslayer}/></GreensContainer>

  
<div className="scope">
{one.children.map((two)=><MyGalaxy key={two.name} scope={two.scope} distx={angleToCooX(two.angl, two.dist)} disty={angleToCooY(two.angl, two.dist)} seedstatus={seeds}>
    
    
    <Planet goal={two.goal}><Image src={planet2}/>
    <UfoContainer active={two.active}><Image src={ufo}/></UfoContainer>
    <LegendId>{two.id} {two.name}</LegendId></Planet>

    <PlanetOverlay><Image src={planetoverlay}/></PlanetOverlay>
  
    <GreensContainer greens={two.greens}><Image src={greenslayer}/></GreensContainer>
    <FocusContainer focus={two.focus}> <Image src={focusind}/></FocusContainer>
    <PlanetRing ring={two.ring}><Image src={planetring}/></PlanetRing>
    

  <div className="scope">
      {two.children.map((three)=><MyGalaxy key={three.name} scope={three.scope} distx={angleToCooX(three.angl, three.dist)} disty={angleToCooY(three.angl, three.dist)} seedstatus={seeds}>
      
        <Planet goal={three.goal}> <Image src={planet4} className="planetimage"/>
        <LegendId>{three.id} {three.name}</LegendId></Planet>

        <PlanetOverlay><Image src={planetoverlay}/></PlanetOverlay>
        <UfoContainer active={three.active}><Image src={ufo}/></UfoContainer>
        <GreensContainer greens={three.greens}><Image src={greenslayer}/></GreensContainer>
        <FocusContainer focus={three.focus}> <Image src={focusind}/></FocusContainer>
        <PlanetRing ring={three.ring}><Image src={planetring}/></PlanetRing>
       

      <div className="scope">
          {three.children.map((four)=><MyGalaxy key={four.name} scope={four.scope} distx={angleToCooX(four.angl, four.dist)} disty={angleToCooY(four.angl, four.dist)} seedstatus={seeds}>
          <Planet goal={four.goal}> <Image src={planet4} className="planetimage" />
          <LegendId>{four.id} {four.name}</LegendId></Planet>

             <PlanetOverlay><Image src={planetoverlay}/></PlanetOverlay>
             <UfoContainer active={four.active}><Image src={ufo}/></UfoContainer>
             <GreensContainer greens={four.greens}><Image src={greenslayer}/></GreensContainer>
             <FocusContainer focus={four.focus}> <Image src={focusind}/></FocusContainer>
             <PlanetRing ring={four.ring}><Image src={planetring}/></PlanetRing>
           

                </MyGalaxy>)}</div>
              </MyGalaxy>)}</div>
            </MyGalaxy>)}</div>
          </MyGalaxy>)}
         </>)}

const MyGalaxy = styled.div`  
top:${props => props.distx}px;
left:${props => props.disty}px;

text-align:center;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
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

const Planet = styled.div`
position:absolute;
animation: orbit-rev 600s linear infinite;
transform-origin: ${props => props.distx}*-1px; ${props => props.disty}*-1px;
@keyframes orbit-rev { from { transform:rotate(0deg) } to { transform:rotate(-360deg) } }  

${(props) => props.goal === true &&
  css`
  filter: grayscale(100%);`}
`

const PlanetRing = styled.div`
position:absolute;
width:170%;
height:170%;
animation: orbit-rev 600s linear infinite;
transform-origin: ${props => props.distx}*-1px; ${props => props.disty}*-1px;
@keyframes orbit-rev { from { transform:rotate(0deg) } to { transform:rotate(-360deg) } } 
${(props) => props.ring === 0 &&
  css`
  display:none;`}
${(props) => props.ring === 2 &&
    css`
    filter: invert(100%) brightness(400%);
    `}
`

const FocusContainer = styled.div`
position:absolute;
animation: orbit-rev 600s linear infinite;
transform-origin: ${props => props.distx}*-1px; ${props => props.disty}*-1px;
@keyframes orbit-rev { from { transform:rotate(0deg) } to { transform:rotate(-360deg) } }  
${(props) => props.focus === false &&
  css`
  display:none;`}
`

const UfoContainer = styled.div`
position:absolute;
top:-20px;
animation: orbit-rev 600s linear infinite;
transform-origin: ${props => props.distx}*-1px; ${props => props.disty}*-1px;
@keyframes orbit-rev { from { transform:rotate(0deg) } to { transform:rotate(-360deg) } }  

${(props) => props.active === false &&
  css`
  visibility:hidden;`}
`
const GreensContainer = styled.div`
position:absolute;
animation: orbit-rev 600s linear infinite;
transform-origin: ${props => props.distx}*-1px; ${props => props.disty}*-1px;
@keyframes orbit-rev { from { transform:rotate(0deg) } to { transform:rotate(-360deg) } }  

${(props) => props.greens === false &&
  css`
  display:none;`}
`
const PlanetOverlay = styled.div`
position:absolute;
width:101;
height:101;
animation: orbit-rev 600s linear infinite;
transform-origin: ${props => props.distx}*-1px; ${props => props.disty}*-1px;
@keyframes orbit-rev { from { transform:rotate(0deg) } to { transform:rotate(-360deg) } }  
`
const LegendIdZero = styled.div`
position:absolute;
top:-20px;
right:-30px;
color:white;
font-size:14px;
text-align:left;
vertical-align:bottom;`

const LegendId = styled.div`
position:absolute;
top:-20px;
right:-30px;
color:white;
font-size:14px;
text-align:left;
vertical-align:bottom;`

