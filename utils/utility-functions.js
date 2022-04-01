export function track(objekt){
    const thisone = objekt.children.find((element)=>(element.tracked === true))
    return thisone}
  
function integrateScope(thisBase, nextBase, nextBaseNew) {
    const newScope = thisBase.children.map((element)=>(element === nextBase ? nextBaseNew : element))
    const newBase = {...thisBase, children:newScope}
    return newBase}
    
export function Beam1(myFunction, actualBase){
        const beamed1 = [myFunction(actualBase)]
        return beamed1}
      
export function Beam2(myFunction, actualBase){
        const baseOne = track(actualBase)
        const newBaseOne = myFunction(baseOne)
        const beamed2 = [integrateScope(actualBase, baseOne, newBaseOne)]
        return beamed2 }
      
export function Beam3(myFunction, actualBase){
        const baseOne = track(actualBase)
        const baseTwo = track(baseOne)
        const newBaseTwo = myFunction(baseTwo)
        const newBaseOne = integrateScope(baseOne,baseTwo, newBaseTwo)
        const beamed3 = [integrateScope(actualBase, baseOne, newBaseOne)]
        return beamed3}