import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const episodeSlice = createSlice({
    name:"episode",
    initialState:{
        episodes:[]
    },
    reducers:{
        setEpisodes:(state,action)=>{
            state.episodes = action.payload
        }
    }
});

export const {setEpisodes} = episodeSlice.actions
export default episodeSlice.reducer;

export const LoadEpisodes = ()=> async (dispatch)=>{
    let request = await axios("http://localhost:3001/Episodes/save")
    console.log(request.data)
    dispatch(setEpisodes(request.data))
}



