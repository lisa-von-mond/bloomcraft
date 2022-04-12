import styled, {css} from "styled-components";
import { useState, useEffect } from "react";
import {level, max, initialPosition, initialFocus, initialId, charge, goal} from "../levels/testlevel";
import {track, Beam1, Beam2, Beam3} from "../utils/utility-functions"
import { Galaxy } from "./galaxy";
import { Cockpit } from "./cockpit";
import { Console } from "./console";
import { GlobalCounter } from "./counter";


export function Field(){
const [galaxy, setGalaxy] = useState(level) // general layout
const [chargeStatus, setChargeStatus] = useState(false) // is true when seeds picked up
const [destination, setDestination] = useState(false) // is true when destination is reached
const [globalCount, setGlobalCount] = useState(0) // counts glabal amount of movings
const [intCount, setIntCount] = useState(0) // counts interval and triggers use effect
const [myIntId, setMyIntId] = useState(0);
const [commandLine, setCommandLine] = useState([]) // visible Array of commands in line (for cockpit mapping)
const [commands, setCommands] = useState([]) // invisible Array of commands in line (for moveNow function)
const [tempArr, setTempArr] = useState([]) // amount of commands in cockpit console (blue)
const [cpStatus, setCpStatus] = useState(1) // factor for command line (1, 2 or 3)
const [thisPlanet, setThisPlanet] = useState(initialPosition) // name of current planet
const [thisId, setThisId] = useState(initialId) // id of current planet
const [focusNow, setFocusNow] = useState("Beam further to " + initialFocus) // current focus position
const [hand, setHand] = useState(true) // layout (console and cockpit right or left side)
const movingArr = ["ZERO", ...commands.flat(3)] 
const length = movingArr.length
const cockpitCount = commands.length // amount of commands in cockpit console (green)
const maxCount = max-globalCount

function up(){setGalaxy(hopUpNow(galaxy))}
function down(){setGalaxy(hopDownNow(galaxy))}
function right(){setGalaxy(turnFocusRightNow(galaxy))}
function left(){setGalaxy(turnFocusLeftNow(galaxy))}

// moving functions scope

function hopUpInScope(object){
  const Focus = object.children.find((element) => (element.focus === true))
  setThisPlanet(Focus.name)
  setThisId (Focus.id)
  if (chargeStatus === true) {if (Focus.goal === true){setDestination(true)}} else { if (Focus.greens === true){setChargeStatus(true)}}
  const NewSubScope = Focus.children.map((element) => (element.flow === 1 ? {...element, focus: true} : element))
  const nextFocus = (NewSubScope.find((element)=>(element.focus === true)))
  console.log(nextFocus)
  if(nextFocus !== undefined){setFocusNow("Beam further out to " + nextFocus.name)}else{setFocusNow("As far out as possible")}
  const newScope = object.children.map((element) => (element.focus === true ? {...element, focus: false, active: true, tracked:true, children: NewSubScope} : element))
  const newObject = {...object, children: newScope, active:false, seeds:false}
  return newObject}

function turnFocusLeftInScope(objekt){
  if(objekt.limit === true){console.log("nothing to turn left here")} else {
  const scope = objekt.children
  const Focus = scope.find((element)=>(element.focus === true))
  const nextFocusIndex = Focus.flow === scope.length ? 1 : Focus.flow + 1
  const nextFocus = (scope.find((element)=>(element.flow === nextFocusIndex)))
  setFocusNow("Beam further out to " + nextFocus.name)
  const scopeA = scope.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
  const scopeB = scopeA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
  return {...objekt, children:scopeB}}}

function turnFocusRightInScope(objekt){
  if(objekt.limit === true){console.log("nothing to turn right here")} else {
  const scope = objekt.children
  const Focus = scope.find((element)=>(element.focus === true))
  const nextFocusIndex = Focus.flow === 1 ? scope.length : Focus.flow - 1
  const nextFocus = (scope.find((element)=>(element.flow === nextFocusIndex)))
  setFocusNow("Beam further out to " + nextFocus.name)
  const scopeA = scope.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
  const scopeB = scopeA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
  return {...objekt, children:scopeB}}}

function hopDownInScope(object){
  const Current = object.children.find((element) => (element.active === true))
  setThisPlanet(object.name)
  setThisId (Current.id)

  if(chargeStatus === true) {if(object.goal === true){setDestination(true)}} else { if (object.greens === true){setChargeStatus(true)}}
     if (Current.limit === true){
    const newScope = object.children.map((element) => (element === Current? {...element, focus: true, active: false, tracked: false} : element))
    const newObject = {...object, children: newScope, active:true}
    setFocusNow("Beam Further out to " + Current.name)
    return newObject
        } else {
    const NewSubScope = Current.children.map((element) => ({...element, focus: false}))
    const newScope = object.children.map((element) => (element === Current? {...element, focus: true, active: false, tracked: false, children: NewSubScope} : element))
    const newObject = {...object, children: newScope, active:true}
    setFocusNow("Beam Further out to " + Current.name)
    return newObject}}

// moving functions global

function hopUpNow(y){
  let Base = y[0]
  if (Base.active === true){return Beam1(hopUpInScope, Base)} else {
  if (track(Base).active === true){return Beam2(hopUpInScope, Base)} else {
  if (track(track(Base)).active === true && track(track(Base)).limit !== true ){return Beam3(hopUpInScope, Base)}
  else {console.log("not possible to hop further here")
  return y}
 }}}

function turnFocusLeftNow(y){
  let Base = y[0]
  if (Base.active === true){return Beam1(turnFocusLeftInScope, Base)} else {
  if (track(Base).active === true){return Beam2(turnFocusLeftInScope, Base)} else {
  if (track(track(Base)).active === true  && track(track(Base)).limit !== true ){return Beam3(turnFocusLeftInScope, Base)}
  else {console.log("nothing to turn left here")
  return y}
 }}}

function turnFocusRightNow(y){
  let Base = y[0]
  if (Base.active === true){return Beam1(turnFocusRightInScope, Base)} else {
  if (track(Base).active === true){return Beam2(turnFocusRightInScope, Base)} else {
  if (track(track(Base)).active === true  && track(track(Base)).limit !== true ){return Beam3(turnFocusRightInScope, Base)}
  else {console.log("nothing to turn right here")
  return y}
 }}}

function hopDownNow(y){
  let Base = y[0]
  if (Base.active === true){
  console.log("nothing to go closer here")
  return y} else {
  if (track(Base).active === true){return Beam1(hopDownInScope, Base)} else {
  if (track(track(Base)).active === true){return Beam2(hopDownInScope, Base)} else
  {return Beam3(hopDownInScope, Base)}
  }}}

// cockpit functions

function add(direction){
  if(cpStatus === 1){
    if(commandLine.length <= maxCount-1){
    setCommandLine([...commandLine, direction])
    setCommands([...commands, direction])}}
  else {if(tempArr.length <= 3){setTempArr([...tempArr, direction])}}}

function addTwo(){
  if(cpStatus === 1 && commandLine.length <= maxCount-1)
 {setTempArr([2])
  setCpStatus(2)}}

 function addThree(){
  if(cpStatus === 1 && commandLine.length <= maxCount-1)
 {setTempArr([3])
  setCpStatus(3)}}

function del1(){
  if(cpStatus === 1)
  {setCommandLine(commandLine.slice(0, -1))
  setCommands(commands.slice(0, -1))} else   
  {console.log("not possible")}}

function del2(){
  if (cpStatus !== 1)
  {setTempArr(tempArr.slice(0, -1))
  if (tempArr.length === 1){setCpStatus(1)}} else
  {console.log("not possible")}}

function set(){
  if(tempArr.length > 1){
  setCommandLine([...commandLine, tempArr])
  setTempArr([])
  setCpStatus(1)
  setCommands([...commands, resolve(tempArr)])} else {console.log("not possible")}}

function resolve(array){
  const moves = array.slice(1)
  if(cpStatus === 2){
  const newArray2 = [...moves, ...moves]
  return newArray2.flat(3)}
  else {
  const newArray3 = [...moves, ...moves, ...moves]
  return newArray3.flat(3)}}

useEffect(() => {
    const hereNow = movingArr[intCount]
    if(hereNow === "left"){left()} else {
      if(hereNow === "right"){right()} else {
        if(hereNow === "out"){up()} else {
          if(hereNow === "in"){down()}}}}}
      
, [intCount])

const move = () => {
  if(cpStatus !== 1){console.log("not possible")} else {
  const myInt = setInterval(() => {
    setIntCount(prevCount => prevCount + 1)}, 500)
    setMyIntId(myInt)}}

if(intCount === length){
  if(myIntId) {
    clearInterval(myIntId);
    setMyIntId(0)
    setIntCount(0)
    setCommandLine([])
    setGlobalCount(prevCount => prevCount + cockpitCount)
    setCommands([])}}

function changeHand(){
  setHand(!hand)}
  
return(
<>
<BackgroundFrame>

<Frame hand={hand}>
<WholeGalaxy>
<Galaxy galaxy={galaxy} chargeStatus={chargeStatus} destination={destination}/>
</WholeGalaxy>
<Quad1></Quad1>
<Quad2></Quad2>
<Quad3></Quad3>
<Quad4></Quad4>
<ArrLeft></ArrLeft>
<ArrUp></ArrUp>
<ArrDown></ArrDown>
<ArrRight></ArrRight>
</Frame>
<Cockpit hand={hand} move={move} add={add} addThree={addThree} addTwo={addTwo} del1={del1} del2={del2} set={set} cpStatus={cpStatus} commandLine={commandLine} tempArr={tempArr} cockpitCount={cockpitCount} maxCount={maxCount}/>
<Console hand={hand} globalCount={globalCount} thisPlanet={thisPlanet} chargeStatus={chargeStatus} thisId={thisId} destination={destination} focusNow={focusNow} charge={charge} goal={goal}/>
<WhichHandFix>
<WhichHand onClick={changeHand}>LEFT/RIGHT</WhichHand>
</WhichHandFix>
</BackgroundFrame>
<GlobalCounter hand={hand} globalCount={globalCount}/>
</>
)}

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

