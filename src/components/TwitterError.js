import React, { useEffect } from 'react'
import image from '../Images/error.jpg'
import {ErrorsStyles} from '../styles/ErrorsStyles'

export default function TwitterError({Errors,twittererror}) {
 useEffect(
  ()=>{
    setTimeout(()=>{
      
      twittererror(null)
    },6000)
  },[])
  return (
    <ErrorsStyles>
      <h2>{Errors}</h2>
      <img src={image} alt='error'/>
    </ErrorsStyles>
  )
}
