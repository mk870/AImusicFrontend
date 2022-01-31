import React, { useEffect, useState } from 'react'
import { useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ArtistInfostyles } from '../styles/ArtistInfostyles';
import { Btncontainerstyles } from '../styles/BtncontainerStyles';
import { Button } from '../styles/Btnstyles';
import { Coverstyles } from '../styles/CoverStyles';
import { Globalstyles } from '../styles/Globalstyles';
import { Infostyles } from '../styles/Infostyles';
import { Liststyles } from '../styles/Liststyles';
import { Songinfostyles } from '../styles/songinfostyles';
import Twitter from './Twitter';
import {FaTwitter, FaVideo, FaSearch, FaWindowClose} from "react-icons/fa";

export default function Clickedsong() {
  const songnum = useSelector((state) => state.song.value)
  const songs = useSelector((state) => state.apidata.value)
  const [clickedsong,setclickedsong] = useState(null)
  const navigate = useNavigate()
  const KEY ='AIzaSyA4sK8zH2mhKv0-xHNTXXngIm79BV3eIAY'
  const [video,setVideo] = useState('')
  const [watchvideo,setWatchvideo] = useState(false)
  const [getsentiment,setgetsentiment] = useState(null)

  useEffect(()=>{
    setclickedsong(songs[songnum])
    
  },[])

  useEffect(()=>{
    {clickedsong &&
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${clickedsong.result.title} ${clickedsong.result.artist_names}&key=${KEY}`)
      .then(response => (response.json()))
      .then(data =>setVideo(data))
    }
    return()=>{
      setgetsentiment(null)
      setVideo('')
      setWatchvideo(false)
    }
  },[clickedsong])
  
  const home = () =>{
    setWatchvideo(false)
    navigate("/")
  }
  
  return (
    <>
    <Globalstyles/>
    {clickedsong  && <Coverstyles>
      <div className='one-api'>
          <h3>Music for Everyone</h3>
          <p>Search for any song in any genre of any era</p>
      </div>
        {!watchvideo && <Infostyles>
          <Songinfostyles>
            
            <img src={clickedsong.result.song_art_image_url} height={300} width={260} alt='songart' className='image1'/>
            <Liststyles>
              <p>Track Name: {clickedsong.result.title}</p>
              <p>Artist/s  : {clickedsong.result.artist_names}</p>
              <p>Song ID   : {clickedsong.result.id}</p>
            </Liststyles>
          </Songinfostyles>
          <ArtistInfostyles>
            <img src={clickedsong.result.primary_artist.image_url} height={200} width={200} alt='songart' className='image2'/>
            <Liststyles>
              <p>Primary Artist :{clickedsong.result.primary_artist.name}</p>
              <p>Primary Artist ID:{clickedsong.result.primary_artist.id}</p>
            </Liststyles>
          </ArtistInfostyles>
        </Infostyles>}
        {watchvideo && video !== '' &&<div className='video'>
          <div className='botton'><div className='button'><Button onClick={()=> setWatchvideo(false)}><FaWindowClose/> Close</Button></div></div>
          <div>
          <iframe  className='frame'  src={`https://www.youtube.com/embed/${video.items[0].id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p className='videoTitle'>{video.items[0].snippet.title}</p>
          
        </div>}
        {getsentiment && clickedsong && !watchvideo && <Twitter clickedsong ={clickedsong} getsentiment={setgetsentiment}/>}
      <Btncontainerstyles>
          <Button onClick={home}><FaSearch/> New Search</Button>
          <Button onClick={()=> {
            setgetsentiment(null)
            setWatchvideo(true)
            }}><FaVideo/> Play Video</Button>
          <Button onClick={()=>{
            setgetsentiment(true)
            setWatchvideo(false)
          }}><FaTwitter/> Sentiment score </Button>
      </Btncontainerstyles>
        
      
    </Coverstyles>}
    </>
  )
}
