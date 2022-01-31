import { createGlobalStyle } from "styled-components";
import pic2 from '../Images/1.jpg'
export const Globalstyles = createGlobalStyle`
  body{
    background-color: black;
    font-family: 'Poppins',Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    justify-content: center;
    color:white;
    
  }
  img{
    border: 2px solid red;
    border-radius: 20px;
    
  }
  .cover{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
  }
  .info{
    display:flex;
    flex-direction:row;
  }
  .frame{
    border: 2px solid white;
    height: 70vh;
    width: 80vw;
    
  }
  .button{
    display: flex;
    flex-direction: row;
    align-items:center;
    width:80vw;
    justify-content:flex-end;
    color:white;
    padding-bottom:5px;
  } 
  .close{
    cursor:pointer;
  }
  .welcomeContainer{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .description{
      text-align:center;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      width: 80vw;
      font-weight:bold;
      background: rgb(39, 51, 89, 0.4);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-radius:15px;
      padding: 5px;
      margin-bottom:10px;
      
    }
    @media(max-width:320px){
      margin-left: 2em;
    }
  }
  #greeting{
    color:red;
    
  }
  .wrapper{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
  }
  .two{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 40vw;
    //justify-self:center;
    //align-self:center;
  }
  .one{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-image: url(${pic2});
    padding-bottom: 30px;
    //padding-right:5em ;
    width: 75vw;
    min-width: 300px;
  }
  .one-api{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    background-image: url(${pic2});
    padding: 15px;
    margin-bottom: 10px;
    &>p{
      width: 80vw;
      text-align:center;
    }
  }
  .musicpic{
    width: 25em;
    height: 20em;
  }
  .genrelist{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:10px;
    //width: 35vw;
    
    @media(max-width:1300px){
      grid-template-columns: 1fr 1fr;
    }
  }
  .genres{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:1px solid white;
    border-radius:5px;
    padding:5px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
  }
  .artists{
      height: 7vw;
      width: 9vw;
      min-width:9em;
      min-height:7em;
      border-radius:20px;
    }
  .videoTitle{
    color:white;
    font-size:15px;
    width: 70vw;
  }
  .loader{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .loading{
      border: none;
      margin-top:5em;
    }
  }
  
  `