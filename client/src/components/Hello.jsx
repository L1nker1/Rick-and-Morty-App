import React from "react";

export default function Hola(mesage){
    console.log(mesage)
    return(
        <div>
            <h1>{`Hola ${mesage.mesage}`}</h1>
        </div>
    )
};