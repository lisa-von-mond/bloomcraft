export function track(objekt){
    const thisone = objekt.children.find((element)=>(element.tracked === true))
    return thisone}
  
export function integrateScope(thisBase, nextBase, nextBaseNew) {
    const newScope = thisBase.children.map((element)=>(element === nextBase ? nextBaseNew : element))
    const newBase = {...thisBase, children:newScope}
    return newBase}