import React,{useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { SearchaCharacter } from "../../redux/store/slice/users";
import {ReturnToPageOne} from "../../redux/store/slice/pages"

const SearchBar = ()=>{
    const [CharacterName, setCharacterName] = useState("")
    let {characters} = useSelector(state=>state.characters)
    const dispatch = useDispatch()
    const HandleInput = (e)=>{
        setCharacterName(e.target.value)
    }
    const SearchCharacter = (e)=>{
        e.preventDefault()
        dispatch(SearchaCharacter(CharacterName))
        setCharacterName("")
    }
    
    return(
        <nav>
            <form onSubmit={(e)=>SearchCharacter(e)}>
                <input type="search" value={CharacterName} onChange={(e)=>HandleInput(e)} />
                <button type="submit">Search</button>
            </form>
        </nav>
    )
}

export default SearchBar;