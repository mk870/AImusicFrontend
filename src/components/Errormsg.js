import React, { useEffect } from 'react'
import image from '../Images/error.jpg'
import {ErrorsStyles} from '../styles/ErrorsStyles'
import { useDispatch } from 'react-redux'
import { usersearch } from '../features/search'

export default function Errormsg({Errors,seterrors}) {
  const dispatch = useDispatch()
  useEffect(
    ()=>{
      setTimeout(()=>{
        dispatch(usersearch(''))
        seterrors(null)
      },4000)
    },[])
  return (
    <ErrorsStyles>
      <h2>{Errors}</h2>
      <img src={image} alt='error'/>
    </ErrorsStyles>
  )
}
