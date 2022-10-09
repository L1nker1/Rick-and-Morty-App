import React from "react";
import s from "./paginado.module.css"

export default function Paginado({Characters,numPJ,ChangePage}){
    let numbers = [];
    let pages = Math.ceil(Characters/numPJ)
    for(let x = 0; x < pages; x++ ){
        numbers.push(x+1);
    }
    return(
        <div className={s.pos}>
            {console.log(numPJ)}
            {numbers && numbers.map(e=>(
                <button onClick={()=>ChangePage(e)} key={e}>{e}</button>
            ))}
        </div>
    )
}