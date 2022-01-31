import React, { useState } from 'react'
import { Button } from '../styles/Btnstyles'
import { Inputbar } from '../styles/Inputstyles'
import { useDispatch } from 'react-redux'
import { usersearch } from '../features/search'
import { FaSearch } from 'react-icons/fa'


export default function Input() {
  const [userInput,setuserInput] = useState('')
  const dispatch = useDispatch()
  const initiateSearch =()=>{
    dispatch(usersearch(userInput))
  }
  

  return (
    <div className='Input' >
      <Inputbar placeholder='Enter artist or Song or both' onChange={(e)=> setuserInput(e.target.value)}/>
      <Button onClick={initiateSearch}><FaSearch/> Search</Button>
    </div>
    

  )
}
