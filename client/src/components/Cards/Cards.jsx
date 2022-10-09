import React from "react";
import s from "./Cards.module.css"

export default function CharactersCards(props){
    return(
        <div className={s.pos}>
            <h1>{props.name}</h1>
            <h2>{props.species}</h2>
            <img src={props.image} alt="?" />
            <h3>{props.origin}</h3>
        </div>
    )
}