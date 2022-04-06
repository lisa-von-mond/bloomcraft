import styled, {css} from "styled-components";
import {angleToCooX, angleToCooY} from "../utils/rendering-functions"

export function Galaxy({galaxy, seeds}){

return(<>
{galaxy.map((one)=><MyGalaxy key={one.name} scope={one.scope} flow={one.flow} active={one.active} focus={one.focus} seedpack={one.seedpack} seedstatus={seeds} goal={one.goal}>{one.id}
    {one.children.map((two)=><MyGalaxy key={two.name} scope={two.scope} distx={angleToCooX(two.angl, two.dist)} disty={angleToCooY(two.angl, two.dist)} flow={two.flow} type={two.type} active={two.active} focus={two.focus} seedpack={two.seedpack} seedstatus={seeds} goal={two.goal}>{two.id}
      {two.children.map((three)=><MyGalaxy key={three.name} scope={three.scope} distx={angleToCooX(three.angl, three.dist)} disty={angleToCooY(three.angl, three.dist)} flow={three.flow} type={three.type} active={three.active} focus={three.focus} seedpack={three.seedpack} seedstatus={seeds} goal={three.goal}>{three.id}
      {three.children.map((four)=><MyGalaxy key={four.name} scope={four.scope} distx={angleToCooX(four.angl, four.dist)} disty={angleToCooY(four.angl, four.dist)} type={four.type} flow={four.flow} active={four.active} focus={four.focus} seedpack={four.seedpack} seedstatus={seeds} goal={four.goal}>{four.id}
                </MyGalaxy>)}
              </MyGalaxy>)}
            </MyGalaxy>)}
          </MyGalaxy>)}
         </>)}

const MyGalaxy = styled.div`  
top:${props => props.distx}px;
left:${props => props.disty}px;

text-align:center;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;

${(props) => props.scope === 0 &&
  css`
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  height: 100px;
  width: 100px;`}

${(props) => props.scope === 1 &&
  css`
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  height: 80px;
  width: 80px;`}

${(props) => props.scope === 2 &&
  css`
  background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
  height: 60px;
  width: 60px;`}

${(props) => props.scope === 3 &&
  css`
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);;
  height: 50px;
  width: 50px;`}

${(props) => props.goal === true &&
    css`
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;`}

${(props) => props.focus === true &&
  css`
  box-shadow: 0.3em 0.3em 3em 0.2em skyblue;
  border:5px solid skyblue`}

${(props) => (props.seedstatus === false && props.seedpack === true) &&
  css`
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  border:3px solid #00f700;`}

${(props) => (props.active === true && props.seedstatus === true) &&
  css`
  box-shadow: 0.2em 0.2em 2em 0.2em #00f700;;
  border:5px solid #00f700;`}

${(props) => (props.active === true && props.seedstatus === false) &&
  css`
  box-shadow: 0.2em 0.2em 2em 0.2em hotpink;;
   border:5px solid hotpink;`}
`