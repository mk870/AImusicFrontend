import styled from "styled-components";

export const WatchMusicVideostyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  .frame{
    width: 80vw;
    height:80vh;
    
  } 
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius:10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  &>p{
    color:white;
    font-size:15px;
  }
  .button{
    display: flex;
    flex-direction: row;
    align-items:center;
    width:60vw;
    justify-content:flex-end;
    color:white;
    padding-bottom:5px;
  } 
  .close{
    cursor:pointer;
  }
`