function MoveNow(){

const base = galaxy[0]

function findActiveChild(objekt){
const thereornot = objekt.children.find((element)=>(element.active === true))
return thereornot
}

function findActiveSubChild(objekt){
const thereornot = objekt.children.find((element)=>(findActiveChild(element) === true))
return thereornot
}

if (base.active === true){turnXinScope(base)}

else{

if (findActiveChild(base) === true) {"code for scope 1 goes here"}

else{

if (findActiveSubChild(base) === true){"code for scope 2 goes here"}

else {"code for scope 3 goes here"}



}}}