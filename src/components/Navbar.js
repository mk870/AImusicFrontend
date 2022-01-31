import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Images/i5.jpg'
import { Nav } from '../styles/Nav'


export default function Navbar() {
  const navigate = useNavigate()
  return (
    <Nav>
      <img src={logo} alt="logo"  />
      <h2>AIMusic</h2>
      <h4 onClick={()=>navigate('/')}>Home</h4>
      
    </Nav>
  )
}
