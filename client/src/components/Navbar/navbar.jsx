import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import SearchBar from "../SearchBar/SearchBar";

export default function Nav(){
    const [CharacterName, setCharacterName] = useState("")
    const dispatch = useDispatch()
    const SearchCharacter = (input)=>{
        input.preventDefault()
        console.log(input)
        dispatch((input))
    }
    return (
        <nav>
            <SearchBar/>


        </nav>
    )
    
}