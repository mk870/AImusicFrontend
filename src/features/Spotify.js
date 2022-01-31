import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice({
  name: 'token',
  initialState:{value:''},
  reducers:{
    spotifytoken :(state,action)=>{
      state.value = action.payload
    },
  },
})
export const {spotifytoken} = spotifySlice.actions
export default spotifySlice.reducer