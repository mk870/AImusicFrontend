import styled from "styled-components";

export const ErrorsStyles = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  &>img{
    border: 2px solid red;
    width:70vw;
    height:60vh;
  }
`