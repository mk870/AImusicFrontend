import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { usersearch } from '../features/search'
import { useNavigate } from 'react-router-dom';
import { apidatalist } from '../features/Apidata';
import { song } from '../features/Songclick';
import { Coverstyles } from '../styles/CoverStyles';
import { Message, Resultsstyles, Song1, Song2, Song3, Song4, Song5, Song6, Song7, Song8 } from '../styles/Resultsstyles';
import Errormsg from './Errormsg';
import Loader from './Loader';


export default function MusicApi() {
  const searchinput = useSelector((state) => state.search.value)
  const Apikey = 'pnlGswW3ULGX0WOIL8wLtVsQDUpq6o-wINCKHpERJ3UlX1kGYZ5yQYo74_c0YCnb'
  const dispatch = useDispatch()
  const [musicdata,setMusicdata] = useState(null)
  const [Errors,setError] = useState(null)
  
  const navigate = useNavigate()
  useEffect(()=>{
    
    fetch(`https://api.genius.com/search?q=${searchinput}&access_token=${Apikey}`)
    .then(res =>{
      if (!res.ok) {
        throw Error('Could not fetch data please check your network connection or verify your search')
      }else{
        return res.json()
      }
    } )
    .then(data =>{
      if(!data.response.hits[0]){
        throw Error('Could not fetch data on your search please try a new search')
      }else{
        setMusicdata(data)
        dispatch(apidatalist(data.response.hits))
        setError(null)
      }
      
    })
    .catch(e =>{
      setError(e.message)
    })
    
    
    
  },[searchinput])
  
  const clickedsong = (songnum) =>{
    dispatch(song(songnum))
    dispatch(usersearch(''))
    navigate(`/song/${musicdata.response.hits[songnum].result.title}`)
  }
  
  
    {if (!Errors && !musicdata) {
      return <Loader/>
    }else if(Errors){
      return <Errormsg Errors={Errors} seterrors={setError}/>
    }else{
      return(
        <Coverstyles>
        <Resultsstyles>
          <Message>
            <h3>Music for Everyone</h3>
            <p>Search for any song in any genre of any era</p>
          </Message>
          <Song1 onClick={()=>clickedsong(0)}>
            <img src={musicdata.response.hits[0].result.song_art_image_url} alt='songart'/>
            <p>{musicdata.response.hits[0].result.title}</p>
            <p>{musicdata.response.hits[0].result.artist_names}</p>
          </Song1>
          {musicdata.response.hits[1] &&<Song2 onClick={()=>clickedsong(1)}>
            <img src={musicdata.response.hits[1].result.song_art_image_url} alt='songart'/>
              <p>{musicdata.response.hits[1].result.title}</p>
              <p>{musicdata.response.hits[1].result.artist_names}</p>
          </Song2>}
          {musicdata.response.hits[2] &&<Song3 onClick={()=>clickedsong(2)}>
            <img src={musicdata.response.hits[2].result.song_art_image_url} alt='songart'/>
              <p>{musicdata.response.hits[2].result.title}</p>
              <p>{musicdata.response.hits[2].result.artist_names}</p>
          </Song3>}
          {musicdata.response.hits[3] &&<Song4 onClick={()=>clickedsong(3)}>
            <img src={musicdata.response.hits[3].result.song_art_image_url} alt='songart'/>
              <p>{musicdata.response.hits[3].result.title}</p>
              <p>{musicdata.response.hits[3].result.artist_names}</p>
          </Song4>}
          {musicdata.response.hits[4] && <Song5 onClick={()=>clickedsong(4)}>
            <img src={musicdata.response.hits[4].result.song_art_image_url} alt='songart'/>
              <p>{musicdata.response.hits[4].result.title}</p>
              <p>{musicdata.response.hits[4].result.artist_names}</p>
          </Song5>}
          {musicdata.response.hits[5] && <Song6 onClick={()=>clickedsong(5)}>
            <img src={musicdata.response.hits[5].result.song_art_image_url} alt='songart'/>
              <p>{musicdata.response.hits[5].result.title}</p>
              <p>{musicdata.response.hits[5].result.artist_names}</p>
          </Song6>}
          {musicdata.response.hits[6] && <Song7 onClick={()=>clickedsong(6)}>
            <img src={musicdata.response.hits[6].result.song_art_image_url} alt='songart'/>
              <p>{musicdata.response.hits[6].result.title}</p>
              <p>{musicdata.response.hits[6].result.artist_names}</p>
          </Song7>}
          {musicdata.response.hits[7] && <Song8 onClick={()=>clickedsong(7)}>
            <img src={musicdata.response.hits[7].result.song_art_image_url} alt='songart'/>
              <p>{musicdata.response.hits[7].result.title}</p>
              <p>{musicdata.response.hits[7].result.artist_names}</p>
          </Song8>}
          
        </Resultsstyles>
        </Coverstyles>
      )
    } 
  }
  
  
}
