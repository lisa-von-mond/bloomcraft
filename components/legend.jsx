import styled, {css} from "styled-components";

export function Legend(){

    return(
        <LegendFix>
        <p><strong>HOW THIS GAME WORKS</strong> [scroll me]</p>
        <p>Current position (spaceship): hotpink<br></br>Focus-position: skyblue</p>
        <p>*****</p>
        <p>YOUR TASK:</p>
        <p>move your spaceship to pick up the seeds (2.1) and bring them to destination (3.2.3)</p>
        <p>*****</p>
        <p>NAVIGATION:</p>
        <p><strong>FAR</strong> = hop to further planet from base (e.g. from 2.2 to 2.2.3). The focus indicates, which planet you will hop. Focus can be turned clockwise / anti clockwise by corresponding command</p>
        <p><strong>CLOSE</strong> = Hop to closer planet (e.g. from 3.1.2 you will hop down to 3.1)</p>
        <p>*****</p>
        <p>COCKPIT:</p>
        <p>Program your spaceship by placing commands in the command line. Green command line is your main command line. By click on GO, commands in green line will be executed. It is up to you, how many commands you will fire of at one time</p>
        <p>You can <strong>bundle</strong> your commands (factor 2 or 3) This happens in blue command line. By click on SET, commands in blue command line will be placed in green command line.</p>
        <p><i>2 UP</i> will be resolved as <i>UP UP</i>. 2 CLOSE LEFT will be resolved as <i>CLOSE LEFT CLOSE LEFT. 3 UP LEFT LEFT</i> will be resolved as <i>UP LEFT LEFT UP LEFT LEFT UP LEFT LEFT</i>. Deleting last command is only possible in green line.
        </p>
        <p>*****</p>
        <p>COUNTER</p>
        <p>You have 12 moves to complete your mission (actually game goes on after 12 moves but counter will warn)</p>
        <p>Every command in the green command line (also a bundled command) will be counted as one. Impossible commands will be counted normally but ignored in movements.</p>
        <p>*****</p>
        <p>Have a nice journey!</p>
        </LegendFix>)
}

const LegendFix = styled.div`
color:white;
font-size:14px;
position:fixed;
left:20px;
width:400px;
height:400px;
overflow:scroll;
top:30px;`