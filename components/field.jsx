import styled, {css} from "styled-components";
import { useState } from "react";
import {levelOne} from "../testlevel";
import { Cockpit } from "./cockpit";

export function Field(){

const [galaxy, setGalaxy] = useState(levelOne)

// rendering functions

function toRadians(degrees) {
    return degrees * (Math.PI / 180);}

function angleToCooX(angle, distance){
  const X = Math.cos(toRadians(angle)) * distance
    return parseInt(X)} 

function angleToCooY(angle, distance){  
    const Y = Math.sin(toRadians(angle)) * distance             
    return parseInt(Y)}

// utility functions
  
function track(objekt){
  const thisone = objekt.children.find((element)=>(element.tracked === true))
  return thisone}

function IntegrateScope(thisBase, nextBase, nextBaseNew) {
  const newScope = thisBase.children.map((element)=>(element === nextBase ? nextBaseNew : element))
  const newBase = {...thisBase, children:newScope}
  return newBase}

// operation functions
      
function Beam1(myFunction, actualBase){
  setGalaxy([myFunction(actualBase)])}
      
function Beam2(myFunction, actualBase){
  const baseOne = track(actualBase)
  const newBaseOne = myFunction(baseOne)
  setGalaxy([IntegrateScope(actualBase, baseOne, newBaseOne)])}
      
function Beam3(myFunction, actualBase){
  const baseOne = track(actualBase)
  const baseTwo = track(baseOne)
  const newBaseTwo = myFunction(baseTwo)
  const newBaseOne = IntegrateScope(baseOne,baseTwo, newBaseTwo)
  setGalaxy([IntegrateScope(actualBase, baseOne, newBaseOne)])} 
      
// moving functions global

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

// moving functions scope

function hopUpInScope(object){
  
  const Focus = object.children.find((element) => (element.focus === true))
  const NewSubChildren = Focus.children.map((element) => (element.flow === 1 ? {...element, focus: true} : element))
  const newChildren = object.children.map((element) => (element.focus === true ? {...element, focus: false, active: true, tracked:true, children: NewSubChildren} : element))
  const newObject = {...object, children: newChildren, active:false}
  return newObject}

function turnFocusLeftInScope(objekt){
  if(objekt.limit === true){console.log("nothing to turn left here")} else {
  const scopeX = objekt.children
  const Focus = scopeX.find((element)=>(element.focus === true))
  const nextFocusIndex = Focus.flow === scopeX.length ? 1 : Focus.flow + 1
  const scopeXA = scopeX.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
  const scopeXNew = scopeXA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
  return {...objekt, children:scopeXNew}}}

function turnFocusRightInScope(objekt){
  if(objekt.limit === true){console.log("nothing to turn right here")} else {
  const scopeX = objekt.children
  const Focus = scopeX.find((element)=>(element.focus === true))
  const nextFocusIndex = Focus.flow === 1 ? scopeX.length : Focus.flow - 1
  const scopeXA = scopeX.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
  const scopeXNew = scopeXA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
  return {...objekt, children:scopeXNew}}}

function hopDownInScope(object){
  const Current = object.children.find((element) => (element.active === true))

  if (Current.limit === true){
  const newChildren = object.children.map((element) => (element === Current? {...element, focus: true, active: false, tracked: false} : element))
  const newObject = {...object, children: newChildren, active:true}
  return newObject
  } else {
  const NewSubChildren = Current.children.map((element) => ({...element, focus: false}))
  const newChildren = object.children.map((element) => (element === Current? {...element, focus: true, active: false, tracked: false, children: NewSubChildren} : element))
  const newObject = {...object, children: newChildren, active:true}
  return newObject}}


// INTERVAL FUNCTION

function moveNow(input){
if(input === 1){turnFocusRightNow()} else {
  if(input === 2){turnFocusLeftNow()} else {
    if(input === 3){hopUpNow()} else {
      if(input === 4){hopDownNow()} else {console.log("makes no sense")

      }
    }
  }
}}

// for test array A

const testArrayA = [2,2,2]
const[current,setCurrent] = useState(0)

function moveLineA(){

  const go = setInterval(move, 1000);
  function stopMoving(){clearInterval(go)}

function move() {
  if (current === testArrayA.length){stopMoving()} else {}}


  // const doThis = testArrayA[current]
  // console.log(doThis)
  // moveNow(doThis)
  // setCurrent(current++)}
   
  }

return(
<>
{galaxy.map((one)=><MyGalaxy1 key={one.name} distancev={one.distv} type={one.type} flow={one.flow} active={one.active} focus={one.focus}>{one.id}
    {one.children.map((two)=><MyGalaxy2 key={two.name} distx={angleToCooX(two.angl, two.dist)} disty={angleToCooY(two.angl, two.dist)} flow={two.flow} type={two.type} active={two.active} focus={two.focus}>{two.id}
      {two.children.map((three)=><MyGalaxy3 key={three.name} distx={angleToCooX(three.angl, three.dist)} disty={angleToCooY(three.angl, three.dist)} flow={three.flow} type={three.type} active={three.active} focus={three.focus}>{three.id}
      {three.children.map((four)=><MyGalaxy4 key={four.name} distx={angleToCooX(four.angl, four.dist)} disty={angleToCooY(four.angl, four.dist)} type={four.type} flow={four.flow} active={four.active} focus={four.focus}>{four.id}
                  </MyGalaxy4>)}
                  </MyGalaxy3>)}
                  </MyGalaxy2>)}
                  </MyGalaxy1>)}


<TestButton1 onClick = {moveLineA}>TEST A</TestButton1>
<TestButton2 onClick = {hopUpNow}>UP</TestButton2>
<TestButton3 onClick = {hopDownNow}>DOWN</TestButton3>
<TestButton4 onClick = {turnFocusLeftNow}>LEFT</TestButton4>
<TestButton5 onClick = {turnFocusRightNow}>RIGHT</TestButton5>
{/* <TestButton2 onClick = {moveLineB}>TEST B</TestButton2>
<TestButton3 onClick = {moveLineC}>TEST C</TestButton3> */}

<LegendFix>
  
  <p>[explanations]</p>
  <p>Current position (spaceship): skyblue</p>
  <p>Focus-position: green</p>
  <p>***</p>
  <p>JUMP FURTHER = jump to further planet (e.g. from 2.2 to 2.2.3)</p>
  <p>The focus indicates, which planet you will hop up</p>
  <p>***</p>
  <p>JUMP DOWN = Jump down to closer (e.g. from 3.1.2 you will hop down to 3.1)</p>
  <p>***</p>
  <p>The default focus position of a scope is indicated by white shadow / id ...1</p>
 </LegendFix>

 <CockpitFix>
</CockpitFix>
</>
)
}

