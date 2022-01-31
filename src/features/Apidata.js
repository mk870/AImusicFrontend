import { createSlice } from "@reduxjs/toolkit";

export const ApidataSlice = createSlice({
  name: 'apidata',
  initialState:{value:[]},
  reducers:{
    apidatalist:(state,action)=>{
      state.value = action.payload
    },
  },
})
export const {apidatalist} = ApidataSlice.actions
export default ApidataSlice.reducer