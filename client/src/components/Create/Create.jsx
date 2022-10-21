import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadEpisodes } from "../../redux/store/slice/episodes/index";
import {CreateCharacter} from "../../redux/store/slice/users/index"


export default function Create(){
    const dispatch = useDispatch();
    let [character, setCharacter] = useState({
        name:"",
        species:"",
        origin:"",
        image:"",
        episode:[],
    })
    const {episodes} = useSelector(state=>state.episodes)


    useEffect(()=>{
        dispatch(LoadEpisodes())
    },[])
    const HandlerInputChange = (e)=>{
        let InputValue = e.target.value
        setCharacter({
            ...character,
            [e.target.name]: InputValue
        })
        console.log(character)

    }
    const HandlerSelect = (e) =>{
        if (!character.episode.includes(e.target.value)) //evitar repetidos
        setCharacter({
            ...character,
            episode:[...character.species, e.target.value ]
        })
        console.log(character.episode)

    }


    const HandlerSubmit = (e)=>{
        e.preventDefault()
        try{
            dispatch(CreateCharacter(character))
            console.log("se envio el personaje")
        }catch(e){
            return e
        }

    }
    return (
        <div>
            <form onSubmit={(e)=>HandlerSubmit(e)}>
                <label>Name</label>
                <input type="text" value={character.name} name="name" onChange={HandlerInputChange} />
                <label>Species</label>
                <input type="text" value={character.species} name="species" onChange={HandlerInputChange} />
                <label>Origin</label>
                <input type="text" value={character.origin} name="origin" onChange={HandlerInputChange} />
                <label>Image</label>
                <input type="text" value={character.image} name="image" onChange={HandlerInputChange} />

            <label>Episodio</label>
                <select placeholder="Select Episode"  value={character.episode}  name="episode" onChange={(e)=>HandlerSelect(e)}>
                    <option disabled={true}>Select an Episode</option>
                    {episodes && episodes.map((ep)=>{ return <option  key={ep.id} value={ep.name}>{ep.name}</option>})}
                </select>
            <button type="submit">Crear</button>
            </form>
        </div>
    )
}