const MyGalaxy1 = styled.div`
top:${props => props.distx}px;
left:${props => props.disty}px;

text-align:center;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
height: 100px;
width: 100px;
border-radius:50%;

${(props) => props.active === true &&
    css`
    box-shadow: 0.2em 0.2em 2em 0.2em skyblue;
    border:3px solid skyblue;`}

${(props) => props.focus === true &&
    css`
    box-shadow: 0.2em 0.2em 2em 0.2em #00f700;;
    border:3px solid #00f700;`}
`

const MyGalaxy2 = styled.div`
top:${props => props.distx}px;
left:${props => props.disty}px;
      
text-align:center;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
height: 70px;
width: 70px;
border-radius:50%;
transform:translate(15px,15px);

   
  ${(props) => props.active === true &&
    css`
    box-shadow: 0.2em 0.2em 2em 0.2em skyblue;
    border:3px solid skyblue;
    `}
      
  ${(props) => props.focus === true &&
    css`
    box-shadow: 0.2em 0.2em 2em 0.2em #00f700;;
    border:3px solid #00f700;`}`

const MyGalaxy3 = styled.div`
top:${props => props.distx}px;
left:${props => props.disty}px;
      
text-align:center;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
height: 70px;
width: 70px;
border-radius:50%;
transform:translate(15px,15px);

${(props) => props.active === true &&
    css`
    box-shadow: 0.2em 0.2em 2em 0.2em skyblue;
    border:3px solid skyblue;`}
      
${(props) => props.focus === true &&
    css`
    box-shadow: 0.3em 0.3em 3em 0.2em #00f700;
    border:3px solid #00f700`}
`

const MyGalaxy4 = styled.div`
top:${props => props.distx}px;
left:${props => props.disty}px;
      
text-align:center;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);;
height: 50px;
width: 50px;
border-radius:50%;
transform:translate(15px,15px);

${(props) => props.active === true &&
  css`
  box-shadow: 0.2em 0.2em 2em 0.2em skyblue;
  border:3px solid skyblue;`}
    
${(props) => props.focus === true &&
  css`
  box-shadow: 0.3em 0.3em 3em 0.2em #00f700;
  border:3px solid #00f700`}
    
`
const TestButton1 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:fixed;
    left:100px;
    bottom:100px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center:
    padding:3px;
    cursor:pointer;
    `
const TestButton2 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:fixed;
    left:220px;
    bottom:100px;
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
    position:fixed;
    left:340px;
    bottom:100px;
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
    position:fixed;
    left:460px;
    bottom:100px;
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
    position:fixed;
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
