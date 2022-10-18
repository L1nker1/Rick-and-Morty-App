import React,{useState} from "react";
import s from "./paginado.module.css"

export default function Paginado({Characters,numPJ,ChangePage,currentPage}){
    let numbers = [];

    let pages = Math.ceil(Characters/numPJ)
    for(let x = 0; x < pages; x++ ){
        numbers.push(x+1);
    };

    function siguiente (){
        ChangePage(currentPage + 1)
    };

    function previo (){
        ChangePage(currentPage - 1)
    };

    return(
        <nav className={s.pos}>
        <ul class="pagination">
            {currentPage !== numbers[0] ? <li class="page-item" onClick={previo} disabled={currentPage === numbers[0] ? true : false}><button class="page-link cursor: pointer;">Previous</button></li>: null}
            {numbers && numbers.map(e=>(
                console.log(currentPage),
                <li  className={currentPage === e ? s.actual : "null"} onClick={()=>ChangePage(e)}><button className={currentPage === e ? s.actual : "page-link"}>{e}</button></li>
                
            ))}
            {currentPage !== numbers.length ?<li class="page-item" onClick={siguiente} disabled={currentPage === numbers[numbers.length-1] ? true : false}><button class="page-link">Next</button></li> : null}
        </ul>
        </nav>
    )
};