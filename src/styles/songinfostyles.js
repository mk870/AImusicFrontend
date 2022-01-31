import styled from "styled-components";

export const Songinfostyles = styled.div`
  display:flex;
  flex-direction:row;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius:10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  &>img{
    border: 2px solid white;
  }
  @media(max-width:500px){
    flex-direction: column;
    justify-content:center;
    align-items:center;
    &>img{
      width:200px;
    }
  }
`