import styled, {css} from "styled-components";
import { useState, useEffect } from "react";
import {levelOne, max} from "../testlevel";
import {angleToCooX, angleToCooY} from "../utils/rendering-functions"
import {track, integrateScope} from "../utils/utility-functions"
import { Cockpit } from "./cockpit";
import { withTheme } from "styled-components";

export function Field(){
const [galaxy, setGalaxy] = useState(levelOne)
const [seeds, setSeeds] = useState(false)
const [destination, setDestination] = useState(false)
const [globalCount, setGlobalCount] = useState(0)


// moving functions global

function hopUpInScope(object){
  const Focus = object.children.find((element) => (element.focus === true))
  const NewSubScope = Focus.children.map((element) => (element.flow === 1 ? {...element, focus: true} : element))
 
  if(seeds === true){
  if(Focus.goal === true){setDestination(true)}
  const newScope = object.children.map((element) => (element.focus === true ? {...element, focus: false, active: true, seeds:true, tracked:true, children: NewSubScope} : element))
  const newObject = {...object, children: newScope, active:false, seeds:false}
  return newObject
  } else {
  if(Focus.seedpack === true){setSeeds(true)}
  const newScope = object.children.map((element) => (element.focus === true ? {...element, focus: false, active: true, tracked: true, children: NewSubScope} : element))
  const newObject = {...object, children: newScope, active:false}
  return newObject}}

function turnFocusLeftInScope(objekt){
  if(objekt.limit === true){console.log("nothing to turn left here")} else {
  const scope = objekt.children
  const Focus = scope.find((element)=>(element.focus === true))
  const nextFocusIndex = Focus.flow === scope.length ? 1 : Focus.flow + 1
  const scopeA = scope.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
  const scopeB = scopeA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
  return {...objekt, children:scopeB}}}

function turnFocusRightInScope(objekt){
  if(objekt.limit === true){console.log("nothing to turn right here")} else {
  const scope = objekt.children
  const Focus = scope.find((element)=>(element.focus === true))
  const nextFocusIndex = Focus.flow === 1 ? scope.length : Focus.flow - 1
  const scopeA = scope.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
  const scopeB = scopeA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
  return {...objekt, children:scopeB}}}

function hopDownInScope(object){
  const Current = object.children.find((element) => (element.active === true))

  if(seeds === true)
  
          {if(object.goal === true){setDestination(true)}
          if (Current.limit === true){
          const newScope = object.children.map((element) => (element === Current? {...element, focus: true, active: false, seeds:false, tracked: false} : element))
          const newObject = {...object, children: newScope, active:true, seeds:true}
          return newObject
          } else {
          const NewSubChildren = Current.children.map((element) => ({...element, focus: false}))
          const newScope = object.children.map((element) => (element === Current? {...element, focus: true, active: false, seeds:false, tracked: false, children: NewSubChildren} : element))
          const newObject = {...object, children: newScope, active:true, seeds:true}
          return newObject}} 
      
  else    {if(object.seedpack === true){
          setSeeds(true)}

          if (Current.limit === true){
          const newScope = object.children.map((element) => (element === Current? {...element, focus: true, active: false, tracked: false} : element))
          const newObject = {...object, children: newScope, active:true}
          return newObject
              } else {
          const NewSubScope = Current.children.map((element) => ({...element, focus: false}))
          const newScope = object.children.map((element) => (element === Current? {...element, focus: true, active: false, tracked: false, children: NewSubScope} : element))
          const newObject = {...object, children: newScope, active:true}
          return newObject
          }}}

// moving functions scope

function hopUpNow(){
  let Base = galaxy[0]
  if (Base.active === true){Beam1(hopUpInScope, Base)} else {
  if (track(Base).active === true){Beam2(hopUpInScope, Base)} else {
  if (track(track(Base)).active === true && track(track(Base)).limit !== true ){Beam3(hopUpInScope, Base)}  
  else {console.log("nothing to go up here")}
 }}}

function turnFocusLeftNow(){
  let Base = galaxy[0]
  if (Base.active === true){Beam1(turnFocusLeftInScope, Base)} else {
  if (track(Base).active === true){Beam2(turnFocusLeftInScope, Base)} else {
  if (track(track(Base)).active === true  && track(track(Base)).limit !== true ){Beam3(turnFocusLeftInScope, Base)}  
  else {console.log("nothing to turn left here")}
 }}}

function turnFocusRightNow(){
  let Base = galaxy[0]
  if (Base.active === true){Beam1(turnFocusRightInScope, Base)} else {
  if (track(Base).active === true){Beam2(turnFocusRightInScope, Base)} else {
  if (track(track(Base)).active === true  && track(track(Base)).limit !== true ){Beam3(turnFocusRightInScope, Base)}  
  else {console.log("nothing to turn right here")}
 }}}

function hopDownNow(){
  let Base = galaxy[0]
  if (Base.active === true){
  console.log("nothing to go down here")} else {
  if (track(Base).active === true){Beam1(hopDownInScope, Base)} else {
  if (track(track(Base)).active === true){Beam2(hopDownInScope, Base)} else 
  {Beam3(hopDownInScope, Base)}
  }}}

// operation functions
      
function Beam1(myFunction, actualBase){
  setGalaxy([myFunction(actualBase)])
  setGlobalCount(globalCount+1)}
      
function Beam2(myFunction, actualBase){
  const baseOne = track(actualBase)
  const newBaseOne = myFunction(baseOne)
  setGalaxy([integrateScope(actualBase, baseOne, newBaseOne)])
  setGlobalCount(globalCount+1)}
      
function Beam3(myFunction, actualBase){
  const baseOne = track(actualBase)
  const baseTwo = track(baseOne)
  const newBaseTwo = myFunction(baseTwo)
  const newBaseOne = integrateScope(baseOne,baseTwo, newBaseTwo)
  setGalaxy([integrateScope(actualBase, baseOne, newBaseOne)])
  setGlobalCount(globalCount+1)} 


return(
<>
{galaxy.map((one)=><MyGalaxy key={one.name} scope={one.scope} flow={one.flow} active={one.active} focus={one.focus} seedpack={one.seedpack} seedstatus={seeds} goal={one.goal}>{one.id}
    {one.children.map((two)=><MyGalaxy key={two.name} scope={two.scope} distx={angleToCooX(two.angl, two.dist)} disty={angleToCooY(two.angl, two.dist)} flow={two.flow} type={two.type} active={two.active} focus={two.focus} seedpack={two.seedpack} seedstatus={seeds} goal={two.goal}>{two.id}
      {two.children.map((three)=><MyGalaxy key={three.name} scope={three.scope} distx={angleToCooX(three.angl, three.dist)} disty={angleToCooY(three.angl, three.dist)} flow={three.flow} type={three.type} active={three.active} focus={three.focus} seedpack={three.seedpack} seedstatus={seeds} goal={three.goal}>{three.id}
      {three.children.map((four)=><MyGalaxy key={four.name} scope={three.scope} distx={angleToCooX(four.angl, four.dist)} disty={angleToCooY(four.angl, four.dist)} type={four.type} flow={four.flow} active={four.active} focus={four.focus} seedpack={four.seedpack} seedstatus={seeds} goal={four.goal}>{four.id}
                  </MyGalaxy>)}
                  </MyGalaxy>)}
                  </MyGalaxy>)}
                  </MyGalaxy>)}


<TestNavi>
<TestNaviInner>
<TestButton1 onClick = {hopUpNow}>BEAM<br></br>FURTHER</TestButton1>
<TestButton4 onClick = {hopDownNow}>BEAM<br></br>CLOSER</TestButton4>
<TestButton2 onClick = {turnFocusLeftNow}>ANTI<br></br>CLOCK-<br></br>WISE</TestButton2>
<TestButton3 onClick = {turnFocusRightNow}>CLOCK-<br></br>WISE</TestButton3>
</TestNaviInner>
</TestNavi>

<InfoFix>
<GlobalCounter max={max} count={globalCount}>Count: {globalCount} / {max}</GlobalCounter>
<SeedInfo thereornot={seeds}>SEEDS PICKED UP</SeedInfo>
<DestInfo hereornot={destination}>YOU MADE IT!</DestInfo>
</InfoFix>



<LegendFix>
  <p>[how this game works]</p>
  <p>Current position (spaceship): hotpink</p>
  <p>Focus-position: skyblue</p>
  <p>***</p>
  <p>YOUR TASK:</p>
  <p>move your spaceship to pick up the seeds (2.1) and bring them to your destination (3.2.3)</p>
  <p>***</p>
  <p>NAVIGATION:</p>
  <p>BEAM FURTHER = hop to further planet from base (e.g. from 2.2 to 2.2.3)</p>
  <p>The focus indicates, which planet you will hop</p>
  <p>Focus can be turned clockwise / anti clockwise by corresponding button</p>
  <p>***</p>
  <p>BEAM DOWN = Hop down to closer planet (e.g. from 3.1.2 you will hop down to 3.1)</p>
  <p>***</p>
  <p>Have a nice journey!</p>
 </LegendFix>

 <CockpitFix>
</CockpitFix>
</>
)
}

