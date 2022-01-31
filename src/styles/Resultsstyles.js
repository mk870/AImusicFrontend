import styled from "styled-components";
import pic2 from '../Images/1.jpg'

export const Resultsstyles = styled.div`
  display: grid;
  margin:15px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-content:space-evenly;
`
export const Message = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image: url(${pic2});
  text-align:center;
  margin-left:20px;
  margin-right:20px;
  margin-bottom:2px;
  padding-bottom:40px;
  @media(max-width:1300px){
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    
  }
  @media(max-width:900px){
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    
  }
  @media(max-width:480px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    width: 285px;
  }
`
export const Song1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  margin:0px 20px 20px 20px;
  display:flex;
  flex-direction:column;
  width:260px;
  align-items:center;
  cursor:pointer;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius:10px;
  padding:10px;
  border: 2px solid white;
  &:hover{
    box-shadow: 0 0 25px white;
  }
  &>img{
    height:240px;
    width:200px;
  }
  @media(max-width:1300px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    
  }
  @media(max-width:900px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    
  }
  @media(max-width:630px){
    width:200px;
  }
  @media(max-width:500px){
    width:180px;
    &>img{
      height: 180px;
      width: 140px;
    }
  }
  @media(max-width:480px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3; 
    width: 260px;
    &>img{
      height: 240px;
      width: 200px;
    }  
  }
`
export const Song2 = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  margin:0px 20px 20px 20px;
  display:flex;
  flex-direction:column;
  width:260px;
  align-items:center;
  cursor:pointer;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius:10px;
  padding:10px;
  border: 2px solid white;
  &:hover{
    box-shadow: 0 0 25px white;
  }
  &>img{
    height:240px;
    width:200px;
  }
  @media(max-width:1300px){
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    
  }
  @media(max-width:900px){
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    
  }
  @media(max-width:630px){
    width:200px;
  }
  @media(max-width:500px){
    width:180px;
    &>img{
      height: 180px;
      width: 140px;
    }
  }
  @media(max-width:480px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4; 
    width: 260px;
    &>img{
      height: 240px;
      width: 200px;
    }  
  }
`
export const Song3 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  margin:0px 20px 20px 20px;
  display:flex;
  flex-direction:column;
  width:260px;
  align-items:center;
  cursor:pointer;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius:10px;
  padding:10px;
  border: 2px solid white;
  &:hover{
    box-shadow: 0 0 25px white;
  }
  &>img{
    height:240px;
    width:200px;
  }
  @media(max-width:1300px){
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    
  }
  @media(max-width:900px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    
  }
  @media(max-width:630px){
    width:200px;
  }
  @media(max-width:500px){
    width:180px;
    &>img{
      height: 180px;
      width: 140px;
    }
  }
  @media(max-width:480px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
    width: 260px;
    &>img{
      height: 240px;
      width: 200px;
    }   
  }
`
export const Song4 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  margin:0px 20px 20px 20px;
  display:flex;
  flex-direction:column;
  
  width:260px;
  align-items:center;
  cursor:pointer;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius:10px;
  padding:10px;
  border: 2px solid white;
  &:hover{
    box-shadow: 0 0 25px white;
  }
  &>img{
    height:240px;
    width:200px;
  }
  @media(max-width:1300px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    
  }
  @media(max-width:900px){
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    
  }
  @media(max-width:630px){
    width:200px;
  }
  @media(max-width:500px){
    width:180px;
    &>img{
      height: 180px;
      width: 140px;
    }
  }
  @media(max-width:480px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 6;
    width: 260px;
    &>img{
      height: 240px;
      width: 200px;
    }   
  }
`
export const Song5 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  margin:20px;
  display:flex;
  flex-direction:column;
  width:260px;
  align-items:center;
  cursor:pointer;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius:10px;
  padding:10px;
  border: 2px solid white;
  &:hover{
    box-shadow: 0 0 25px white;
  }
  &>img{
    height:240px;
    width:200px;
  }
  @media(max-width:1300px){
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    
  }
  @media(max-width:900px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
    
  }
  @media(max-width:630px){
    width:200px;
  }
  @media(max-width:500px){
    width:180px;
    &>img{
      height: 180px;
      width: 140px;
    }
  }
  @media(max-width:480px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 7; 
    width: 260px;
    &>img{
      height: 240px;
      width: 200px;
    }  
  }
`
export const Song6 = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  margin:20px;
  display:flex;
  flex-direction:column;
  width:260px;
  align-items:center;
  cursor:pointer;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius:10px;
  padding:10px;
  border: 2px solid white;
  &:hover{
    box-shadow: 0 0 25px white;
  }
  &>img{
    height:240px;
    width:200px;
  }
  @media(max-width:1300px){
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    
  }
  @media(max-width:900px){
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
    
  }
  @media(max-width:630px){
    width:200px;
  }
  @media(max-width:500px){
    width:180px;
    &>img{
      height: 180px;
      width: 140px;
    }
  }
  @media(max-width:480px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 7;
    grid-row-end: 8; 
    width: 260px;
    &>img{
      height: 240px;
      width: 200px;
    }  
  }
`
export const Song7 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  margin:20px;
  display:flex;
  flex-direction:column;
  width:260px;
  align-items:center;
  cursor:pointer;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius:10px;
  padding:10px;
  border: 2px solid white;
  &:hover{
    box-shadow: 0 0 25px white;
  }
  &>img{
    height:240px;
    width:200px;
  }
  @media(max-width:1300px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
    
  }
  @media(max-width:900px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 6;
    
  }
  @media(max-width:630px){
    width:200px;
  }
  @media(max-width:500px){
    width:180px;
    &>img{
      height: 180px;
      width: 140px;
    }
  }
  @media(max-width:480px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 8;
    grid-row-end: 9; 
    width: 260px;
    &>img{
      height: 240px;
      width: 200px;
    }  
  }

`
export const Song8 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  margin:20px;
  display:flex;
  flex-direction:column;
  width:260px;
  align-items:center;
  cursor:pointer;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius:10px;
  padding:10px;
  border: 2px solid white;
  &:hover{
    box-shadow: 0 0 25px white;
  }
  &>img{
    height:240px;
    width:200px;
  }
  @media(max-width:1300px){
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5;
    
  }
  @media(max-width:900px){
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
    
  }
  @media(max-width:630px){
    width:200px;
  }
  @media(max-width:500px){
    width:180px;
    &>img{
      height: 180px;
      width: 140px;
    }
  }
  @media(max-width:480px){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 9;
    grid-row-end: 10;
    width: 260px;
    &>img{
      height: 240px;
      width: 200px;
    }  
  }
`