export function hopUpInScope(object){
  
    const Focus = object.children.find((element) => (element.focus === true))
    const NewSubChildren = Focus.children.map((element) => (element.flow === 1 ? {...element, focus: true} : element))
    const newChildren = object.children.map((element) => (element.focus === true ? {...element, focus: false, active: true, tracked:true, children: NewSubChildren} : element))
    const newObject = {...object, children: newChildren, active:false}
    return newObject}
  
export function turnFocusLeftInScope(objekt){
    if(objekt.limit === true){console.log("nothing to turn left here")} else {
    const scopeX = objekt.children
    const Focus = scopeX.find((element)=>(element.focus === true))
    const nextFocusIndex = Focus.flow === scopeX.length ? 1 : Focus.flow + 1
    const scopeXA = scopeX.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
    const scopeXNew = scopeXA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
    return {...objekt, children:scopeXNew}}}
  
  export function turnFocusRightInScope(objekt){
    if(objekt.limit === true){console.log("nothing to turn right here")} else {
    const scopeX = objekt.children
    const Focus = scopeX.find((element)=>(element.focus === true))
    const nextFocusIndex = Focus.flow === 1 ? scopeX.length : Focus.flow - 1
    const scopeXA = scopeX.map ((element)=>(element.focus === true ? {...element, focus:false} : element))
    const scopeXNew = scopeXA.map ((element) => (element.flow === nextFocusIndex ? {...element, focus:true} : element))
    return {...objekt, children:scopeXNew}}}
  
  export function hopDownInScope(object){
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