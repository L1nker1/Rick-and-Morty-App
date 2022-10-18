import React,{useEffect,useState} from "react";
import CharactersCards from "./Cards/Cards"
import {useDispatch, useSelector} from "react-redux"
import {GetAllCharacter } from "../redux/store/slice/users/"
import Paginado from "./paginado/paginado";
import Nav from "./Navbar/navbar";


export default function Home () {
    const dispatch = useDispatch()
    let {list} = useSelector(state=>state.characters)
    const [currentPage, setCurrentPage] = useState(1);

    const [numPJ] = useState(10);
    const LastIndex = numPJ * currentPage 
    const FirstIndex = LastIndex - numPJ  // 10 - 10

    //volver a pag 1 al buscar
    useEffect(()=>{
        setCurrentPage(1)
    },[list])
    
    //dispatch inicial carga characters
    useEffect(()=>{
        dispatch(GetAllCharacter())
    },[])

    const CurrentCharacters = list ? list.slice(FirstIndex, LastIndex) : null

    const ChangePage = (num)=>{
        setCurrentPage(num)
    };

    return(
        <div>
            <h1>Rick And Morty App</h1>
            <Nav></Nav>
            <div>
                <Paginado Characters={list.length} numPJ={numPJ} ChangePage={ChangePage} currentPage={currentPage}/>
            </div>
            <div>
            {CurrentCharacters && CurrentCharacters.map(e=>(
                <CharactersCards name={e.name} species={e.species} image={e.image} origin={e.origin}/>
                ))}
            </div>
        </div>
    )

}