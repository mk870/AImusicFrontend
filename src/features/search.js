import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: 'search',
  initialState:{value:''},
  reducers:{
    usersearch:(state,action)=>{
      state.value = action.payload
    },
  },
})
export const {usersearch} = searchSlice.actions
export default searchSlice.reducer