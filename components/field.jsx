import styled, {css} from "styled-components";
import { useState } from "react";
import {levelOne} from "../testlevel";

export function Field(){

const [galaxy, setGalaxy] = useState(levelOne)

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function angleToCooX(angle, distance){
  const X = Math.cos(toRadians(angle)) * distance
    return parseInt(X)} 

function angleToCooY(angle, distance){  
    const Y = Math.sin(toRadians(angle)) * distance             
    return parseInt(Y)}



    function turnRight(){

      const Base = galaxy[0] /// Objekt
      
      function turnFocusRightInScope(objekt){
        const scopeX = objekt.children
        const Focus = scopeX.find((element)=>(element.focus === true))
        const nextFocusIndex = Focus.flow === 1 ? scopeX.length : Focus.flow - 1
        const scopeXA = scopeX.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
        const scopeXNew = scopeXA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
        return {...objekt, children:scopeXNew}
    } 
      
       // bekommt ein Objekt als Argument, gibt Objekt mit verändertem Children-Array aus
      
      if (Base.active === true){
      
      const newGalaxy = [turnFocusRightInScope(Base)]
      setGalaxy(newGalaxy)
      
      } else {
      
      const subBaseOne = Base.children.find((element)=>(element.active === true)) // Objekt
      const newSubBaseOne = turnFocusRightInScope(subBaseOne)
      const NewScopeOne = Base.children.map((element)=>(element === subBaseOne ? newSubBaseOne : element))
      const NewBase = {...Base, children: NewScopeOne}
      setGalaxy([NewBase]) }
      
  }
  
  function turnLeft(){
  
  const Base = galaxy[0] /// Objekt
  
  function turnFocusLeftInScope(objekt){
    const scopeX = objekt.children
    const Focus = scopeX.find((element)=>(element.focus === true))
    const nextFocusIndex = Focus.flow === scopeX.length ? 1 : Focus.flow + 1
    const scopeXA = scopeX.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
    const scopeXNew = scopeXA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
    return {...objekt, children:scopeXNew}}
  
  if (Base.active === true){
  
  const newGalaxy = [turnFocusLeftInScope(Base)]
  setGalaxy(newGalaxy)
  
  } else {
  
  const subBaseOne = Base.children.find((element)=>(element.active === true)) // Objekt
  const newSubBaseOne = turnFocusLeftInScope(subBaseOne)
  const NewScopeOne = Base.children.map((element)=>(element === subBaseOne ? newSubBaseOne : element))
  const NewBase = {...Base, children: NewScopeOne}
  setGalaxy([NewBase])}
  
  }
  
  function upNow(){
  
  const Base = galaxy[0] /// Objekt
  
  function hopUpInScope(object){
  
    const Focus = object.children.find((element) => (element.focus === true))
    const NewSubChildren = Focus.children.map((element) => (element.flow === 1 ? {...element, focus: true} : element))
    const newChildren = object.children.map((element) => (element.focus === true ? {...element, focus: false, active: true, children: NewSubChildren} : element))
    const newObject = {...object, children: newChildren, active:false}
    return newObject
  }
  
  if (Base.active === true){
  
    const newGalaxy = [hopUpInScope(Base)]
    setGalaxy(newGalaxy)
    
    } else {
    
    const subBase = Base.children.find((element)=>(element.active === true)) // Objekt
    const newSubBase = hopUpInScope(subBase)
    const NewScopeOne = Base.children.map((element)=>(element === subBase ? newSubBase : element))
    const NewBase = {...Base, children: NewScopeOne}
    setGalaxy([NewBase])}
  }

return(
<>
{galaxy.map((one)=><MyGalaxy key={one.name} distancev={one.distv} type={one.type} active={one.active} focus={one.focus}>
    {one.children.map((two)=><MyGalaxy key={two.name} distx={angleToCooX(two.angl, two.dist)} disty={angleToCooY(two.angl, two.dist)} type={two.type} active={two.active} focus={two.focus}>
  
    {two.children.map((three)=><MyGalaxy key={three.name} distx={angleToCooX(three.angl, three.dist)} disty={angleToCooY(three.angl, three.dist)} type={three.type} active={three.active} focus={three.focus}>
  
    </MyGalaxy>)}

    </MyGalaxy>)}
  </MyGalaxy>)}

<TestButton1 onClick = {upNow}>UP</TestButton1>
<TestButton2>(DOWN)</TestButton2>
<TestButton3 onClick = {turnLeft}>LEFT</TestButton3>
<TestButton4 onClick = {turnRight}>RIGHT</TestButton4>
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

${(props) => props.focus === true &&
css`

`}


  ${(props) => props.type === "planet" &&
  css`
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
    height: 70px;
    width: 70px;
    border-radius:50%;
    transform:translate(15px,15px);
  `}

  ${(props) => props.type === "moon" &&
  css`

  background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
    height: 50px;
    width: 50px;
    border-radius:50%;
    transform:translate(10px,10px);
  `}

  ${(props) => props.type === "sun" &&
  css`

  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  height: 100px;
  width: 100px;
  border-radius:50%;`}

  ${(props) => props.active === true &&
    css`
    box-shadow: 0.2em 0.2em 2em 0.2em gold;`}

  ${(props) => props.focus === true &&
      css`

      box-shadow: 0.3em 0.3em 3em 0.2em hotpink;`}
      `

  const TestButton1 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:fixed;
    left:100px;
    top:100px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    `

  const TestButton2 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:fixed;
    left:100px;
    top:250px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    `

    const TestButton3 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:fixed;
    left:100px;
    top:400px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    `

  const TestButton4 = styled.div`
    height:100px;
    width:100px;
    border:5px solid white;
    border-radius:50%;
    position:fixed;
    left:100px;
    top:550px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    `