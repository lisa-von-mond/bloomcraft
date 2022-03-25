// function downNow(){

//   const Base = galaxy[0] /// Objekt
  
//   function hopDownInScope(object){

//     const Current = object.children.find((element) => (element.active === true))
//     const NewSubChildren = Current.children.map((element) => ({...element, focus: false}))
//     const newChildren = object.children.map((element) => (element === Current? {...element, focus: true, active: false, children: NewSubChildren} : element))
//     const newObject = {...object, children: newChildren, active:true}
//     return newObject
//      }

//   if (Base.active === true){console.log("hier passiert nichts")}  
  
//   else{
    
//   const subBase = Base.children.find((element)=>(element.scive === true))
    
//   if (subBase){
//   const newGalaxy = [hopDownInScope(Base)]
//   setGalaxy(newGalaxy)
    
//     } else {

// function findActiveCHild(OBJEKT){
// const thereornot = OBJEKT.children.find((element)=>(element.active === true))
// return thereornot

// }
    
// const subBase2 = Base.children.find((element)=>(element.active === true)) // Objekt



//   const newSubBase = hopDownInScope(subBase)
//   const NewScopeOne = Base.children.map((element)=>(element === subBase ? newSubBase : element))
//   const NewBase = {...Base, children: NewScopeOne}
//   setGalaxy([NewBase]) }}




// }

