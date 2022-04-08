import styled, {css} from "styled-components";
import {stars1, stars2, stars3} from "../utils/star-randomizer"

export function Starry(){

    console.log(stars1)

    return(
    <Middle>
    <BlurAlternate>{stars1.map((element)=>(<Star x={element.x} y={element.y}></Star>))}</BlurAlternate>
    <FadeOut>{stars2.map((element)=>(<Star x={element.x} y={element.y}></Star>))}</FadeOut>
    <BlurOut>{stars3.map((element)=>(<Star x={element.x} y={element.y}></Star>))}</BlurOut>
    </Middle>)
     }
    
    const Star=styled.div`
    width:3px;
    height:3px;
    background-color:white;
    border-radius:50%;
    position:absolute;
    top:${props => props.x}vh;
    left:${props => props.y}vw;`
    
    const BlurAlternate = styled.div`
    animation: blurthis 1s linear infinite;
    @keyframes blurthis { from {filter: blur(3px) } to { filter:none;} }`
    
    const FadeOut=styled.div`
    animation: blurout 5s infinite ease-in-out;
    @keyframes blurout { from { opacity:1} to  { opacity:0} }`
    
    const BlurOut=styled.div`
    animation: inout 1s infinite alternate ease-in-out;
    @keyframes inout { from { display:visible; filter: blur(3px) } to  { display:none;}}`
    
    const Middle=styled.div`
    position:fixed;
    height:10px;
    width:10px;
    left:50vw;
    top:50vh;`