const MyGalaxy = styled.div`
top:${props => props.distx}px;
left:${props => props.disty}px;

text-align:center;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;

${(props) => props.scope === 0 &&
  css`
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  height: 100px;
  width: 100px;`}

${(props) => props.scope === 1 &&
  css`
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  height: 80px;
  width: 80px;`}

${(props) => props.scope === 2 &&
  css`
  background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
  height: 60px;
  width: 60px;`}

${(props) => props.scope === 3 &&
  css`
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);;
  height: 50px;
  width: 50px;`}

${(props) => props.focus === true &&
  css`
  box-shadow: 0.3em 0.3em 3em 0.2em skyblue;
  border:5px solid skyblue`}

${(props) => (props.active === true && props.seedstatus === false) &&
  css`
  box-shadow: 0.2em 0.2em 2em 0.2em hotpink;
  border:5px solid hotpink;`}

${(props) => (props.seedstatus === false && props.seedpack === true) &&
  css`
  box-shadow: 0.2em 0.2em 2em 0.2em #00f700;;
  border:3px solid #00f700;`}

${(props) => (props.active === true && props.seedstatus === true) &&
  css`
  box-shadow: 0.2em 0.2em 2em 0.2em #00f700;;
  border:5px solid #00f700;`}
`
const TestButton1 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:absolute;
    left:100px;
    top:0;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center:
    padding:3px;
    cursor:pointer;

    p{test-align:center;}
    `
