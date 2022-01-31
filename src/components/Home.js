
import Input from "../components/Input";
import MusicApi from "../components/MusicApi";
import { Container } from "../styles/Containerstyles";
import { Globalstyles } from "../styles/Globalstyles";
import React from 'react'
import { useSelector} from "react-redux";
import Welcome from "./Welcome";

const Home = () => {
  const searchinput = useSelector((state) => state.search.value)
  

  return (
    <Container>
      <Globalstyles/>
      <Input/>
      {searchinput === '' &&<Welcome/>}
      {searchinput !== '' && <MusicApi/>}
    </Container>
  )
}
export default Home;