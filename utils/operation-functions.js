function Beam1(myFunction, actualBase){
    setGalaxy([myFunction(actualBase)])
    setGlobalCount(globalCount+1)}
        
  function Beam2(myFunction, actualBase){
    const baseOne = track(actualBase)
    const newBaseOne = myFunction(baseOne)
    setGalaxy([integrateScope(actualBase, baseOne, newBaseOne)])
    setGlobalCount(globalCount+1)}
        
  function Beam3(myFunction, actualBase){
    const baseOne = track(actualBase)
    const baseTwo = track(baseOne)
    const newBaseTwo = myFunction(baseTwo)
    const newBaseOne = integrateScope(baseOne,baseTwo, newBaseTwo)
    setGalaxy([integrateScope(actualBase, baseOne, newBaseOne)])
    setGlobalCount(globalCount+1)} 