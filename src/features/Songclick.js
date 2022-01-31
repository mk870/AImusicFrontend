import { createSlice } from "@reduxjs/toolkit";

export const SongclickSlice = createSlice({
  name: 'songclicked',
  initialState:{value:''},
  reducers:{
    song:(state,action)=>{
      state.value = action.payload
    },
  },
})
export const {song} = SongclickSlice.actions
export default SongclickSlice.reducer