const TestButton2 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:absolute;
    left:0;
    top:100px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center:
    padding:3px;
    cursor:pointer;
    `

const TestButton3 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:absolute;
    left:200px;
    top:100px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center:
    padding:3px;
    cursor:pointer;
    `
const TestButton4 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:absolute;
    left:100px;
    bottom:0px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center:
    padding:3px;
    cursor:pointer;
    `

    const TestButton5 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:absolute;
    left:580px;
    bottom:100px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center:
    padding:3px;
    cursor:pointer;
    `

const LegendFix = styled.div`
color:white;
font-size:14px;
position:fixed;
right:50px;
width:200px;
top:70px;
`
const CockpitFix = styled.div`
position:fixed;
left:10px;
top:10px;`

const TestNavi = styled.div`
position:fixed;
left:10px;
top:10px;
width:300px;
height:300px;
display:flex;`

const TestNaviInner = styled.div`
position:relative;
width:100%;
height:100%;`

const InfoFix = styled.div`
position:fixed;
left:30px;
bottom:30px;
width:300px;
display:flex;
flex-direction:column;
justify-content:flex-end;
color:white;
font-size: 24px;
`
const SeedInfo = styled.p`
color: #00f700;
${(props) => props.thereornot === false &&
  css`
display:none`}`

const DestInfo = styled.p`
color: hotpink;
${(props) => props.hereornot === false &&
  css`
display:none`}`

const GlobalCounter = styled.p`
color: white;
${(props) => props.count >= props.max &&
  css`
  animation: blinker 1s linear infinite;
  @keyframes blinker { 50% {opacity: 0;}}
  color:yellow;`}`

