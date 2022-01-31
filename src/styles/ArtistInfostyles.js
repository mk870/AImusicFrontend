import styled from "styled-components";

export const ArtistInfostyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  &>img{
    border-radius:50%;
    border: 2px solid white;
  }
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius:10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`