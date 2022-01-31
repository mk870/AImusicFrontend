import React, { useEffect, useState } from 'react'
import { Twitterstyles,Sentiments,Tweets } from '../styles/Twitterstyles'
import ReactWordcloud from 'react-wordcloud';
import { Button } from '../styles/Btnstyles';
import TwitterError from './TwitterError';
import { FaWindowClose } from 'react-icons/fa';
import Loader from './Loader';

export default function Twitter({clickedsong,getsentiment}) {
  const [twittersentiment,setTwittersentiment] = useState('')
  const [words,setWords] = useState('')
  const [twittererror,setTwittererror] = useState('')
  const [Errors,setError] = useState('')
  useEffect(()=>{
    
      fetch('https://musicsentimentapi.herokuapp.com/music',{
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
        artist_name: clickedsong.result.artist_names,
        song_title: clickedsong.result.title
      }),
        cache: 'no-cache',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(res =>{
        if (!res.ok) {
          throw Error('Could not fetch data please check your network connection or try again')
        }else{
          return res.json()
        }
      })
      .then(data =>{
        
        if(data.sentiments==='' && data.wordcloud ===''){
          setTwittererror(data.error)
        }else{
          setTwittersentiment(data.sentiments)
          setWords(newarr(data.wordcloud))
        }
        
      })
      .catch(e =>{
        setError(e.message)
      })
      return ()=>{
        setWords('')
        setTwittersentiment('')
        setTwittererror('')
      }
  },[])
  
  const newarr = arr =>{
    const arr2 = []
    for (let i = 0; i < arr.length; i++) {
      arr2.push({text:arr[i],value:Number(((Math.random())*1000000).toFixed(0))})
    }
    return arr2
  }
  const size = [600, 400];
  const msg = 'Sorry could not find live tweets on this song please try another song'
  const sentimentcolor = (sentimentscore)=>{
    if(sentimentscore < 50){
      return 'red'
    }else if(sentimentscore >= 50 && sentimentscore < 75){
      return 'purple'
    }else{
      return 'green'
    }
  }
  

  {if (words==='' && twittersentiment==='' && twittererror==='') {
    return <Loader/>
  }else if(words === '' && twittersentiment !==''){
    return <div><h3 style={{color:'red'}}>Now Loading Wordcloud...</h3></div>
  }else if(twittererror === 'yes' && words==='' && twittersentiment===''){
    return <TwitterError Errors={msg} twittererror={getsentiment}/>
  }
  else if(twittersentiment !=='' && words !==''){
    return( 
    <Twitterstyles>
      <Sentiments colour={sentimentcolor(twittersentiment)}>Twitter Sentiment score is: <span>{twittersentiment}%</span></Sentiments>
      <div>What people are saying on twitter about this song:</div>
      <Tweets colour={sentimentcolor(twittersentiment)}><ReactWordcloud words={words} size={size}/></Tweets>
      <Button onClick={()=>getsentiment(null)}><FaWindowClose/> Close</Button>
    </Twitterstyles>
    )
  }
  }
  
}
//"proxy": "https://musicsentimentapi.herokuapp.com",