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

function downNow(){

const Base = galaxy[0] /// Objekt

function hopDownInScope(object){

  const Current = object.children.find((element) => (element.active === true))
  const NewSubChildren = Current.children.map((element) => ({...element, focus: false}))
  const newChildren = object.children.map((element) => (element === Current? {...element, focus: true, active: false, children: NewSubChildren} : element))
  const newObject = {...object, children: newChildren, active:true}
  return newObject
   }

if (Base.active === true){console.log("hier passiert nichts")}  

else{
  
const subBase = Base.children.find((element)=>(element.active === true))
  
if (subBase){
const newGalaxy = [hopDownInScope(Base)]
setGalaxy(newGalaxy)
  
  } else {

function findActiveChild(objekt){
const thereornot = objekt.children.find((element)=>(element.active === true))
}
  
const subBase2 = Base.children.find((element)=>(findActiveChild(element) === true)) // Objekt
const newSubBase2 = hopDownInScope(subBase2)
const NewScopeOne = Base.children.map((element)=>(element === subBase2 ? newSubBase2 : element))
const NewBase = {...Base, children: NewScopeOne}
setGalaxy([NewBase]) }}

}