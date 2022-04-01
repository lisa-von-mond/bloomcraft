import styled, {css} from "styled-components";


export function Navi({up, down, right, left}){

return(
<TestNavi>
<TestNaviInner>
<TestButton1 onClick = {up}><p>UP</p></TestButton1>
<TestButton4 onClick = {down}><p>BEAM CLOSER</p></TestButton4>
<TestButton2 onClick = {left}><p>ANTI CLOCK WISE</p></TestButton2>
<TestButton3 onClick = {right}><p>CLOCK WISE</p></TestButton3>
</TestNaviInner>
</TestNavi>)
}

const TestButton1 = styled.div`
    height:100px;
    width:100px;
    border:3px solid white;
    border-radius:50%;
    position:absolute;
    left:100px;
    top:0;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:3px;
    cursor:pointer;
    p{text-align:center;}
    `
const TestButton2 = styled.div`
    height:100px;
    width:100px;
    border:3px solid white;
    border-radius:50%;
    position:absolute;
    left:0;
    top:100px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:3px;
    cursor:pointer;
    p{text-align:center;}
    `
const TestButton3 = styled.div`
    height:100px;
    width:100px;
    border:3px solid white;
    border-radius:50%;
    position:absolute;
    left:200px;
    top:100px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:3px;
    cursor:pointer;
    p{text-align:center}
    `
const TestButton4 = styled.div`
    height:100px;
    width:100px;
    border:3px solid white;
    border-radius:50%;
    position:absolute;
    left:100px;
    bottom:0px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:3px;
    cursor:pointer;
    p{text-align:center}
    `
    const TestButton5 = styled.div`
    height:80px;
    width:80px;
    border:3px solid white;
    border-radius:50%;
    position:absolute;
    left:110px;
    bottom:110px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:3px;
    cursor:pointer;
    p{text-align:center;}
    `

const TestNavi = styled.div`
position:fixed;
left:10px;
top:10px;
width:300px;
height:300px;
display:flex;`

const TestNaviInner = styled.div`
position:relative;
width:100%;
height:100%;`



