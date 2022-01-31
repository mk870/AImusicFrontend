import styled from "styled-components";

export const Twitterstyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  color:white;
  padding: 10px;

`
export const Sentiments = styled.div`
  color: ${props=>props.colour};
  font-size:20px;
  margin-bottom:3px;
  &>span{
    font-size:30px;
  }
`
export const Tweets = styled.div`
  border: 2px solid ${props=>props.colour} ;
  border-radius: 10px;
  background: white;
  margin:10px;
  @media(max-width:780px){
    width: 90vw;
    
  }
  @media(max-width:600px){
    width: 600px;
    
  }
  
`