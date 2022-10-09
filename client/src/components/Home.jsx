import React,{useEffect,useState} from "react";
import CharactersCards from "./Cards/Cards"
import {useDispatch, useSelector} from "react-redux"
import {GetAllCharacter } from "../redux/store/slice/users/"
import Paginado from "./paginado/paginado";


export default function Home () {
    const dispatch = useDispatch()
    let {list} = useSelector(state=>state.characters)
    const [currentPage, setCurrentPage] = useState(1);

    const [numPJ] = useState(10);
    const LastIndex = numPJ * currentPage 
    const FirstIndex = LastIndex - numPJ  // 10 - 10
    
    useEffect(()=>{
        dispatch(GetAllCharacter())
    },[])
    const CurrentCharacters = list.slice(FirstIndex, LastIndex);

    const ChangePage = (num)=>{
        setCurrentPage(num)
    };

    return(
        <div>
            <h1>Rick And Morty App</h1>
            <div>
                <Paginado Characters={list.length} numPJ={numPJ} ChangePage={ChangePage}/>
            </div>
            <div>
            {CurrentCharacters.length > 0 ? CurrentCharacters.map(e=>(
                <CharactersCards name={e.name} species={e.species} image={e.image} origin={e.origin}/>
                )): null}
            </div>
            

        </div>
    )

}