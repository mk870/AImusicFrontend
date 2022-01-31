import styled from "styled-components";

export const Infostyles = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  width:100vw;
  margin:20px;
  & > div{
    margin:10px;
  }
  @media(max-width:780px){
    flex-direction: column;
    width: 90vw;
  }
`