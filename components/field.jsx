import styled, {css} from "styled-components";
import { useState, useEffect } from "react";
import {levelOne, max} from "../testlevel";
import {angleToCooX, angleToCooY} from "../utils/rendering-functions"
import {track, integrateScope} from "../utils/utility-functions"
import { Cockpit } from "./cockpit";
import { Legend } from "./legend";

export function Field(){
const [galaxy, setGalaxy] = useState(levelOne)
const [seeds, setSeeds] = useState(false)
const [destination, setDestination] = useState(false)
const [globalCount, setGlobalCount] = useState(0)
const [intCount, setIntCount] = useState(0)
const [myIntId, setMyIntId] = useState(0);
const [next, setNext] = useState(0);

function up(){setGalaxy(hopUpNow(galaxy))}
function down(){setGalaxy(hopDownNow(galaxy))}
function right(){setGalaxy(turnFocusRightNow(galaxy))}
function left(){setGalaxy(turnFocusLeftNow(galaxy))}


// moving functions scope

function hopUpInScope(object){
  const Focus = object.children.find((element) => (element.focus === true))
  if (seeds === true) { if (Focus.goal === true){setDestination(true)}} else { if (Focus.seedpack === true){setSeeds(true)}}
  const NewSubScope = Focus.children.map((element) => (element.flow === 1 ? {...element, focus: true} : element))
  const newScope = object.children.map((element) => (element.focus === true ? {...element, focus: false, active: true, tracked:true, children: NewSubScope} : element))
  const newObject = {...object, children: newScope, active:false, seeds:false}
  return newObject}

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

  if(seeds === true) {if(object.goal === true){setDestination(true)}} else { if (object.seedpack === true){setSeeds(true)}}

     if (Current.limit === true){
    const newScope = object.children.map((element) => (element === Current? {...element, focus: true, active: false, tracked: false} : element))
    const newObject = {...object, children: newScope, active:true}
    return newObject
        } else {
    const NewSubScope = Current.children.map((element) => ({...element, focus: false}))
    const newScope = object.children.map((element) => (element === Current? {...element, focus: true, active: false, tracked: false, children: NewSubScope} : element))
    const newObject = {...object, children: newScope, active:true}
    return newObject}}

// moving functions global

function hopUpNow(universe){
  let Base = universe[0]
  if (Base.active === true){return Beam1(hopUpInScope, Base)} else {
  if (track(Base).active === true){return Beam2(hopUpInScope, Base)} else {
  if (track(track(Base)).active === true && track(track(Base)).limit !== true ){return Beam3(hopUpInScope, Base)}
  else {console.log("nothing to go up here")
  return universe}
 }}}

function turnFocusLeftNow(universe){
  let Base = universe[0]
  if (Base.active === true){return Beam1(turnFocusLeftInScope, Base)} else {
  if (track(Base).active === true){return Beam2(turnFocusLeftInScope, Base)} else {
  if (track(track(Base)).active === true  && track(track(Base)).limit !== true ){return Beam3(turnFocusLeftInScope, Base)}
  else {console.log("nothing to turn left here")
  return universe}
 }}}

function turnFocusRightNow(universe){
  let Base = universe[0]
  if (Base.active === true){return Beam1(turnFocusRightInScope, Base)} else {
  if (track(Base).active === true){return Beam2(turnFocusRightInScope, Base)} else {
  if (track(track(Base)).active === true  && track(track(Base)).limit !== true ){return Beam3(turnFocusRightInScope, Base)}
  else {console.log("nothing to turn right here")
  return universe}
 }}}

function hopDownNow(universe){
  let Base = universe[0]
  if (Base.active === true){
  console.log("nothing to go down here")
  return universe} else {
  if (track(Base).active === true){return Beam1(hopDownInScope, Base)} else {
  if (track(track(Base)).active === true){return Beam2(hopDownInScope, Base)} else
  {return Beam3(hopDownInScope, Base)}
  }}}

// operation functions

function Beam1(myFunction, actualBase){
  setGlobalCount(globalCount+1)
  const beamed1 = [myFunction(actualBase)]
  return beamed1}

function Beam2(myFunction, actualBase){
  setGlobalCount(globalCount+1)
  const baseOne = track(actualBase)
  const newBaseOne = myFunction(baseOne)
  const beamed2 = [integrateScope(actualBase, baseOne, newBaseOne)]
  return beamed2 }

function Beam3(myFunction, actualBase){
  setGlobalCount(globalCount+1)
  const baseOne = track(actualBase)
  const baseTwo = track(baseOne)
  const newBaseTwo = myFunction(baseTwo)
  const newBaseOne = integrateScope(baseOne,baseTwo, newBaseTwo)
  const beamed3 = [integrateScope(actualBase, baseOne, newBaseOne)]
  return beamed3
 }

 const testArr = ["L", "R", "L"]
 const length = testArr.length

 const moveThis = () => {
  const myInt = setInterval(() => {
    setIntCount(prevCount => prevCount + 1)}, 500)
    setMyIntId(myInt)}

if(intCount === length){
  if(myIntId) {
    clearInterval(myIntId);
    setMyIntId(0)}}

useEffect(() => {

    const hereNow = testArr[intCount]
    if(hereNow === "L"){left()} else {
      if(hereNow === "R"){right()} else {
        if(hereNow === "U"){up()} else {
          if(hereNow === "D"){down()} else {
            console.log("error")}}}}

}, [myIntId] )

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
<TestButton1 onClick = {up}><p>STOP</p></TestButton1>
<TestButton4 onClick = {down}><p>BEAM CLOSER</p></TestButton4>
<TestButton2 onClick = {left}><p>ANTI CLOCK WISE</p></TestButton2>
<TestButton3 onClick = {right}><p>CLOCK WISE</p></TestButton3>
<TestButton5 onClick = {moveThis}><p>TEST</p></TestButton5>
</TestNaviInner>
</TestNavi>

<InfoFix>
<GlobalCounter max={max} count={globalCount}>Count: {intCount} / Next: {next}</GlobalCounter>
<SeedInfo thereornot={seeds}>SEEDS PICKED UP</SeedInfo>
<DestInfo hereornot={destination}>YOU MADE IT!</DestInfo>
</InfoFix>


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

${(props) => props.goal === true &&
    css`
    box-shadow: 0.3em 0.3em 3em 0.2em white;
    border:5px solid white`}

${(props) => props.focus === true &&
  css`
  box-shadow: 0.3em 0.3em 3em 0.2em blue;
  border:5px solid blue`}

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
    padding:3px;
    cursor:pointer;
    p{text-align:center;}
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
    padding:3px;
    cursor:pointer;
    p{text-align:center;}
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
    padding:3px;
    cursor:pointer;
    p{text-align:center}
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
    padding:3px;
    cursor:pointer;
    p{text-align:center}
    `
    const TestButton5 = styled.div`
    height:80px;
    width:80px;
    border:5px solid white;
    border-radius:50%;
    position:absolute;
    left:110px;
    bottom:110px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:3px;
    cursor:pointer;
    p{text-align:center;}
    `

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
width:400px;
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
color: skyblue;
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