const ArrLeft  =styled.div`
width: 20px; 
height: 20px; 
border: 2px solid var(--mint);
position: absolute;
top:50%-10px;
left:0;
border-radius:5px;
`

const ArrUp  =styled.div`
width: 20px; 
height: 20px; 
border: 2px solid var(--mint);
position: absolute;
left:50%-10px;
top:0;
border-radius:5px;
`

const ArrRight  =styled.div`
width: 20px; 
height: 20px; 
border: 2px solid var(--mint);
position: absolute;
top:50%-10px;
right:0;
border-radius:5px;
`

const ArrDown  =styled.div`
width: 20px; 
height: 20px; 
border: 2px solid var(--mint);
position: absolute;
left:50%-10px;
bottom:0;
border-radius:5px;
`


const BackgroundFrame = styled.div`
height:100vh;
width:100vw;
position:fixed;
display:flex;
align-items:center;
justify-content:center;
`
const WholeGalaxy = styled.div`
height:300px;
width:300px;
bottom:20px;
left:50%;
display:flex;
align-items:center;
justify-content:center;
`
const WhichHandFix = styled.div`
position:fixed;
bottom:10px;
width:100px;
display:flex;
justify-content:space-between
`

const WhichHand = styled.div`
color:white;
cursor:pointer;
`





