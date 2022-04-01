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