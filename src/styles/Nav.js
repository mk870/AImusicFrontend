import styled from "styled-components";

export const Nav = styled.nav`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex-direction: row;
  color:white;
  background: black;
  backdrop-filter: blur(5px);
  padding:5px;
  width: 100vw;
  cursor:pointer;
  &>img{
    width: 4em;
    height:4em;
    margin-left:2em;
  }
  &>h4{
    margin-left:4.5em;
    text-decoration:underline;
    &:hover{
      color:red;
    }
  }
  &>h2{
    margin-left:1em;
    color:#ed0ea7;
    font-weight:800;
    font-style: oblique;
  }
  @media(max-width:320px){
      margin-right: 4em;
    }
`