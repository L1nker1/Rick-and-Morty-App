import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const pageSlice = createSlice({
    name:"page",
    initialState:{
        page:1
    },
    reducers:{
        setpage:(state, action)=>{
            state.page= action.payload
        }
    }
});
export const  { setpage } = pageSlice.actions

export default pageSlice.reducer;

export const ReturnToPageOne = (e)=>(dispatch)=>{
    dispatch(setpage(e))
}