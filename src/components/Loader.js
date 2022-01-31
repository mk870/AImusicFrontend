import gif from '../Images/loader.gif'
import React, { useEffect ,useState} from 'react'
import image from '../Images/error.jpg'
import {ErrorsStyles} from '../styles/ErrorsStyles'

export default function Loader() {
  const [loaderUI,setLoaderUI] = useState(true)
  useEffect(()=>{
    const time = setTimeout(() => {
      setLoaderUI(false)
    }, 35000);

    return()=> clearTimeout(time)
  })
  
  
  return (
    <>
      {loaderUI && 
      <div className='loader'>
        <img className='loading' src={gif} alt="loader" />
      </div>
      }
      {!loaderUI &&
      <ErrorsStyles>
        <h2>Failed to fetch Please try again</h2>
        <img src={image} alt='error'/>
      </ErrorsStyles>
      }
    </>
    
  )
}
