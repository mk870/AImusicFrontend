import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import  searchReducer  from './features/search';
import  apiReducer  from './features/Apidata';
import  songReducer  from './features/Songclick';
import  tokenReducer  from './features/Spotify';

const store = configureStore({
  reducer:{
    search: searchReducer,
    apidata: apiReducer,
    song: songReducer,
    token: tokenReducer,
  }
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


