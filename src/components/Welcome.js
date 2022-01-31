import React from 'react'
import hiphop from '../Images/drake.jpg'
import rnb from '../Images/theweeknd.jpg'
import jazz from '../Images/mosesboyd2.jpg'
import pop from '../Images/taylorswift.jpg'
import classic from '../Images/lionel.jpg'
import naija from '../Images/wizkid.jpg'
import electro from '../Images/skrillex.jpeg'
import rock from '../Images/21pilots.jpg'
import country from '../Images/luke2.jpg'



const images = [hiphop,rock,pop,jazz,country,naija,classic,rnb,electro]
const genrenames = ['Hiphop','Rock','Pop','Jazz','Country','Naija','Classic','RnB','Electro']
export default function Welcome() {
  
  return (
    <div className='welcomeContainer'>
      <h2  id='greeting'>Welcome to AIMusic</h2>
      <div className="description" >
        <p >Watch music videos of your favourite songs</p>
        <p>See what people are saying on twitter about your favourite songs</p>
        <p>Get real-time twitter sentiment analysis score of what people are saying about your songs</p>
      </div>
      
      <div className='wrapper'>
        <div className='one' >
          <h3>Music for Everyone</h3>
          <p>Search for any song in any genre of any era</p>
          
        </div>
        <div className='two'>
          <div className='genrelist'>
            {images.map((image,index)=>(
              <div className='genres' key={index}>
                <img src={image} alt='genreartist' className='artists'/>
                <p>{genrenames[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
