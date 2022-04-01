import styled, {css} from "styled-components";
import { useState, useEffect, useRef } from "react";
import {levelOne, max} from "../testlevel";
import {track, Beam1, Beam2, Beam3} from "../utils/utility-functions"
import { Navi } from "./navi";
import { Galaxy } from "./galaxy";
import { Cockpit } from "./cockpit";
import { Legend } from "./legend";

export function Field(){
const [galaxy, setGalaxy] = useState(levelOne)
const [seeds, setSeeds] = useState(false)
const [destination, setDestination] = useState(false)
const [globalCount, setGlobalCount] = useState(0)
const [intCount, setIntCount] = useState(0)
const [myIntId, setMyIntId] = useState(0);
const [moveArr, setMoveArr] = useState(["INIT", "L", "R", "L", "L"])

function up(){setGalaxy(hopUpNow(galaxy))
  setGlobalCount(prevCount => prevCount + 1)}
function down(){setGalaxy(hopDownNow(galaxy))
  setGlobalCount(prevCount => prevCount + 1)}
function right(){setGalaxy(turnFocusRightNow(galaxy))
  setGlobalCount(prevCount => prevCount + 1)}
function left(){setGalaxy(turnFocusLeftNow(galaxy))
  setGlobalCount(prevCount => prevCount + 1)}

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

useEffect(() => {
    const hereNow = moveArr[intCount]
    if(hereNow === "L"){left()} else {
      if(hereNow === "R"){right()} else {
        if(hereNow === "U"){up()} else {
          if(hereNow === "D"){down()} else {
            console.log("nothing")}}}}}
      
, [intCount])

const length = moveArr.length

 const moveThis = () => {
  setGlobalCount(prevCount => prevCount + 1)
  const myInt = setInterval(() => {
    setIntCount(prevCount => prevCount + 1)}, 500)
    setMyIntId(myInt)}

if(intCount === length){
  if(myIntId) {
    clearInterval(myIntId);
    setMyIntId(0)
    setIntCount(0)}}

return(
<>
<Galaxy galaxy={galaxy} seeds={seeds}/>
<InfoFix>
<GlobalCounter max={max} count={globalCount}>Count: {globalCount} / Int-Count: {intCount}</GlobalCounter>
<SeedInfo thereornot={seeds}>SEEDS PICKED UP</SeedInfo>
<DestInfo hereornot={destination}>YOU MADE IT!</DestInfo>
</InfoFix>
<Cockpit/>
<Navi up={up} down={down} left={left} right={right} test={moveThis}/>
</>
)}


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

