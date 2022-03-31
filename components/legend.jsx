import styled, {css} from "styled-components";

export function Legend(){

    return(
        <LegendFix>
        <p>[how this game works]</p>
        <p>Current position (spaceship): hotpink</p>
        <p>Focus-position: skyblue</p>
        <p>***</p>
        <p>YOUR TASK:</p>
        <p>move your spaceship to pick up the seeds (2.1) and bring them to your destination (3.2.3)</p>
        <p>***</p>
        <p>NAVIGATION:</p>
        <p>BEAM FURTHER = hop to further planet from base (e.g. from 2.2 to 2.2.3)</p>
        <p>The focus indicates, which planet you will hop</p>
        <p>Focus can be turned clockwise / anti clockwise by corresponding button</p>
        <p>***</p>
        <p>BEAM DOWN = Hop down to closer planet (e.g. from 3.1.2 you will hop down to 3.1)</p>
        <p>***</p>
        <p>COUNTER</p>
        <p>This is a dummy, in the real game you will only have 14 moves to complete your mission. So if counter is warning, you normally would have failed =)</p>
        <p>***</p>
        <p>Have a nice journey!</p>
        </LegendFix>
    )
}

const LegendFix = styled.div`
color:white;
font-size:14px;
position:fixed;
right:50px;
width:350px;
top:30px;`