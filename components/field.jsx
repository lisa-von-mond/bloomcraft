import styled, {css} from "styled-components";
import { useState, useEffect, useRef } from "react";
import {levelOne} from "../levels/testlevel";
import {levelTwo} from "../levels/testlevel2";
import {track, Beam1, Beam2, Beam3} from "../utils/utility-functions"
import { Galaxy } from "./galaxy";
import { Cockpit } from "./cockpit";
import { Console } from "./console";
import { Legend } from "./legend";
import Image from 'next/image';
import background_image from '../public/images/galaxy.jpg';

export function Field(){
const [galaxy, setGalaxy] = useState(levelTwo) // general layout
const [seeds, setSeeds] = useState(false) // is true when seeds picked up
const [destination, setDestination] = useState(false) // is true when destination is reached
const [globalCount, setGlobalCount] = useState(0) // counts glabal amount of movings
const [intCount, setIntCount] = useState(0) // counts interval and triggers use effect
const [myIntId, setMyIntId] = useState(0);
const [commandLine, setCommandLine] = useState([]) // visible Array of commands in line (for cockpit mapping)
const [commands, setCommands] = useState([]) // invisible Array of commands in line (for moveNow function)
const [tempArr, setTempArr] = useState([]) // amount of commands in cockpit console (blue)
const [cpStatus, setCpStatus] = useState(1) 
const [thisPlanet, setThisPlanet] = useState("caro") // name and id of current planet
const [thisId, setThisId] = useState(0) // name and id of current planet
const [focusNow, setFocusNow] = useState("linh")
const movingArr = ["ZERO", ...commands.flat(3)] 
const length = movingArr.length
const cockpitCount = commands.length // amount of commands in cockpit console (green)

function up(){setGalaxy(hopUpNow(galaxy))}
function down(){setGalaxy(hopDownNow(galaxy))}
function right(){setGalaxy(turnFocusRightNow(galaxy))}
function left(){setGalaxy(turnFocusLeftNow(galaxy))}

// moving functions scope

function hopUpInScope(object){
  const Focus = object.children.find((element) => (element.focus === true))
  setThisPlanet(Focus.name)
  setThisId (Focus.id)
  if (seeds === true) { if (Focus.goal === true){setDestination(true)}} else { if (Focus.greens === true){setSeeds(true)}}
  const NewSubScope = Focus.children.map((element) => (element.flow === 1 ? {...element, focus: true} : element))
  const nextFocus = (Focus.children.find((element)=>(element.flow === 1)))
  setFocusNow(nextFocus.name)
  const newScope = object.children.map((element) => (element.focus === true ? {...element, focus: false, active: true, tracked:true, children: NewSubScope} : element))
  const newObject = {...object, children: newScope, active:false, seeds:false}
  return newObject}

function turnFocusLeftInScope(objekt){
  if(objekt.limit === true){console.log("nothing to turn left here")} else {
  const scope = objekt.children
  const Focus = scope.find((element)=>(element.focus === true))
  const nextFocusIndex = Focus.flow === scope.length ? 1 : Focus.flow + 1
  const nextFocus = (scope.find((element)=>(element.flow === nextFocusIndex)))
  setFocusNow(nextFocus.name)
  const scopeA = scope.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
  const scopeB = scopeA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
  return {...objekt, children:scopeB}}}

function turnFocusRightInScope(objekt){
  if(objekt.limit === true){console.log("nothing to turn right here")} else {
  const scope = objekt.children
  const Focus = scope.find((element)=>(element.focus === true))
  const nextFocusIndex = Focus.flow === 1 ? scope.length : Focus.flow - 1
  const nextFocus = (scope.find((element)=>(element.flow === nextFocusIndex)))
  setFocusNow(nextFocus.name)
  const scopeA = scope.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
  const scopeB = scopeA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
  return {...objekt, children:scopeB}}}


function hopDownInScope(object){
  const Current = object.children.find((element) => (element.active === true))
  setThisPlanet(Current.name)
  setThisId (Current.id)
  setFocusNow(Current.name)

  if(seeds === true) {if(object.goal === true){setDestination(true)}} else { if (object.greens === true){setSeeds(true)}}

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

function addRight(){
if(cpStatus === 1){
  setCommandLine([...commandLine, "right"])
  setCommands([...commands, "right"])}
else {setTempArr([...tempArr, "right"])}}

function addLeft(){
  if(cpStatus === 1){
    setCommandLine([...commandLine, "left"])
    setCommands([...commands, "left"])}
  else {setTempArr([...tempArr, "left"])}}
  
function addUp(){
  if(cpStatus === 1){
      setCommandLine([...commandLine, "far"])
      setCommands([...commands, "far"])}
  else {setTempArr([...tempArr, "far"])}}

function addDown(){
  if(cpStatus === 1){
     setCommandLine([...commandLine, "close"])
     setCommands([...commands, "close"])}
  else {setTempArr([...tempArr, "close"])}}

function addTwo(){
  if(cpStatus === 1)
 {setTempArr([2])
  setCpStatus(2)}}

 function addThree(){
  if(cpStatus === 1)
 {setTempArr([3])
  setCpStatus(3)}}
    
function del(){setCommandLine(commandLine.slice(0, -1))
  setCommands(commands.slice(0, -1))}

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
        if(hereNow === "far"){up()} else {
          if(hereNow === "close"){down()}}}}}
      
, [intCount])

const move = () => {
  const myInt = setInterval(() => {
    setIntCount(prevCount => prevCount + 1)}, 500)
    setMyIntId(myInt)}

if(intCount === length){
  if(myIntId) {
    clearInterval(myIntId);
    setMyIntId(0)
    setIntCount(0)
    setCommandLine([])
    setGlobalCount(prevCount => prevCount + cockpitCount)
    setCommands([])}}
  
return(
<>

<BackgroundFrame>
<FieldFrame>
<WholeGalaxy>
<Galaxy galaxy={galaxy} seeds={seeds} destination={destination}/>
</WholeGalaxy>
</FieldFrame>
<Cockpit move={move} addUp={addUp} addDown={addDown} addRight={addRight} addLeft={addLeft} addThree={addThree} addTwo={addTwo} del={del} set={set} commandLine={commandLine} tempArr={tempArr} cockpitCount={cockpitCount}/>
<Console globalCount={globalCount} thisPlanet={thisPlanet} seeds={seeds} thisId={thisId} destination={destination} focusNow={focusNow} />
</BackgroundFrame>

</>
)}

const FieldFrame = styled.div`
height:100vh;
width:100vh;
position:fixed;
display:flex;
align-items:center;
justify-content:center;
scroll-behavior: smooth;
overflow:hidden;
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
position:fixed;
display:flex;
align-items:center;
justify-content:center;
`



