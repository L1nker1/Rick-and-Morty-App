import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const userSlice = createSlice({
    name:"characters",
    initialState:{
        list:[]
    },
    reducers:{
        setCharacters:(state, action)=>{

            state.list= action.payload
        }
    }
});
export const  { setCharacters } = userSlice.actions

export default userSlice.reducer;

export const GetAllCharacter = ()=>async(dispatch)=>{
    await axios
    .get("http://localhost:3001/character/")
    .then((response)=>{
        dispatch(
            dispatch(setCharacters(response.data)),
            console.log(response.data)
        )
    })
    .catch((error)=>console.log(error))

} 
